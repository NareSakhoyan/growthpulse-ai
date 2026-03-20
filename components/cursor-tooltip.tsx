'use client';

import * as React from 'react';

type CursorTooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  offsetX?: number;
  offsetY?: number;
  disabled?: boolean;
};

export function CursorTooltip({
  children,
  content,
  offsetX = 12,
  offsetY = 12,
  disabled = false,
}: CursorTooltipProps): React.JSX.Element {
  const [visible, setVisible] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const frameRef = React.useRef<number | null>(null);
  const pendingPositionRef = React.useRef({ x: 0, y: 0 });
  const glassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(11.5px)',
    WebkitBackdropFilter: 'blur(11.5px)',
  };

  React.useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function updatePosition(clientX: number, clientY: number): void {
    pendingPositionRef.current = {
      x: clientX + offsetX,
      y: clientY + offsetY,
    };

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      if (tooltipRef.current) {
        tooltipRef.current.style.transform = `translate3d(${pendingPositionRef.current.x}px, ${pendingPositionRef.current.y}px, 0)`;
      }

      frameRef.current = null;
    });
  }

  return (
    <div
      className='block h-full'
      onMouseEnter={(event) => {
        if (disabled) {
          return;
        }

        updatePosition(event.clientX, event.clientY);
        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={(event) => {
        if (disabled) {
          return;
        }

        updatePosition(event.clientX, event.clientY);
      }}
    >
      {children}

      {visible && !disabled ? (
        <div
          ref={tooltipRef}
          className='pointer-events-none fixed top-0 left-0 z-50 px-3 py-1 text-xs font-medium whitespace-nowrap text-slate-900 will-change-transform'
          style={{
            ...glassStyle,
          }}
        >
          {content}
        </div>
      ) : null}
    </div>
  );
}

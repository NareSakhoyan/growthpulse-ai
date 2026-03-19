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
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const glassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(11.5px)',
    WebkitBackdropFilter: 'blur(11.5px)',
  };

  return (
    <div
      className='block h-full'
      onMouseEnter={() => {
        if (disabled) {
          return;
        }

        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={(event) => {
        if (disabled) {
          return;
        }

        setPosition({
          x: event.clientX + offsetX,
          y: event.clientY + offsetY,
        });
      }}
    >
      {children}

      {visible && !disabled ? (
        <div
          className='pointer-events-none fixed z-50 px-3 py-1 text-xs font-medium whitespace-nowrap text-slate-900'
          style={{
            left: position.x,
            top: position.y,
            ...glassStyle,
          }}
        >
          {content}
        </div>
      ) : null}
    </div>
  );
}

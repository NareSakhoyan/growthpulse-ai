'use client';

import * as React from 'react';

type UseDeferredActivationOptions = {
  rootMargin?: string;
  idleTimeoutMs?: number;
};

export function useDeferredActivation({
  rootMargin = '0px',
  idleTimeoutMs = 800,
}: UseDeferredActivationOptions = {}): {
  ref: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
} {
  const [isActive, setIsActive] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isActive) {
      return;
    }

    const currentElement = ref.current;

    if (!currentElement) {
      return;
    }

    let cleanupScheduledActivation: (() => void) | undefined;

    const activate = (): void => {
      setIsActive(true);
    };

    const scheduleActivation = (): void => {
      if (cleanupScheduledActivation) {
        return;
      }

      if (typeof window.requestIdleCallback === 'function') {
        const idleCallbackId = window.requestIdleCallback(() => {
          activate();
        });

        cleanupScheduledActivation = () => window.cancelIdleCallback(idleCallbackId);
        return;
      }

      const timeoutId = window.setTimeout(() => {
        activate();
      }, idleTimeoutMs);

      cleanupScheduledActivation = () => window.clearTimeout(timeoutId);
    };

    if (typeof window.IntersectionObserver !== 'function') {
      scheduleActivation();

      return () => {
        cleanupScheduledActivation?.();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();
        scheduleActivation();
      },
      { rootMargin },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
      cleanupScheduledActivation?.();
    };
  }, [idleTimeoutMs, isActive, rootMargin]);

  return { ref, isActive };
}

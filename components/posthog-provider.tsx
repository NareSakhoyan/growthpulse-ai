'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import { analyticsEvents, captureEvent, capturePageview, preloadPostHog } from '@/lib/posthog';

type PostHogProviderProps = {
  children: React.ReactNode;
};

function PostHogTracker(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrlRef = useRef('');
  const hasLoadedAnalyticsRef = useRef(false);
  const [analyticsReady, setAnalyticsReady] = useState(false);

  useEffect(() => {
    function startAnalytics(): void {
      if (hasLoadedAnalyticsRef.current) {
        return;
      }

      hasLoadedAnalyticsRef.current = true;
      setAnalyticsReady(true);
      preloadPostHog();
    }

    function scheduleStart(): () => void {
      if (typeof window.requestIdleCallback === 'function') {
        const idleCallbackId = window.requestIdleCallback(() => {
          startAnalytics();
        });

        return () => window.cancelIdleCallback(idleCallbackId);
      }

      const timeoutId = window.setTimeout(() => {
        startAnalytics();
      }, 1500);

      return () => window.clearTimeout(timeoutId);
    }

    let cleanupScheduledStart: (() => void) | undefined;
    let cleanupFallbackTimeout: (() => void) | undefined;

    function handleFirstInteraction(): void {
      cleanupInteractionListeners();
      cleanupFallbackTimeout?.();
      cleanupScheduledStart = scheduleStart();
    }

    function cleanupInteractionListeners(): void {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    }

    const handleLoad = (): void => {
      const fallbackTimeoutId = window.setTimeout(() => {
        cleanupInteractionListeners();
        cleanupScheduledStart = scheduleStart();
      }, 8000);

      cleanupFallbackTimeout = () => window.clearTimeout(fallbackTimeoutId);

      window.addEventListener('pointerdown', handleFirstInteraction, { once: true, passive: true });
      window.addEventListener('keydown', handleFirstInteraction, { once: true });
      window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      cleanupInteractionListeners();
      cleanupFallbackTimeout?.();
      cleanupScheduledStart?.();
    };
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    currentUrlRef.current = url;

    if (analyticsReady) {
      capturePageview(url);
    }
  }, [analyticsReady, pathname, searchParams]);

  useEffect(() => {
    if (!analyticsReady) {
      return;
    }

    const capturedDepths = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    function trackScrollDepth(): void {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight <= 0 ? 100 : Math.round((window.scrollY / scrollHeight) * 100);

      thresholds.forEach((threshold) => {
        if (progress >= threshold && !capturedDepths.has(threshold)) {
          capturedDepths.add(threshold);
          captureEvent(analyticsEvents.scrollDepth, {
            depth_percent: threshold,
            path: pathname,
          });
        }
      });
    }

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, [analyticsReady, pathname]);

  return null;
}

/**
 * Initializes PostHog once on the client and manually records pageviews for
 * App Router navigations.
 *
 * @param props - The provider props.
 * @param props.children - The rendered application subtree.
 * @returns `PostHogProvider` returns the application subtree while attaching
 * client-side PostHog initialization and pageview tracking.
 */
export function PostHogProvider({ children }: PostHogProviderProps): React.JSX.Element {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <PostHogTracker />
      </Suspense>
    </>
  );
}

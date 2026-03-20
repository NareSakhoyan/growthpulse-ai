'use client';

import { Suspense, useEffect, useRef } from 'react';

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

  useEffect(() => {
    function startAnalytics(): void {
      if (hasLoadedAnalyticsRef.current) {
        return;
      }

      hasLoadedAnalyticsRef.current = true;
      preloadPostHog();

      if (currentUrlRef.current) {
        capturePageview(currentUrlRef.current);
      }
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

    const handleLoad = (): void => {
      cleanupScheduledStart = scheduleStart();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      cleanupScheduledStart?.();
    };
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    currentUrlRef.current = url;

    if (hasLoadedAnalyticsRef.current) {
      capturePageview(url);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const capturedDepths = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    function trackScrollDepth(): void {
      if (!hasLoadedAnalyticsRef.current) {
        return;
      }

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
  }, [pathname]);

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

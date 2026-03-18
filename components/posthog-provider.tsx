'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';

type PostHogProviderProps = {
  children: React.ReactNode;
};

export function PostHogProvider({ children }: PostHogProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!key || !host || posthog.__loaded) {
      return;
    }

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: 'identified_only',
    });
  }, []);

  useEffect(() => {
    if (!posthog.__loaded) {
      return;
    }

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    posthog.capture('$pageview', {
      $current_url: url,
    });
  }, [pathname, searchParams]);

  return children;
}

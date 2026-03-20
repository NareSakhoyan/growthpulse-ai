type PostHogModule = typeof import('posthog-js');
type PostHogClient = PostHogModule['default'];

export const analyticsEvents = {
  ctaClicked: 'cta_clicked',
  formStarted: 'form_started',
  formSubmitted: 'form_submitted',
  scrollDepth: 'scroll_depth',
  heroVariantSeen: 'hero_variant_seen',
  supabaseTestSucceeded: 'supabase_test_succeeded',
  supabaseTestFailed: 'supabase_test_failed',
  supabaseTestBlocked: 'supabase_test_blocked',
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsEventProperties = Record<string, string | number | boolean | null | undefined>;

type QueuedCapture = {
  event: string;
  properties?: Record<string, string | number | boolean | null | undefined>;
};

let hasWarnedMissingConfig = false;
let hasStartedLoading = false;
let posthogClient: PostHogClient | null = null;
let posthogPromise: Promise<PostHogClient | null> | null = null;
const queuedCaptures: QueuedCapture[] = [];

function getPostHogConfig(): { key: string; host: string } | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key || !host) {
    if (!hasWarnedMissingConfig) {
      hasWarnedMissingConfig = true;
      console.warn(
        'PostHog is disabled because NEXT_PUBLIC_POSTHOG_KEY or NEXT_PUBLIC_POSTHOG_HOST is missing.',
      );
    }

    return null;
  }

  return { key, host };
}

function queueCapture(
  event: string,
  properties?: Record<string, string | number | boolean | null | undefined>,
): void {
  queuedCaptures.push({ event, properties });
}

function flushQueuedCaptures(): void {
  if (!posthogClient) {
    return;
  }

  while (queuedCaptures.length > 0) {
    const capture = queuedCaptures.shift();

    if (!capture) {
      return;
    }

    posthogClient.capture(capture.event, capture.properties);
  }
}

async function ensurePostHog(): Promise<PostHogClient | null> {
  if (posthogClient) {
    return posthogClient;
  }

  if (posthogPromise) {
    return posthogPromise;
  }

  const config = getPostHogConfig();

  if (!config || typeof window === 'undefined') {
    queuedCaptures.length = 0;
    return null;
  }

  posthogPromise = import('posthog-js').then(({ default: posthog }) => {
    if (!posthog.__loaded) {
      posthog.init(config.key, {
        api_host: config.host,
        capture_pageview: false,
        capture_pageleave: true,
        person_profiles: 'identified_only',
      });
    }

    posthogClient = posthog;
    flushQueuedCaptures();

    return posthog;
  });

  return posthogPromise;
}

export function preloadPostHog(): void {
  if (hasStartedLoading) {
    return;
  }

  hasStartedLoading = true;
  void ensurePostHog();
}

/**
 * Queues an analytics event immediately and flushes it once PostHog has been
 * explicitly loaded after user interaction.
 */
export function captureEvent(event: AnalyticsEvent, properties?: AnalyticsEventProperties): void {
  if (posthogClient) {
    posthogClient.capture(event, properties);
    return;
  }

  queueCapture(event, properties);
}

export function capturePageview(url: string): void {
  if (posthogClient) {
    posthogClient.capture('$pageview', {
      $current_url: url,
    });
    return;
  }

  queueCapture('$pageview', {
    $current_url: url,
  });
}

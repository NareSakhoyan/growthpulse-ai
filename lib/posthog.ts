import posthog from 'posthog-js';

export const analyticsEvents = {
  ctaClicked: 'cta_clicked',
  formStarted: 'form_started',
  formSubmitted: 'form_submitted',
  heroVariantSeen: 'hero_variant_seen',
  supabaseTestSucceeded: 'supabase_test_succeeded',
  supabaseTestFailed: 'supabase_test_failed',
  supabaseTestBlocked: 'supabase_test_blocked',
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsEventProperties = Record<string, string | number | boolean | null | undefined>;

/**
 * Sends a PostHog event only after the client library has been initialized.
 *
 * @param event - The normalized analytics event name to capture.
 * @param properties - Optional event payload stored with the captured event.
 * @returns `captureEvent` returns nothing and exits early when PostHog has not
 * been initialized yet.
 */
export function captureEvent(event: AnalyticsEvent, properties?: AnalyticsEventProperties): void {
  if (!posthog.__loaded) {
    return;
  }

  posthog.capture(event, properties);
}

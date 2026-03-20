export type TrendDirection = 'up' | 'down' | 'flat';

export type MetricStatus = 'Good' | 'Warning' | 'Critical';

export type LiveDashboardMetric = {
  id: string;
  name: string;
  score: number;
  benchmark: number;
  trend: TrendDirection;
};

export const liveDashboardMockData = [
  { id: 'acquisition', name: 'Acquisition', score: 72, benchmark: 74, trend: 'up' },
  { id: 'activation', name: 'Activation', score: 69, benchmark: 72, trend: 'up' },
  { id: 'retention', name: 'Retention', score: 81, benchmark: 78, trend: 'up' },
  { id: 'revenue', name: 'Revenue', score: 75, benchmark: 77, trend: 'down' },
  { id: 'referral', name: 'Referral', score: 58, benchmark: 66, trend: 'down' },
  { id: 'seo-health', name: 'SEO Health', score: 76, benchmark: 73, trend: 'up' },
  {
    id: 'paid-media-efficiency',
    name: 'Paid Media Efficiency',
    score: 61,
    benchmark: 70,
    trend: 'down',
  },
] as const satisfies readonly LiveDashboardMetric[];

export function clampMetricScore(score: number): number {
  return Math.min(100, Math.max(0, Math.round(score)));
}

export function getMetricStatus(score: number, benchmark: number): MetricStatus {
  if (score >= benchmark) {
    return 'Good';
  }

  if (benchmark - score <= 5) {
    return 'Warning';
  }

  return 'Critical';
}

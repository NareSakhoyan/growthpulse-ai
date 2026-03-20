'use client';

import { ActivityIcon, RefreshCwIcon } from 'lucide-react';
import { useEffect, useEffectEvent, useMemo, useState } from 'react';

import { AlertBanner } from '@/components/landing/alert-banner';
import {
  clampMetricScore,
  getMetricStatus,
  liveDashboardMockData,
  type LiveDashboardMetric,
} from '@/components/landing/live-dashboard-data';
import { MetricCard } from '@/components/landing/metric-card';
import { Badge } from '@/components/ui/badge';

function getNextMetricScore(metric: LiveDashboardMetric): number {
  const benchmarkPull = (metric.benchmark - metric.score) * 0.12;
  const variance = Math.random() * 8 - 4;

  return clampMetricScore(metric.score + benchmarkPull + variance);
}

function formatUpdatedAt(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp);
}

export function DashboardGrid(): React.JSX.Element {
  const [metrics, setMetrics] = useState<LiveDashboardMetric[]>(() => [...liveDashboardMockData]);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(() => Date.now());

  const refreshMetrics = useEffectEvent(() => {
    setMetrics((currentMetrics) =>
      currentMetrics.map((metric) => {
        const nextScore = getNextMetricScore(metric);

        return {
          ...metric,
          score: nextScore,
          trend: nextScore > metric.score ? 'up' : nextScore < metric.score ? 'down' : 'flat',
        };
      }),
    );
    setLastUpdatedAt(Date.now());
  });

  useEffect(() => {
    const intervalId = window.setInterval(refreshMetrics, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  const metricsWithStatus = useMemo(
    () =>
      metrics.map((metric) => ({
        ...metric,
        status: getMetricStatus(metric.score, metric.benchmark),
      })),
    [metrics],
  );

  const criticalCount = metricsWithStatus.filter((metric) => metric.status === 'Critical').length;
  const underBenchmarkCount = metricsWithStatus.filter(
    (metric) => metric.score < metric.benchmark,
  ).length;

  return (
    <section className='space-y-5'>
      <div className='flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
        <div className='space-y-2'>
          <div className='flex flex-wrap items-center gap-2'>
            <h3 className='text-base font-semibold text-white'>Live Dashboard</h3>
            <Badge className='border border-emerald-300/20 bg-emerald-500/15 text-emerald-100'>
              Real-time monitor
            </Badge>
          </div>
          <p className='max-w-2xl text-sm leading-6 text-slate-300'>
            Simulated tracking across the seven growth dimensions with benchmark-aware alerts.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-2 text-sm text-slate-300'>
          <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
            <ActivityIcon className='size-4 text-emerald-300' />
            <span>{underBenchmarkCount} below benchmark</span>
          </div>
          <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
            <RefreshCwIcon className='size-4 text-sky-300' />
            <span>Updated {formatUpdatedAt(lastUpdatedAt)}</span>
          </div>
        </div>
      </div>

      <AlertBanner criticalCount={criticalCount} underBenchmarkCount={underBenchmarkCount} />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {metricsWithStatus.map((metric) => (
          <MetricCard key={metric.id} metric={metric} status={metric.status} />
        ))}
      </div>
    </section>
  );
}

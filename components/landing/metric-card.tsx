import {
  AlertTriangleIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from 'lucide-react';

import {
  type LiveDashboardMetric,
  type MetricStatus,
  type TrendDirection,
} from '@/components/landing/live-dashboard-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type MetricCardProps = {
  metric: LiveDashboardMetric;
  status: MetricStatus;
};

type ToneConfig = {
  badgeClassName: string;
  fillClassName: string;
  overlayClassName: string;
  rootClassName: string;
  textClassName: string;
  trackClassName: string;
};

function getStatusTone(status: MetricStatus): ToneConfig {
  if (status === 'Good') {
    return {
      badgeClassName: 'border border-emerald-300/20 bg-emerald-500/15 text-emerald-100',
      fillClassName: 'bg-[linear-gradient(90deg,#34d399,#22c55e)]',
      overlayClassName:
        'bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]',
      rootClassName: 'border-white/10 bg-slate-950/70',
      textClassName: 'text-emerald-300',
      trackClassName: 'bg-emerald-500/10',
    };
  }

  if (status === 'Warning') {
    return {
      badgeClassName: 'border border-amber-300/20 bg-amber-500/15 text-amber-100',
      fillClassName: 'bg-[linear-gradient(90deg,#fbbf24,#f59e0b)]',
      overlayClassName:
        'bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_38%),linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0))]',
      rootClassName: 'border-amber-400/25 bg-slate-950/75',
      textClassName: 'text-amber-300',
      trackClassName: 'bg-amber-500/10',
    };
  }

  return {
    badgeClassName: 'border border-rose-300/20 bg-rose-500/15 text-rose-100',
    fillClassName: 'bg-[linear-gradient(90deg,#fb7185,#ef4444)]',
    overlayClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.2),transparent_38%),linear-gradient(180deg,rgba(244,63,94,0.08),rgba(255,255,255,0))]',
    rootClassName: 'border-rose-400/30 bg-slate-950/75',
    textClassName: 'text-rose-300',
    trackClassName: 'bg-rose-500/10',
  };
}

function getTrendPresentation(trend: TrendDirection): {
  className: string;
  Icon: typeof ArrowUpRightIcon;
  label: string;
} {
  if (trend === 'up') {
    return {
      className: 'text-emerald-300',
      Icon: ArrowUpRightIcon,
      label: 'Improving',
    };
  }

  if (trend === 'down') {
    return {
      className: 'text-rose-300',
      Icon: ArrowDownRightIcon,
      label: 'Dropping',
    };
  }

  return {
    className: 'text-slate-300',
    Icon: ArrowRightIcon,
    label: 'Stable',
  };
}

export function MetricCard({ metric, status }: MetricCardProps): React.JSX.Element {
  const tone = getStatusTone(status);
  const trend = getTrendPresentation(metric.trend);
  const isBelowBenchmark = metric.score < metric.benchmark;
  const gap = Math.abs(metric.score - metric.benchmark);

  return (
    <Card
      className={cn(
        'relative isolate overflow-hidden rounded-3xl text-white shadow-none',
        tone.rootClassName,
      )}
    >
      <div className={cn('pointer-events-none absolute inset-0 z-0', tone.overlayClassName)} />

      <CardHeader className='relative z-10 space-y-4 pb-4'>
        <div className='flex items-start justify-between gap-3'>
          <div className='space-y-1'>
            <p className='text-xs tracking-[0.16em] text-slate-400 uppercase'>Dimension</p>
            <CardTitle className='text-base'>{metric.name}</CardTitle>
          </div>
          <Badge className={tone.badgeClassName}>{status}</Badge>
        </div>

        <div className='flex items-end justify-between gap-3'>
          <div className='space-y-1'>
            <div className='flex items-end gap-2'>
              <p className='text-4xl font-semibold tracking-tight text-white'>{metric.score}</p>
              <span className='pb-1 text-sm text-slate-400'>/100</span>
            </div>
            <p className='text-sm text-slate-300'>Benchmark {metric.benchmark}</p>
          </div>

          <div className={cn('flex items-center gap-1 text-sm font-medium', trend.className)}>
            <trend.Icon className='size-4' />
            <span>{trend.label}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className='relative z-10 space-y-4'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-400'>
            <span>Performance</span>
            <span className={tone.textClassName}>{gap}-pt gap</span>
          </div>

          <div className={cn('relative h-2 overflow-hidden rounded-full', tone.trackClassName)}>
            <div
              className={cn('h-full rounded-full transition-[width]', tone.fillClassName)}
              style={{ width: `${metric.score}%` }}
            />
            <div
              className='absolute top-1/2 h-4 w-px -translate-y-1/2 bg-white/70'
              style={{ left: `${metric.benchmark}%` }}
            />
          </div>
        </div>

        <div className='flex items-center justify-between gap-3 text-sm'>
          <div className='flex items-center gap-2 text-slate-300'>
            <span className='size-2 rounded-full bg-slate-400/70' />
            <span>Benchmark marker</span>
          </div>

          {isBelowBenchmark ? (
            <div className='flex items-center gap-2 font-medium text-rose-200'>
              <AlertTriangleIcon className='size-4' />
              <span>Below benchmark</span>
            </div>
          ) : (
            <span className='font-medium text-emerald-200'>At or above benchmark</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

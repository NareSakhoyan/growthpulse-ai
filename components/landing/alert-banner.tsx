import { AlertTriangleIcon, SirenIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type AlertBannerProps = {
  criticalCount: number;
  underBenchmarkCount: number;
};

export function AlertBanner({
  criticalCount,
  underBenchmarkCount,
}: AlertBannerProps): React.JSX.Element | null {
  if (criticalCount === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden flex flex-col gap-3 rounded-3xl border border-rose-400/30 bg-slate-950/80 p-4 text-rose-50 shadow-[0_22px_45px_-34px_rgba(244,63,94,0.85)]',
        'sm:flex-row sm:items-center sm:justify-between',
      )}
    >
      <div className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.24),transparent_42%),linear-gradient(180deg,rgba(127,29,29,0.3),rgba(69,10,10,0.16))]' />

      <div className='relative z-10 flex items-start gap-3'>
        <div className='rounded-2xl border border-rose-300/20 bg-rose-500/15 p-2 text-rose-200'>
          <SirenIcon className='size-4' />
        </div>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold text-white'>
              {criticalCount === 1
                ? '1 metric is underperforming'
                : `${criticalCount} metrics are underperforming`}
            </p>
            <Badge className='border border-rose-300/20 bg-rose-500/15 text-rose-100'>
              Critical alert
            </Badge>
          </div>
          <p className='text-sm text-rose-100/80'>
            {underBenchmarkCount} of 7 tracked dimensions are currently below benchmark.
          </p>
        </div>
      </div>

      <div className='relative z-10 flex items-center gap-2 rounded-2xl border border-rose-300/15 bg-black/10 px-3 py-2 text-sm text-rose-100/85'>
        <AlertTriangleIcon className='size-4' />
        <span>Below benchmark metrics need attention</span>
      </div>
    </div>
  );
}

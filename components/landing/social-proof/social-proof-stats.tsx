import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { stats } from './social-proof-data';

type SocialProofStatsProps = {
  activeCardId: string | null;
};

export function SocialProofStats({ activeCardId }: SocialProofStatsProps): React.JSX.Element {
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className={cn(
            'relative isolate overflow-hidden border-white/65 bg-white/45 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.2),0_8px_18px_-16px_rgba(15,23,42,0.12)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transform-gpu will-change-transform',
            activeCardId === stat.id && stat.activeClass,
          )}
        >
          <div
            className={cn(
              'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out',
              activeCardId === stat.id && stat.overlayClass,
            )}
          />
          <CardHeader className='relative z-10 space-y-4 p-5 sm:p-6'>
            <stat.icon
              className={cn(
                'pointer-events-none absolute -right-5 -top-2 z-0 size-28 text-slate-950/[0.07] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:size-32',
                activeCardId === stat.id && 'scale-105 rotate-3',
              )}
            />
            <div className='relative z-10 flex items-center justify-between gap-3'>
              <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
                {stat.label}
              </p>
            </div>
            <CardTitle className={cn('text-3xl tracking-tight', stat.valueClass)}>
              {stat.value}
            </CardTitle>
            <CardDescription className='text-sm leading-6'>{stat.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

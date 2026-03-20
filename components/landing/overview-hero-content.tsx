import { Card, CardHeader } from '@/components/ui/card';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';

export function OverviewHeroContent(): React.JSX.Element {
  return (
    <div className='space-y-8'>
      <div className='max-w-3xl space-y-5 px-2 sm:px-0'>
        <div className='space-y-4'>
          <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-balance text-slate-950 sm:text-5xl xl:text-6xl'>
            See where your funnel is leaking revenue.
          </h1>
          <p className='max-w-2xl text-base leading-7 text-slate-700 sm:text-lg'>
            GrowthPulse AI audits your messaging, funnel, and conversion flow so you can see
            what&apos;s underperforming, what it&apos;s costing you, and what to fix first.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-3 px-2 sm:flex-row sm:px-0'>
        <GlassCtaButton asChild size='lg' className='border-0'>
          <a href='#get-audit'>Get your audit</a>
        </GlassCtaButton>
        <GlassCtaButton asChild size='lg' tone='soft'>
          <a href='#features'>See how it works</a>
        </GlassCtaButton>
      </div>

      <div className='grid gap-4 sm:grid-cols-3'>
        <Card className='border-white/70 bg-white/60 shadow-none ring-1 ring-slate-200/70 backdrop-blur-sm'>
          <CardHeader className='gap-1 pb-2'>
            <p className='text-xs font-semibold tracking-[0.18em] text-slate-700 uppercase'>
              Audit Time
            </p>
            <p className='text-2xl font-semibold tracking-tight text-slate-950'>12 min</p>
          </CardHeader>
        </Card>
        <Card className='border-white/70 bg-white/60 shadow-none ring-1 ring-slate-200/70 backdrop-blur-sm'>
          <CardHeader className='gap-1 pb-2'>
            <p className='text-xs font-semibold tracking-[0.18em] text-slate-700 uppercase'>
              Priority Gaps
            </p>
            <p className='text-2xl font-semibold tracking-tight text-slate-950'>7 issues</p>
          </CardHeader>
        </Card>
        <Card className='border-white/70 bg-white/60 shadow-none ring-1 ring-slate-200/70 backdrop-blur-sm'>
          <CardHeader className='gap-1 pb-2'>
            <p className='text-xs font-semibold tracking-[0.18em] text-slate-700 uppercase'>
              Lift Potential
            </p>
            <p className='text-2xl font-semibold tracking-tight text-slate-950'>+18%</p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

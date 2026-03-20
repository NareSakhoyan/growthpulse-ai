import { Card, CardHeader } from '@/components/ui/card';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';

export function OverviewHeroContent(): React.JSX.Element {
  return (
    <div className='space-y-8'>
      <div className='max-w-3xl space-y-5'>
        <div className='space-y-4'>
          <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl'>
            Turn your marketing stack into a clear revenue dashboard.
          </h1>
          <p className='max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
            GrowthPulse AI audits your funnel, messaging, and conversion points, then turns the
            findings into a prioritized action plan your team can ship quickly.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-3 sm:flex-row'>
        <GlassCtaButton asChild size='lg' className='border-0'>
          <a href='#get-audit'>Get your audit</a>
        </GlassCtaButton>
        <GlassCtaButton asChild size='lg' tone='soft'>
          <a href='#features'>See how it works</a>
        </GlassCtaButton>
      </div>

      <div className='grid gap-4 sm:grid-cols-3'>
        <Card className='border-white/60 bg-white/60 shadow-none backdrop-blur-sm'>
          <CardHeader className='gap-1 pb-2'>
            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>Audit Time</p>
            <p className='text-2xl font-semibold tracking-tight'>12 min</p>
          </CardHeader>
        </Card>
        <Card className='border-white/60 bg-white/60 shadow-none backdrop-blur-sm'>
          <CardHeader className='gap-1 pb-2'>
            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
              Priority Gaps
            </p>
            <p className='text-2xl font-semibold tracking-tight'>7 issues</p>
          </CardHeader>
        </Card>
        <Card className='border-white/60 bg-white/60 shadow-none backdrop-blur-sm'>
          <CardHeader className='gap-1 pb-2'>
            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
              Lift Potential
            </p>
            <p className='text-2xl font-semibold tracking-tight'>+18%</p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

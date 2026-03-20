'use client';

import { useHeroVariant } from '@/components/landing/use-hero-variant';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';
import { analyticsEvents, captureEvent } from '@/lib/posthog';

export function OverviewSection(): React.JSX.Element {
  const { variant: heroVariant, copy: activeHeroCopy } = useHeroVariant();

  return (
    <section
      id='overview'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_14%_18%,rgba(125,211,252,0.22),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(167,139,250,0.22),transparent_20%),linear-gradient(135deg,rgba(244,249,255,0.98),rgba(238,244,255,0.96)_46%,rgba(255,255,255,1))] py-12 sm:py-14 lg:py-16'
    >
      <div className='mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:gap-10 lg:px-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-center'>
        <div className='space-y-6'>
          <div className='space-y-5'>
            <div className='space-y-4'>
              <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl'>
                {activeHeroCopy.headline}
              </h1>
              <p className='max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
                {activeHeroCopy.description}
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <GlassCtaButton asChild size='lg' className='border-0'>
              <a
                href='#get-audit'
                onClick={() =>
                  captureEvent(analyticsEvents.ctaClicked, {
                    cta_id: 'hero_get_audit',
                    cta_label: 'Get your audit',
                    hero_variant: heroVariant,
                    section: 'overview',
                  })
                }
              >
                Get your audit
              </a>
            </GlassCtaButton>
            <GlassCtaButton asChild size='lg' tone='soft'>
              <a
                href='#features'
                onClick={() =>
                  captureEvent(analyticsEvents.ctaClicked, {
                    cta_id: 'hero_see_how_it_works',
                    cta_label: 'See how it works',
                    hero_variant: heroVariant,
                    section: 'overview',
                  })
                }
              >
                See how it works
              </a>
            </GlassCtaButton>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            <Card className='border-white/60 bg-white/60 shadow-none backdrop-blur-sm'>
              <CardHeader className='gap-1 pb-2'>
                <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
                  Audit Time
                </p>
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

        <Card className='border-transparent bg-slate-950 text-slate-50 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]'>
          <CardHeader className='space-y-4 border-b border-white/10 p-5 pb-5 sm:p-6 sm:pb-5'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <CardTitle className='text-xl text-white'>Audit Command Center</CardTitle>
                <CardDescription className='text-slate-300'>
                  Live overview of your funnel health and next actions.
                </CardDescription>
              </div>
              <Badge className='border-transparent bg-emerald-500/15 text-emerald-300'>Live</Badge>
            </div>

            <div className='grid gap-3 sm:grid-cols-3'>
              <Card className='border-white/10 bg-white/5 text-white shadow-none'>
                <CardHeader className='gap-1 pb-2'>
                  <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>Traffic</p>
                  <p className='text-2xl font-semibold'>42.8k</p>
                </CardHeader>
              </Card>
              <Card className='border-white/10 bg-white/5 text-white shadow-none'>
                <CardHeader className='gap-1 pb-2'>
                  <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>CVR</p>
                  <p className='text-2xl font-semibold'>3.9%</p>
                </CardHeader>
              </Card>
              <Card className='border-white/10 bg-white/5 text-white shadow-none'>
                <CardHeader className='gap-1 pb-2'>
                  <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>CAC</p>
                  <p className='text-2xl font-semibold'>$118</p>
                </CardHeader>
              </Card>
            </div>
          </CardHeader>

          <CardContent className='grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]'>
            <Card className='border-white/10 bg-white/5 text-white shadow-none'>
              <CardHeader className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-base'>Funnel Snapshot</CardTitle>
                  <span className='text-xs text-emerald-300'>Improving</span>
                </div>
                <div className='space-y-3'>
                  {[
                    { label: 'Landing page clarity', value: '82%', width: '82%' },
                    { label: 'Offer resonance', value: '61%', width: '61%' },
                    { label: 'CTA visibility', value: '74%', width: '74%' },
                  ].map((item) => (
                    <div key={item.label} className='space-y-1.5'>
                      <div className='flex items-center justify-between text-sm text-slate-300'>
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className='h-2 rounded-full bg-white/10'>
                        <div
                          className='h-2 rounded-full bg-[linear-gradient(90deg,#34d399,#60a5fa)]'
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>

            <Card className='border-white/10 bg-white/5 text-white shadow-none'>
              <CardHeader className='space-y-3'>
                <CardTitle className='text-base'>Next Actions</CardTitle>
                <div className='space-y-3 text-sm text-slate-300'>
                  <div className='rounded-lg border border-white/10 bg-white/5 p-3'>
                    Rewrite headline around outcome, not feature list.
                  </div>
                  <div className='rounded-lg border border-white/10 bg-white/5 p-3'>
                    Move trust proof above the pricing comparison.
                  </div>
                  <div className='rounded-lg border border-white/10 bg-white/5 p-3'>
                    Add a clearer CTA path for audit-ready leads.
                  </div>
                </div>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

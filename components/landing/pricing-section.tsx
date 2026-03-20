'use client';

import * as React from 'react';

import { CursorTooltip } from '@/components/cursor-tooltip';
import { AnimatedGrainyBg } from '@/components/ui/animated-grainy-bg';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckIcon, SparklesIcon } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$149',
    cadence: '/audit',
    description: 'A focused one-time audit for founders who need fast clarity on what to fix next.',
    cta: 'Start audit',
    highlights: ['Core funnel review', 'Headline and CTA analysis', '48-hour delivery'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$349',
    cadence: '/month',
    description:
      'A recurring audit workflow for teams that want clear priorities, testing ideas, and tighter iteration loops.',
    cta: 'Choose Growth',
    highlights: [
      'Monthly full-funnel audit',
      'Prioritized action roadmap',
      'Async strategist support',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$899',
    cadence: '/month',
    description:
      'A higher-touch operating layer for teams managing multiple campaigns, landing pages, and conversion paths.',
    cta: 'Talk to sales',
    highlights: [
      'Multi-page audit coverage',
      'Channel-by-channel diagnostics',
      'Leadership-ready reporting',
    ],
    featured: false,
  },
] as const;

export function PricingSection(): React.JSX.Element {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('Growth');

  return (
    <section
      id='pricing'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_14%_20%,rgba(99,102,241,0.30),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(56,189,248,0.22),transparent_20%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.98))] py-8 text-white sm:py-10'
    >
      <div className='space-y-8 px-4 sm:px-6'>
        <div className='space-y-4'>
          <div className='max-w-3xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Pricing built to fit a founder sprint or a full growth operating rhythm.
            </h2>
            <p className='text-base leading-7 text-slate-300'>
              The section stays readable inside the sidebar layout with compact cards on smaller
              widths and a more balanced three-plan comparison once space opens up.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 xl:flex-row'>
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.name;
            const isFeatured = isSelected;
            const showPopularBadge = plan.featured;

            return (
              <div key={plan.name} className='xl:flex-1'>
                <CursorTooltip
                  content={isSelected ? 'Selected' : 'Select'}
                  disabled={isSelected}
                  offsetX={16}
                  offsetY={-16}
                >
                  <button
                    type='button'
                    aria-pressed={isSelected}
                    className='group relative block h-full w-full cursor-pointer overflow-visible text-left outline-hidden'
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <Card
                      className={cn(
                        'relative overflow-hidden flex h-full flex-col transform-gpu motion-safe:transition-[transform,box-shadow,border-color,background-image,background-color] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]',
                        isFeatured
                          ? 'border-white/14 bg-transparent text-slate-50 ring-2 ring-cyan-300/15 [box-shadow:0_24px_50px_rgba(15,23,42,0.28)] motion-safe:-translate-y-1'
                          : 'border-white/12 bg-white/6 text-slate-50 shadow-none backdrop-blur-sm before:pointer-events-none before:absolute before:inset-y-[-32%] before:left-[-52%] before:w-[42%] before:-rotate-[156deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),rgba(191,219,254,0.18),rgba(255,255,255,0.48),rgba(196,181,253,0.22),transparent)] before:opacity-0 before:blur-lg before:transition-[transform,opacity] before:duration-1000 before:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:translate-y-0 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-[0.35deg] motion-safe:group-hover:shadow-lg motion-safe:group-hover:before:translate-x-[260%] motion-safe:group-hover:before:opacity-100',
                      )}
                    >
                      {isSelected ? (
                        <AnimatedGrainyBg
                          as='div'
                          animationType='aurora'
                          grainType='paper'
                          grainIntensity={28}
                          grainSize={76}
                          grainBlendMode='soft-light'
                          speed={1.8}
                          colors={['#7c3aed', '#6366f1', '#3b82f6', '#06b6d4']}
                          className='h-full rounded-[inherit] bg-transparent'
                          darkMode
                          style={{ backgroundColor: '#020617' }}
                        >
                          <CardHeader className='relative z-10 flex h-full flex-col gap-5'>
                            <div className='space-y-4'>
                              <div className='flex items-start justify-between gap-3'>
                                <div className='space-y-1'>
                                  <CardTitle className='text-xl'>{plan.name}</CardTitle>
                                  <CardDescription className='text-sm leading-6 text-slate-300'>
                                    {plan.description}
                                  </CardDescription>
                                </div>
                                {showPopularBadge ? (
                                  <Badge className='gap-1 rounded-[16px] border border-white/18 bg-white/10 px-2.5 py-1 text-[11px] text-slate-200 shadow-md backdrop-blur-[11.5px] motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-200'>
                                    <SparklesIcon className='size-3.5' />
                                    Popular
                                  </Badge>
                                ) : null}
                              </div>

                              <div className='flex items-end gap-1'>
                                <span className='text-4xl font-semibold tracking-tight'>
                                  {plan.price}
                                </span>
                                <span className='pb-1 text-sm text-slate-300'>{plan.cadence}</span>
                              </div>
                            </div>

                            <div className='space-y-3'>
                              {plan.highlights.map((highlight) => (
                                <div
                                  key={highlight}
                                  className='flex items-start gap-2 text-sm leading-6 text-slate-100/90'
                                >
                                  <CheckIcon className='mt-1 size-4 shrink-0 text-cyan-300' />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>

                            <div className='mt-auto pt-3'>
                              <div className='inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-slate-200 uppercase backdrop-blur-sm'>
                                <span className='size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]' />
                                Selected plan
                              </div>
                            </div>
                          </CardHeader>
                        </AnimatedGrainyBg>
                      ) : (
                        <CardHeader className='relative z-10 flex h-full flex-col gap-5'>
                          <div className='space-y-4'>
                            <div className='flex items-start justify-between gap-3'>
                              <div className='space-y-1'>
                                <CardTitle className='text-xl'>{plan.name}</CardTitle>
                                <CardDescription
                                  className={cn(
                                    'text-sm leading-6',
                                    isFeatured ? 'text-slate-600' : 'text-slate-300',
                                  )}
                                >
                                  {plan.description}
                                </CardDescription>
                              </div>
                              {showPopularBadge ? (
                                <Badge className='gap-1 rounded-[16px] border border-white/30 bg-white/20 px-2.5 py-1 text-[11px] text-slate-200 shadow-md backdrop-blur-[11.5px] motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-200'>
                                  <SparklesIcon className='size-3.5' />
                                  Popular
                                </Badge>
                              ) : null}
                            </div>

                            <div className='flex items-end gap-1'>
                              <span className='text-4xl font-semibold tracking-tight'>
                                {plan.price}
                              </span>
                              <span
                                className={cn(
                                  'pb-1 text-sm',
                                  isFeatured ? 'text-slate-500' : 'text-slate-300',
                                )}
                              >
                                {plan.cadence}
                              </span>
                            </div>
                          </div>

                          <div className='space-y-3'>
                            {plan.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className={cn(
                                  'flex items-start gap-2 text-sm leading-6',
                                  isFeatured ? 'text-slate-700' : 'text-slate-100/90',
                                )}
                              >
                                <CheckIcon className='mt-1 size-4 shrink-0 text-cyan-300' />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          <div className='mt-auto pt-3'>
                            <div
                              className={cn(
                                'text-sm font-medium',
                                isFeatured ? 'text-slate-500' : 'text-slate-300',
                              )}
                            >
                              {plan.cta}
                            </div>
                          </div>
                        </CardHeader>
                      )}
                    </Card>
                  </button>
                </CursorTooltip>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import * as React from 'react';

import { CursorTooltip } from '@/components/cursor-tooltip';
import { LazyAuroraBackground } from '@/components/landing/lazy-aurora-background';
import { pricingPlans } from '@/components/landing/pricing-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { analyticsEvents, captureEvent } from '@/lib/posthog';
import { cn } from '@/lib/utils';
import { CheckIcon, SparklesIcon } from 'lucide-react';

export function PricingCardsClient(): React.JSX.Element {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('Growth');

  return (
    <div className='grid gap-4 xl:grid-cols-3'>
      {pricingPlans.map((plan) => {
        const isSelected = selectedPlan === plan.name;
        const isFeatured = isSelected;
        const showPopularBadge = plan.featured;

        return (
          <div key={plan.name}>
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
                onClick={() => {
                  setSelectedPlan(plan.name);
                  captureEvent(analyticsEvents.ctaClicked, {
                    cta_id: `pricing_${plan.name.toLowerCase()}`,
                    cta_label: plan.cta,
                    plan: plan.name,
                    section: 'pricing',
                  });
                }}
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
                    <LazyAuroraBackground
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
                      <CardHeader className='relative z-10 flex h-full flex-col gap-6 p-5 sm:p-6'>
                        <div className='space-y-5'>
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
                          {plan.details.map((detail) => (
                            <div
                              key={detail.label}
                              className='flex items-start justify-between gap-4 border-b border-white/10 pb-3 text-sm leading-6 text-slate-100/90 last:border-b-0 last:pb-0'
                            >
                              <div className='flex items-start gap-2'>
                                <CheckIcon className='mt-1 size-4 shrink-0 text-cyan-300' />
                                <span className='text-slate-300'>{detail.label}</span>
                              </div>
                              <span className='max-w-[60%] text-right text-slate-50'>
                                {detail.value}
                              </span>
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
                    </LazyAuroraBackground>
                  ) : (
                    <CardHeader className='relative z-10 flex h-full flex-col gap-6 p-5 sm:p-6'>
                      <div className='space-y-5'>
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
                        {plan.details.map((detail) => (
                          <div
                            key={detail.label}
                            className={cn(
                              'flex items-start justify-between gap-4 border-b pb-3 text-sm leading-6 last:border-b-0 last:pb-0',
                              isFeatured ? 'border-slate-200' : 'border-white/10',
                            )}
                          >
                            <div className='flex items-start gap-2'>
                              <CheckIcon className='mt-1 size-4 shrink-0 text-cyan-300' />
                              <span
                                className={cn(isFeatured ? 'text-slate-600' : 'text-slate-300')}
                              >
                                {detail.label}
                              </span>
                            </div>
                            <span
                              className={cn(
                                'max-w-[60%] text-right',
                                isFeatured ? 'text-slate-900' : 'text-slate-50',
                              )}
                            >
                              {detail.value}
                            </span>
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
  );
}

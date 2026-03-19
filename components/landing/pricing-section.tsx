'use client';

import * as React from 'react';

import { CursorTooltip } from '@/components/cursor-tooltip';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  const glassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    backdropFilter: 'blur(11.5px)',
    WebkitBackdropFilter: 'blur(11.5px)',
  };

  return (
    <section id='pricing' className='scroll-mt-24'>
      <Card>
        <CardHeader className='gap-4'>
          <Badge className='w-fit' variant='outline'>
            Pricing
          </Badge>
          <div className='max-w-3xl space-y-3'>
            <CardTitle className='text-3xl sm:text-4xl'>
              Pricing built to fit a founder sprint or a full growth operating rhythm.
            </CardTitle>
            <CardDescription className='text-base'>
              The section stays readable inside the sidebar layout with compact cards on smaller
              widths and a more balanced three-plan comparison once space opens up.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='flex flex-col gap-4 xl:flex-row'>
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
                    className='relative block h-full w-full cursor-pointer overflow-visible text-left outline-hidden'
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <Card
                      className={cn(
                        'flex h-full flex-col motion-safe:transition-[transform,box-shadow,border-color,background-image,background-color] motion-safe:duration-300 motion-safe:ease-out',
                        isFeatured
                          ? 'relative border-indigo-500 bg-[linear-gradient(180deg,rgba(99,102,241,0.12),rgba(255,255,255,0.98))] shadow-xl ring-2 ring-indigo-500/20 motion-safe:-translate-y-1'
                          : 'border-border/60 bg-background/80 shadow-none motion-safe:translate-y-0',
                      )}
                    >
                      <CardHeader className='flex h-full flex-col gap-5'>
                        <div className='space-y-4'>
                          <div className='flex items-start justify-between gap-3'>
                            <div className='space-y-1'>
                              <CardTitle className='text-xl'>{plan.name}</CardTitle>
                              <CardDescription className='text-sm leading-6'>
                                {plan.description}
                              </CardDescription>
                            </div>
                            {showPopularBadge ? (
                              <Badge
                                className='gap-1 rounded-[16px] px-2.5 py-1 text-[11px] text-slate-900 shadow-md motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-200'
                                style={glassStyle}
                              >
                                <SparklesIcon className='size-3.5' />
                                Popular
                              </Badge>
                            ) : null}
                          </div>

                          <div className='flex items-end gap-1'>
                            <span className='text-4xl font-semibold tracking-tight'>
                              {plan.price}
                            </span>
                            <span className='pb-1 text-sm text-muted-foreground'>
                              {plan.cadence}
                            </span>
                          </div>
                        </div>

                        <div className='space-y-3'>
                          {plan.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className='flex items-start gap-2 text-sm leading-6 text-foreground/85'
                            >
                              <CheckIcon className='mt-1 size-4 shrink-0 text-emerald-600' />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className='mt-auto pt-3'>
                          {isSelected ? (
                            <div className='inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md'>
                              Current selection
                            </div>
                          ) : (
                            <div className='text-sm font-medium text-muted-foreground'>
                              {plan.cta}
                            </div>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  </button>
                </CursorTooltip>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
}

'use client';

import dynamic from 'next/dynamic';

import { useDeferredActivation } from '@/hooks/use-deferred-activation';

const PricingCardsClient = dynamic(
  () =>
    import('@/components/landing/pricing-cards-client').then((module) => module.PricingCardsClient),
  {
    ssr: false,
    loading: () => <PricingCardsPlaceholder />,
  },
);

function PricingCardsPlaceholder(): React.JSX.Element {
  return (
    <div className='grid gap-4 xl:grid-cols-3' aria-hidden='true'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className='rounded-3xl border border-white/12 bg-white/6 p-5 shadow-none backdrop-blur-sm sm:p-6'
        >
          <div className='space-y-5'>
            <div className='flex items-start justify-between gap-3'>
              <div className='space-y-2'>
                <div className='h-6 w-28 rounded-full bg-white/18' />
                <div className='h-4 w-48 max-w-full rounded-full bg-white/12' />
                <div className='h-4 w-40 max-w-full rounded-full bg-white/10' />
              </div>
              <div className='h-7 w-20 rounded-full bg-white/14' />
            </div>

            <div className='h-10 w-32 rounded-full bg-white/14' />

            <div className='space-y-3'>
              {Array.from({ length: 5 }).map((_, detailIndex) => (
                <div
                  key={detailIndex}
                  className='flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0'
                >
                  <div className='h-4 w-28 rounded-full bg-white/12' />
                  <div className='h-4 w-20 rounded-full bg-white/10' />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PricingCardsLoader(): React.JSX.Element {
  const { ref, isActive } = useDeferredActivation({
    rootMargin: '280px 0px',
    idleTimeoutMs: 650,
  });

  return (
    <div ref={ref} className='px-1 sm:px-0'>
      {isActive ? <PricingCardsClient /> : <PricingCardsPlaceholder />}
    </div>
  );
}

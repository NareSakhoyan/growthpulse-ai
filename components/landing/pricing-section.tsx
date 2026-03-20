import { PricingCardsClient } from '@/components/landing/pricing-cards-client';

export function PricingSection(): React.JSX.Element {
  return (
    <section
      id='pricing'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_14%_20%,rgba(99,102,241,0.30),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(56,189,248,0.22),transparent_20%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.98))] py-12 text-white sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8'>
        <div className='space-y-4'>
          <div className='max-w-3xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Pricing built to fit a founder sprint or a full growth operating rhythm.
            </h2>
            <p className='text-base leading-7 text-slate-300'>
              Choose the level of audit coverage, reporting cadence, and team support that matches
              your current stage.
            </p>
          </div>
        </div>
        <PricingCardsClient />
      </div>
    </section>
  );
}

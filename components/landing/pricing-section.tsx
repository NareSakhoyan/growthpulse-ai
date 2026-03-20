import { PricingCardsLoader } from '@/components/landing/pricing-cards-loader';

export function PricingSection(): React.JSX.Element {
  return (
    <section
      id='pricing'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_14%_20%,rgba(99,102,241,0.30),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(56,189,248,0.22),transparent_20%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.98))] py-12 text-white sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8'>
        <div className='space-y-4'>
          <div className='max-w-3xl space-y-3 px-2 sm:px-0'>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Pick the level of scrutiny your funnel actually needs.
            </h2>
            <p className='text-base leading-7 text-slate-300'>
              From a fast diagnostic to a full operating rhythm, choose how deep you want to go.
            </p>
          </div>
        </div>
        <PricingCardsLoader />
      </div>
    </section>
  );
}

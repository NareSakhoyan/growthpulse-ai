import dynamic from 'next/dynamic';

import { OverviewHeroContent } from '@/components/landing/overview-hero-content';

const LazyOverviewDashboardPreview = dynamic(
  () =>
    import('@/components/landing/overview-dashboard-preview').then(
      (module) => module.OverviewDashboardPreview,
    ),
  {
    loading: () => (
      <div className='rounded-3xl border border-border/70 bg-slate-950 p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.4)]'>
        <div className='grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
          <div className='space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5'>
            <div className='h-4 w-40 rounded-full bg-white/15' />
            <div className='h-10 rounded-2xl bg-white/10' />
            <div className='h-10 rounded-2xl bg-white/10' />
            <div className='h-10 rounded-2xl bg-white/10' />
          </div>
          <div className='space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5'>
            <div className='h-4 w-28 rounded-full bg-white/15' />
            <div className='h-16 rounded-2xl bg-white/10' />
            <div className='h-16 rounded-2xl bg-white/10' />
            <div className='h-16 rounded-2xl bg-white/10' />
          </div>
        </div>
      </div>
    ),
  },
);

export function OverviewSection(): React.JSX.Element {
  return (
    <section
      id='overview'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_14%_18%,rgba(125,211,252,0.22),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(167,139,250,0.22),transparent_20%),linear-gradient(135deg,rgba(244,249,255,0.98),rgba(238,244,255,0.96)_46%,rgba(255,255,255,1))] py-12 sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:space-y-14 lg:px-8'>
        <OverviewHeroContent />
        <div className='mx-auto max-w-5xl xl:max-w-6xl'>
          <LazyOverviewDashboardPreview />
        </div>
      </div>
    </section>
  );
}

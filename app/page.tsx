import type { Metadata } from 'next';

import { AppSidebar } from '@/components/app-sidebar';
import { FeaturesSection } from '@/components/landing/features-section';
import { GetAuditSection } from '@/components/landing/get-audit-section';
import { OverviewSection } from '@/components/landing/overview-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { SocialProofSection } from '@/components/landing/social-proof-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'AI Marketing Audit for SaaS Teams',
  description:
    'GrowthPulse AI audits your funnel, messaging, and conversion points, then turns the findings into prioritized next actions your team can ship quickly.',
  openGraph: {
    title: 'AI Marketing Audit for SaaS Teams | GrowthPulse AI',
    description:
      'Audit your funnel, messaging, and conversion flow with clear recommendations your team can act on quickly.',
    url: 'https://growthpulse-ai.vercel.app/',
  },
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      <div className='mx-auto flex w-full max-w-[1600px] flex-1 gap-8 px-4 sm:px-6 lg:px-8'>
        <AppSidebar />
        <main id='main-content' className='min-w-0 flex-1'>
          <OverviewSection />
          <FeaturesSection />
          <PricingSection />
          <SocialProofSection />
          <GetAuditSection />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

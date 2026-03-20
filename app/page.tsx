import type { Metadata } from 'next';

import { AppSidebar } from '@/components/app-sidebar';
import { FeaturesSection } from '@/components/landing/features-section';
import { GetAuditSection } from '@/components/landing/get-audit-section';
import { OverviewSection } from '@/components/landing/overview-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { SocialProofSection } from '@/components/landing/social-proof-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

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

export default function Home() {
  return (
    <SidebarProvider className='flex min-h-svh flex-col'>
      <SiteHeader />
      <div className='flex flex-1'>
        <AppSidebar />
        <SidebarInset>
          <main id='main-content' className='flex flex-1 flex-col'>
            <OverviewSection />
            <FeaturesSection />
            <PricingSection />
            <SocialProofSection />
            <GetAuditSection />
            <SiteFooter />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

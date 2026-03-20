import { AppSidebar } from '@/components/app-sidebar';
import { FeaturesSection } from '@/components/landing/features-section';
import { GetAuditSection } from '@/components/landing/get-audit-section';
import { OverviewSection } from '@/components/landing/overview-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { SocialProofSection } from '@/components/landing/social-proof-section';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider className='flex min-h-svh flex-col'>
      <SiteHeader />
      <div className='flex flex-1'>
        <AppSidebar />
        <SidebarInset>
          <div className='flex flex-1 flex-col'>
            <div className='flex w-full flex-col'>
              <OverviewSection />
              <FeaturesSection />
              <PricingSection />
              <SocialProofSection />
              <GetAuditSection />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

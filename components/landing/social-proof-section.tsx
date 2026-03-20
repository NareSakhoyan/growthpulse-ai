'use client';

import { SocialProofLogos } from '@/components/landing/social-proof/social-proof-logos';
import { SocialProofStats } from '@/components/landing/social-proof/social-proof-stats';
import { SocialProofTestimonials } from '@/components/landing/social-proof/social-proof-testimonials';
import { useSocialProofHighlight } from '@/components/landing/social-proof/use-social-proof-highlight';

export function SocialProofSection(): React.JSX.Element {
  const activeCardId = useSocialProofHighlight();

  return (
    <section
      id='social-proof'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_12%_20%,rgba(251,191,36,0.16),transparent_18%),radial-gradient(circle_at_84%_18%,rgba(244,114,182,0.14),transparent_18%),linear-gradient(180deg,rgba(255,253,247,0.98),rgba(255,255,255,1))] py-8 sm:py-10'
    >
      <div className='space-y-8 px-4 sm:px-6'>
        <div className='space-y-4'>
          <div className='max-w-3xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Clear proof that the audit turns into action, not another unused report.
            </h2>
            <p className='text-base leading-7 text-muted-foreground'>
              Built to show traction quickly: measurable outcomes, recognizable buyer categories,
              and feedback from teams using the recommendations in live funnels.
            </p>
          </div>
        </div>

        <SocialProofStats activeCardId={activeCardId} />

        <div className='grid gap-4 xl:grid-cols-[0.9fr_minmax(0,1.1fr)]'>
          <SocialProofLogos activeCardId={activeCardId} />

          <SocialProofTestimonials activeCardId={activeCardId} />
        </div>
      </div>
    </section>
  );
}

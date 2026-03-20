'use client';

import { SocialProofLogos } from '@/components/landing/social-proof/social-proof-logos';
import { SocialProofStats } from '@/components/landing/social-proof/social-proof-stats';
import { SocialProofTestimonials } from '@/components/landing/social-proof/social-proof-testimonials';
import { useSocialProofHighlight } from '@/components/landing/social-proof/use-social-proof-highlight';

export function SocialProofAnimatedContent(): React.JSX.Element {
  const activeCardId = useSocialProofHighlight();

  return (
    <>
      <SocialProofStats activeCardId={activeCardId} />

      <div className='grid gap-4 xl:grid-cols-[0.9fr_minmax(0,1.1fr)] xl:gap-5'>
        <SocialProofLogos activeCardId={activeCardId} />
        <SocialProofTestimonials activeCardId={activeCardId} />
      </div>
    </>
  );
}

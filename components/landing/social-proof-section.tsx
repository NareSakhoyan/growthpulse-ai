import { SocialProofLogos } from '@/components/landing/social-proof/social-proof-logos';
import { SocialProofStats } from '@/components/landing/social-proof/social-proof-stats';
import { SocialProofTestimonials } from '@/components/landing/social-proof/social-proof-testimonials';

export function SocialProofSection(): React.JSX.Element {
  return (
    <section
      id='social-proof'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_12%_20%,rgba(251,191,36,0.16),transparent_18%),radial-gradient(circle_at_84%_18%,rgba(244,114,182,0.14),transparent_18%),linear-gradient(180deg,rgba(255,253,247,0.98),rgba(255,255,255,1))] py-12 sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8'>
        <div className='space-y-4'>
          <div className='max-w-3xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Not vanity proof. Real teams, real signals, real upside.
            </h2>
            <p className='text-base leading-7 text-muted-foreground'>
              The audit helps teams spot conversion drag early and act before it gets expensive.
            </p>
          </div>
        </div>

        <SocialProofStats activeCardId={null} />

        <div className='grid gap-4 xl:grid-cols-[0.9fr_minmax(0,1.1fr)] xl:gap-5'>
          <SocialProofLogos activeCardId={null} />

          <SocialProofTestimonials activeCardId={null} />
        </div>
      </div>
    </section>
  );
}

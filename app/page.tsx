import { Container } from '@/components/container';
import { SectionShell } from '@/components/section-shell';

export default function Home() {
  return (
    <main className='bg-background text-foreground'>
      <section className='border-b border-border/70 py-20 sm:py-24 lg:py-28'>
        <Container className='space-y-8'>
          <div className='max-w-3xl space-y-4'>
            <p className='text-sm font-medium tracking-[0.18em] text-muted-foreground uppercase'>
              Hero section
            </p>
            <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>
              Placeholder structure for the landing page hero.
            </h1>
            <p className='max-w-2xl text-lg leading-8 text-muted-foreground'>
              This page now only defines the schema of the marketing site: hero, features, social
              proof, pricing, and final CTA with the lead form.
            </p>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <div className='rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background'>
              Primary CTA placeholder
            </div>
            <div className='rounded-full border border-border px-5 py-3 text-sm font-medium'>
              Secondary CTA placeholder
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <SectionShell
          description='Placeholder for the five core product features and supporting benefit copy.'
          id='features'
          title='Features'
        >
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {Array.from({ length: 5 }).map((_, index) => (
              <article
                key={index}
                className='rounded-3xl border border-border/70 bg-card p-6 text-sm text-muted-foreground'
              >
                Feature card placeholder
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          className='border-t border-border/70'
          description='Placeholder for testimonial, logo row, and proof metrics.'
          id='social-proof'
          title='Social Proof'
        >
          <div className='grid gap-4 sm:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className='rounded-3xl border border-border/70 bg-card p-6 text-sm text-muted-foreground'
              >
                Social proof placeholder
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          className='border-t border-border/70'
          description='Placeholder for the three pricing tiers and comparison details.'
          id='pricing'
          title='Pricing'
        >
          <div className='grid gap-4 lg:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={index}
                className='rounded-3xl border border-border/70 bg-card p-6 text-sm text-muted-foreground'
              >
                Pricing tier placeholder
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          className='border-t border-border/70'
          description='Placeholder for the final CTA, lead form, and submission state.'
          id='final-cta'
          title='Final CTA'
        >
          <div className='rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground'>
                Name field placeholder
              </div>
              <div className='rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground'>
                Email field placeholder
              </div>
            </div>
            <div className='mt-4 rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground'>
              Qualifying field and UTM capture placeholder
            </div>
            <div className='mt-4 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background'>
              Submit CTA placeholder
            </div>
          </div>
        </SectionShell>
      </Container>
    </main>
  );
}

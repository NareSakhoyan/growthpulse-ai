import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { QuoteIcon } from 'lucide-react';

import { testimonials } from './social-proof-data';

type SocialProofTestimonialsProps = {
  activeCardId: string | null;
};

export function SocialProofTestimonials({
  activeCardId,
}: SocialProofTestimonialsProps): React.JSX.Element {
  return (
    <div className='grid gap-4'>
      {testimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          className={cn(
            'relative isolate overflow-hidden border-white/65 bg-white/45 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.2),0_8px_18px_-16px_rgba(15,23,42,0.1)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transform-gpu will-change-transform',
            activeCardId === testimonial.id && testimonial.activeClass,
          )}
        >
          <div
            className={cn(
              'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out',
              activeCardId === testimonial.id && testimonial.overlayClass,
            )}
          />
          <CardHeader className='space-y-5 p-5 sm:p-6'>
            <QuoteIcon className='pointer-events-none absolute -right-4 top-3 z-0 size-24 text-slate-950/[0.06] sm:size-28' />
            <div className='space-y-2'>
              <div className='space-y-2'>
                <p className='max-w-[24rem] text-xl font-semibold tracking-tight text-balance text-foreground sm:text-2xl'>
                  “{testimonial.headline}”
                </p>
                <p className='max-w-[30rem] text-sm leading-7 text-foreground/75'>
                  {testimonial.detail}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-3 border-t border-white/45 pt-4 sm:flex-row sm:items-end sm:justify-between'>
              <div className='space-y-1'>
                <CardTitle className='text-base'>{testimonial.name}</CardTitle>
                <CardDescription className='text-sm'>{testimonial.company}</CardDescription>
              </div>
              <p className='text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase'>
                {testimonial.proofLabel}
              </p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

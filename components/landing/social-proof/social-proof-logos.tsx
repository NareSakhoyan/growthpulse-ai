import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { logos } from './social-proof-data';

type SocialProofLogosProps = {
  activeCardId: string | null;
};

export function SocialProofLogos({ activeCardId }: SocialProofLogosProps): React.JSX.Element {
  return (
    <Card
      className={cn(
        'relative isolate overflow-hidden border-white/60 bg-white/45 shadow-[0_20px_42px_-30px_rgba(15,23,42,0.22),0_10px_20px_-18px_rgba(99,102,241,0.14)] backdrop-blur-md transition-[border-color,box-shadow] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        activeCardId === 'logos' &&
          'border-indigo-200/80 shadow-[0_20px_50px_-30px_rgba(99,102,241,0.34)]',
      )}
    >
      <CardHeader className='relative z-10 space-y-3'>
        <CardTitle className='text-lg'>Trusted across modern software teams</CardTitle>
        <CardDescription className='text-sm leading-6'>
          Common customer profiles include product-led SaaS, fintech growth teams, AI products, and
          developer-focused platforms.
        </CardDescription>
      </CardHeader>
      <CardContent className='relative z-10 grid gap-3 sm:grid-cols-2'>
        {logos.map((logo) => (
          <div
            key={logo.label}
            className={cn(
              'flex min-h-24 items-center gap-3 rounded-xl border px-4 py-4 transition-transform duration-500 ease-out',
              logo.className,
              activeCardId === 'logos' && 'scale-[1.01]',
            )}
          >
            <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/60 shadow-sm'>
              <logo.icon className='size-5' />
            </div>
            <div className='space-y-1'>
              <p className='text-sm font-semibold tracking-[0.12em] uppercase'>{logo.label}</p>
              <p className='text-xs font-medium normal-case opacity-80'>{logo.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

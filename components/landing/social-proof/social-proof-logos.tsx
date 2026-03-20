import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { logos } from './social-proof-data';

type SocialProofLogosProps = {
  activeCardId: string | null;
};

export function SocialProofLogos({ activeCardId }: SocialProofLogosProps): React.JSX.Element {
  const isAnyLogoActive = logos.some((logo) => logo.id === activeCardId);

  return (
    <Card
      className={cn(
        'relative isolate overflow-hidden border-white/60 bg-white/45 text-slate-950 shadow-[0_20px_42px_-30px_rgba(15,23,42,0.22),0_10px_20px_-18px_rgba(99,102,241,0.14)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transform-gpu will-change-transform',
        isAnyLogoActive &&
          '-translate-y-1.5 scale-[1.01] border-indigo-300/85 bg-indigo-50/70 shadow-[0_28px_70px_-34px_rgba(99,102,241,0.42)] ring-1 ring-indigo-200/70',
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-out',
          isAnyLogoActive &&
            'bg-[radial-gradient(circle_at_14%_12%,rgba(165,180,252,0.24),transparent_42%),linear-gradient(135deg,rgba(238,242,255,0.74),rgba(255,255,255,0))] opacity-100',
        )}
      />
      <CardHeader className='relative z-10 space-y-3 p-5 sm:p-6'>
        <CardTitle className='text-lg text-slate-950'>
          Teams using the audit across modern growth stacks
        </CardTitle>
        <CardDescription className='text-sm leading-6 text-slate-700'>
          Examples include SaaS, fintech, and AI teams using the audit to tighten acquisition and
          conversion performance.
        </CardDescription>
      </CardHeader>
      <CardContent className='relative z-10 grid gap-3 p-5 pt-0 sm:p-6 sm:pt-0 md:grid-cols-2'>
        {logos.map((logo, index) => (
          <div
            key={logo.label}
            className={cn(
              'flex min-h-24 items-center gap-3 rounded-xl border px-4 py-4 transition-transform duration-500 ease-out transform-gpu',
              logo.className,
              activeCardId === logo.id && logo.activeClass,
            )}
            style={{
              transitionDelay: activeCardId === logo.id ? `${index * 40}ms` : '0ms',
            }}
          >
            <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/60 shadow-sm'>
              <logo.icon className='size-5' />
            </div>
            <div className='relative z-10 space-y-1'>
              <p className='text-sm font-semibold tracking-[0.12em] text-slate-950 uppercase'>
                {logo.label}
              </p>
              <p className='text-xs font-medium normal-case text-slate-700'>{logo.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

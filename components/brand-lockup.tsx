import { cn } from '@/lib/utils';

type BrandLockupProps = {
  className?: string;
  markClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  subtitle?: string;
};

export function BrandLockup({
  className,
  markClassName,
  titleClassName,
  subtitleClassName,
  subtitle = 'Audit-first SaaS landing page',
}: BrandLockupProps): React.JSX.Element {
  return (
    <div className={cn('flex min-w-0 items-center gap-3', className)}>
      <div
        className={cn('relative flex size-10 shrink-0 items-center justify-center', markClassName)}
      >
        <div className='absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle,rgba(56,189,248,0.3),transparent_48%),radial-gradient(circle_at_80%_22%,rgba(129,140,248,0.34),transparent_36%)] blur-2xl' />
        <div className='absolute inset-[-2px] rounded-[22px] bg-[conic-gradient(from_210deg_at_50%_50%,rgba(6,182,212,0.2),rgba(99,102,241,0.88),rgba(14,165,233,0.78),rgba(6,182,212,0.2))] opacity-90 blur-[2px]' />
        <div className='absolute inset-0 rounded-2xl border border-white/30 bg-[radial-gradient(circle_at_22%_20%,rgba(186,230,253,0.95),transparent_26%),radial-gradient(circle_at_78%_24%,rgba(165,180,252,0.72),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(34,211,238,0.36),transparent_32%),linear-gradient(145deg,rgba(8,47,73,0.94),rgba(29,78,216,0.86)_48%,rgba(79,70,229,0.92))] shadow-[0_18px_38px_-18px_rgba(37,99,235,0.95)]' />
        <div className='absolute inset-[1px] rounded-[15px] bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.04))] backdrop-blur-xl' />
        <div className='absolute inset-[6px] rounded-[11px] border border-white/12 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.2),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]' />
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='relative z-10 size-5 drop-shadow-[0_2px_12px_rgba(255,255,255,0.45)]'
          fill='none'
        >
          <path
            d='M4 14.5h3.4l2.2-4.4 3.2 7 2.4-4.2H20'
            stroke='rgba(255,255,255,0.95)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='7.4' cy='14.5' r='1' fill='rgba(207,250,254,1)' />
          <circle cx='12.8' cy='17.1' r='1' fill='rgba(191,219,254,1)' />
          <circle cx='17.2' cy='12.9' r='1' fill='rgba(224,231,255,1)' />
        </svg>
      </div>

      <div className='min-w-0'>
        <p
          className={cn(
            'truncate text-sm font-semibold tracking-tight text-slate-950',
            titleClassName,
          )}
        >
          <span>Growth</span>
          <span className='bg-[linear-gradient(135deg,#0ea5e9,#4f46e5)] bg-clip-text text-transparent'>
            Pulse
          </span>
          <span className='text-slate-950'> AI</span>
        </p>
        <p className={cn('truncate text-xs text-muted-foreground', subtitleClassName)}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

import { BrandMarkTile } from '@/components/brand-mark-tile';
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
        <BrandMarkTile className='absolute inset-0 size-full drop-shadow-[0_18px_38px_rgba(37,99,235,0.35)]' />
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

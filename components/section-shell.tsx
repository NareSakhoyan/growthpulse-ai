import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionShellProps = {
  id?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Provides a consistent section wrapper for page-level marketing blocks while
 * the final content and visuals are still being built.
 *
 * @param props - The section shell props.
 * @param props.id - Optional section anchor id.
 * @param props.title - Section heading placeholder.
 * @param props.description - Section description placeholder.
 * @param props.children - Optional section body content.
 * @param props.className - Optional section-specific layout classes.
 * @returns `SectionShell` returns a consistently spaced section scaffold with a
 * heading block and optional body content.
 */
export function SectionShell({
  id,
  title,
  description,
  children,
  className,
}: SectionShellProps): React.JSX.Element {
  return (
    <section className={cn('py-16 sm:py-20 lg:py-24', className)} id={id}>
      <div className='max-w-2xl space-y-4'>
        <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
        <p className='text-base leading-8 text-muted-foreground'>{description}</p>
      </div>
      {children ? <div className='mt-10'>{children}</div> : null}
    </section>
  );
}

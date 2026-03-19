import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Centers page content and applies the shared horizontal gutters used across
 * the landing page sections.
 *
 * @param props - The container props.
 * @param props.children - The section content to render inside the container.
 * @param props.className - Optional extra layout classes.
 * @returns `Container` returns a centered content wrapper with the shared max
 * width and horizontal padding.
 */
export function Container({ children, className }: ContainerProps): React.JSX.Element {
  return (
    <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

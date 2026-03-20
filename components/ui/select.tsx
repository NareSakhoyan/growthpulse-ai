import * as React from 'react';

import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';

function Select({
  className,
  children,
  ...props
}: React.ComponentProps<'select'>): React.JSX.Element {
  return (
    <div className='relative'>
      <select
        data-slot='select'
        className={cn(
          'h-10 w-full appearance-none rounded-lg border border-input bg-transparent px-3 py-2 pr-9 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className='pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground' />
    </div>
  );
}

export { Select };

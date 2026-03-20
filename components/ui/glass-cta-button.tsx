import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GlassCtaButtonProps = React.ComponentProps<typeof Button> & {
  tone?: 'primary' | 'soft';
};

export function GlassCtaButton({
  className,
  tone = 'primary',
  ...props
}: GlassCtaButtonProps): React.JSX.Element {
  return (
    <Button
      variant='outline'
      className={cn(
        'glass-cta border-white/40 text-slate-950 shadow-lg hover:-translate-y-0 hover:shadow-xl',
        tone === 'primary' ? 'glass-cta-primary' : 'glass-cta-soft',
        className,
      )}
      {...props}
    />
  );
}

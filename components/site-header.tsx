'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
import { PanelLeftIcon } from 'lucide-react';

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className='sticky top-0 z-50 flex w-full items-center border-b border-border/60 bg-background/95 backdrop-blur'>
      <div className='flex h-14 w-full items-center gap-2 px-4 sm:px-6'>
        <Button className='h-8 w-8' variant='ghost' size='icon' onClick={toggleSidebar}>
          <PanelLeftIcon />
          <span className='sr-only'>Toggle sidebar</span>
        </Button>
        <Separator
          orientation='vertical'
          className='mr-2 data-vertical:h-4 data-vertical:self-auto'
        />
        <div className='hidden md:block'>
          <p className='text-sm font-semibold tracking-tight'>GrowthPulse AI</p>
          <p className='text-xs text-muted-foreground'>Audit-first SaaS landing page</p>
        </div>
      </div>
    </header>
  );
}

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function SiteFooter(): React.JSX.Element {
  return (
    <footer className='bg-background/95'>
      <Separator />
      <div className='flex flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6'>
        <nav aria-label='Footer' className='flex flex-wrap items-center gap-1'>
          <Button asChild variant='ghost' size='sm' className='text-muted-foreground'>
            <a href='#features'>Features</a>
          </Button>
          <Button asChild variant='ghost' size='sm' className='text-muted-foreground'>
            <a href='#pricing'>Pricing</a>
          </Button>
        </nav>
        <p className='text-sm text-muted-foreground'>© 2026 GrowthPulse AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

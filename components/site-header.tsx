import { BrandLockup } from '@/components/brand-lockup';
import { Button } from '@/components/ui/button';
import { BadgeDollarSignIcon, RocketIcon, SparklesIcon } from 'lucide-react';

const navigationItems = [
  { href: '#features', label: 'Features', icon: SparklesIcon },
  { href: '#pricing', label: 'Pricing', icon: BadgeDollarSignIcon },
] as const;

export function SiteHeader(): React.JSX.Element {
  return (
    <header className='sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl'>
      <div className='flex h-14 w-full items-center justify-between gap-4 px-4 lg:px-8'>
        <a href='#overview' className='min-w-0'>
          <BrandLockup
            className='gap-2.5'
            markClassName='size-9'
            subtitleClassName='hidden sm:block'
          />
        </a>

        <nav aria-label='Primary' className='hidden items-center gap-1 md:flex'>
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <Button key={href} asChild variant='ghost' size='sm' className='text-muted-foreground'>
              <a href={href}>
                <Icon className='size-4' />
                {label}
              </a>
            </Button>
          ))}
        </nav>

        <Button asChild size='sm' className='shrink-0'>
          <a href='#get-audit'>
            <RocketIcon className='size-4' />
            Get audit
          </a>
        </Button>
      </div>
    </header>
  );
}

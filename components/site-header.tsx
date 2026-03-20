import { Button } from '@/components/ui/button';
import { BadgeDollarSignIcon, RocketIcon, SparklesIcon } from 'lucide-react';

const navigationItems = [
  { href: '#features', label: 'Features', icon: SparklesIcon },
  { href: '#pricing', label: 'Pricing', icon: BadgeDollarSignIcon },
] as const;

export function SiteHeader(): React.JSX.Element {
  return (
    <header className='sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl'>
      <div className='mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <a href='#overview' className='min-w-0'>
          <p className='text-sm font-semibold tracking-tight'>GrowthPulse AI</p>
          <p className='hidden text-xs text-muted-foreground sm:block'>
            Audit-first SaaS landing page
          </p>
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

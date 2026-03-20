import {
  BadgeDollarSignIcon,
  BarChart3Icon,
  RocketIcon,
  SparklesIcon,
  TerminalIcon,
  TerminalSquareIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const data = {
  user: {
    name: 'GrowthPulse Team',
    email: 'hello@growthpulse.ai',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Overview',
      url: '#overview',
      icon: <TerminalSquareIcon />,
      isActive: true,
    },
    {
      title: 'Features',
      url: '#features',
      icon: <SparklesIcon />,
    },
    {
      title: 'Pricing',
      url: '#pricing',
      icon: <BadgeDollarSignIcon />,
    },
    {
      title: 'Social Proof',
      url: '#social-proof',
      icon: <BarChart3Icon />,
    },
    {
      title: 'Get Audit',
      url: '#get-audit',
      icon: <RocketIcon />,
    },
  ],
} as const;

/**
 * Renders a static sidebar for large screens using anchor links to the landing
 * page sections.
 *
 * @returns `AppSidebar` returns a sticky section navigation with team details.
 */
export function AppSidebar(): React.JSX.Element {
  return (
    <aside className='sticky top-20 hidden w-64 shrink-0 self-start lg:block'>
      <div className='overflow-hidden rounded-[28px] border border-border/70 bg-background/80 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)] backdrop-blur-sm'>
        <div className='border-b border-border/60 p-4'>
          <a href='#overview' className='flex items-center gap-3'>
            <div className='flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white'>
              <TerminalIcon className='size-4' />
            </div>
            <div className='min-w-0'>
              <p className='truncate text-sm font-semibold tracking-tight'>GrowthPulse AI</p>
              <p className='truncate text-xs text-muted-foreground'>Audit-first landing page</p>
            </div>
          </a>
        </div>

        <div className='space-y-3 p-4'>
          <p className='px-2 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase'>
            Platform
          </p>
          <nav aria-label='Section navigation' className='grid gap-1'>
            {data.navMain.map((item) => (
              <Button
                key={item.title}
                asChild
                variant='ghost'
                className='justify-start gap-3 rounded-2xl px-3 py-5 text-sm text-muted-foreground hover:text-foreground'
              >
                <a
                  href={item.url}
                  aria-current={'isActive' in item && item.isActive ? 'page' : undefined}
                >
                  {item.icon}
                  {item.title}
                </a>
              </Button>
            ))}
          </nav>
        </div>

        <div className='border-t border-border/60 p-4'>
          <div className='rounded-2xl bg-muted/60 p-3'>
            <p className='text-sm font-medium'>{data.user.name}</p>
            <a
              href={`mailto:${data.user.email}`}
              className='text-xs text-muted-foreground transition-colors hover:text-foreground'
            >
              {data.user.email}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

'use client';

import {
  BadgeDollarSignIcon,
  BarChart3Icon,
  RocketIcon,
  SparklesIcon,
  TerminalIcon,
  TerminalSquareIcon,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

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
 * Renders the actual sidebar-16 block structure adapted to the landing page's
 * anchor-driven content.
 *
 * @returns `AppSidebar` returns the left-hand navigation with anchor links that
 * map to the vertically scrolling landing page sections.
 */
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>): React.JSX.Element {
  return (
    <Sidebar className='top-14 h-[calc(100svh-3.5rem)]!' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='#overview'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <TerminalIcon className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>GrowthPulse AI</span>
                  <span className='truncate text-xs'>Audit-first landing page</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

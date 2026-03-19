'use client';

import {
  BadgeDollarSignIcon,
  BarChart3Icon,
  LayoutDashboardIcon,
  RocketIcon,
  SparklesIcon,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

const navigation = [
  {
    title: 'Overview',
    href: '#overview',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Features',
    href: '#features',
    icon: SparklesIcon,
  },
  {
    title: 'Pricing',
    href: '#pricing',
    icon: BadgeDollarSignIcon,
  },
  {
    title: 'Social Proof',
    href: '#social-proof',
    icon: BarChart3Icon,
  },
  {
    title: 'Get Audit',
    href: '#get-audit',
    icon: RocketIcon,
  },
] as const;

/**
 * Renders the sidebar-07 style application sidebar for the single-page SaaS
 * marketing layout.
 *
 * @returns `AppSidebar` returns the left-hand navigation with anchor links that
 * map to the vertically scrolling landing page sections.
 */
export function AppSidebar(): React.JSX.Element {
  return (
    <Sidebar collapsible='icon' variant='inset'>
      <SidebarHeader>
        <div className='rounded-2xl border border-sidebar-border bg-[linear-gradient(135deg,rgba(99,102,241,0.16),rgba(59,130,246,0.08))] p-3 group-data-[collapsible=icon]:border-transparent group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0'>
          <div className='flex items-center gap-3 group-data-[collapsible=icon]:justify-center'>
            <div className='flex size-10 min-h-10 min-w-10 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground shadow-sm group-data-[collapsible=icon]:mx-auto'>
              <RocketIcon className='size-4 min-h-4 min-w-4 shrink-0' />
            </div>
            <div className='min-w-0 group-data-[collapsible=icon]:hidden'>
              <p className='truncate text-sm font-semibold'>GrowthPulse AI</p>
              <p className='truncate text-xs text-sidebar-foreground/70'>
                Audit-first SaaS landing page
              </p>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.href}>
                        <Icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className='rounded-2xl border border-sidebar-border bg-sidebar-accent/50 p-3 text-sm text-sidebar-foreground/75 group-data-[collapsible=icon]:hidden'>
          Sections stay in one page. The sidebar just handles navigation and layout state.
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

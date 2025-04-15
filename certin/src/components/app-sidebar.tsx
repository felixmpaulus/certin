'use client'

import * as React from 'react'
import {
  Activity,
  Clock,
  Files,
  FileText,
  HandHelping,
  Handshake,
  Home,
  PieChart,
  Route,
  Sprout,
  Target,
  Truck,
  Unplug,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: Home,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: Activity,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Target,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: 'Running',
      url: '#',
      icon: Handshake,
      category: 'TENDERS',
      items: [],
    },
    {
      title: 'Opportunities',
      url: '#',
      icon: HandHelping,
      category: 'TENDERS',
      items: [],
    },
    {
      title: 'Past',
      url: '#',
      icon: Clock,
      category: 'TENDERS',
      items: [],
    },
    {
      title: 'Cashflow',
      url: '#',
      icon: PieChart,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Fleet',
      url: '#',
      icon: Truck,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Routes',
      url: '#',
      icon: Route,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Compliance',
      url: '#',
      icon: FileText,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Sustainability',
      url: '#',
      icon: Sprout,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Library',
      url: '#',
      icon: Files,
      category: 'FILES',
      items: [],
    },
    {
      title: 'Connections',
      url: '#',
      icon: Unplug,
      category: 'FILES',
      items: [],
    },
  ],
  projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

'use client'

import * as React from 'react'
import {
  Clock,
  Files,
  FileText,
  HandHelping,
  Handshake,
  Home,
  PieChart,
  Route,
  Sprout,
  Truck,
  Unplug,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
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
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: 'Running',
      url: '/dashboard/running',
      icon: Handshake,
      category: 'TENDERS',
      items: [],
    },
    {
      title: 'Opportunities',
      url: '/dashboard/opportunities',
      icon: HandHelping,
      category: 'TENDERS',
      items: [],
    },
    {
      title: 'Past',
      url: '/dashboard/past',
      icon: Clock,
      category: 'TENDERS',
      items: [],
    },
    {
      title: 'Cashflow',
      url: '/dashboard/cashflow',
      icon: PieChart,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Fleet',
      url: '/dashboard/fleet',
      icon: Truck,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Routes',
      url: '/dashboard/routes',
      icon: Route,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Compliance',
      url: '/dashboard/compliance',
      icon: FileText,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Sustainability',
      url: '/dashboard/sustainability',
      icon: Sprout,
      category: 'REPORTS',
      items: [],
    },
    {
      title: 'Library',
      url: '/dashboard/library',
      icon: Files,
      category: 'FILES',
      items: [],
    },
    {
      title: 'Connections',
      url: '/dashboard/connections',
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
        <div className='h-10 bg-muted rounded-lg' />
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

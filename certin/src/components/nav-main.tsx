'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    category?: string
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  // Group items by category
  const categorizedItems = items.reduce((acc, item) => {
    const category = item.category || ''
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, typeof items>)

  // Get unique categories in order they appear in the items array
  const categories = items
    .map((item) => item.category)
    .filter((category, index, self) => category && self.indexOf(category) === index)

  return (
    <>
      {/* Render items with no category first */}
      {categorizedItems[''] && categorizedItems[''].length > 0 && (
        <SidebarGroup>
          <SidebarMenu>
            {categorizedItems[''].map((item) => (
              <NavMenuItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      )}

      {/* Render each category */}
      {categories.map(
        (category) =>
          category && (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>{category}</SidebarGroupLabel>
              <SidebarMenu>
                {categorizedItems[category].map((item) => (
                  <NavMenuItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroup>
          )
      )}
    </>
  )
}

// Helper component to render a menu item
function NavMenuItem({
  item,
}: {
  item: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }
}) {
  if (item.items && item.items.length > 0) {
    return (
      <Collapsible
        key={item.title}
        asChild
        defaultOpen={item.isActive}
        className='group/collapsible'
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
  }

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild tooltip={item.title}>
        <a href={item.url}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

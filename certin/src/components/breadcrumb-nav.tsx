'use client'

import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function BreadcrumbNav() {
  const pathname = usePathname()

  let currentPage = 'Dashboard'
  if (pathname !== '/dashboard') {
    // Extract the last segment of the pathname
    const segments = pathname.split('/')
    const lastSegment = segments[segments.length - 1]
    // Convert to title case
    currentPage = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className='hidden md:block'>
          <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {pathname !== '/dashboard' && (
          <>
            <BreadcrumbSeparator className='hidden md:block' />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

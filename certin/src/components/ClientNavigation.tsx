'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoutButton } from '@/components/logout-button'
import { type User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export function ClientNavigation() {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')
  const isLogin = pathname?.startsWith('/auth/login')
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()
  }, [pathname])

  if (loading) {
    return null
  }

  if (isLogin) {
    return null
  }

  if (isDashboard) {
    return <LogoutButton />
  }

  const linkTo = user ? '/dashboard' : '/auth/login'

  return (
    <Link
      href={linkTo}
      className='px-4 py-2 rounded-md bg-black text-white hover:bg-black/90 transition-colors'
    >
      {user ? 'Dashboard' : 'Login'}
    </Link>
  )
}

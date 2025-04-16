'use client'

import { LOCALE_COOKIE_NAME } from '@/constants/constants'

// Set language in client-side
export function setLanguageCookie(locale: string): void {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}` // 1 year
}

// Get current language from client-side
export function getLanguageCookie(): string {
  const cookies = document.cookie.split(';')
  const localeCookie = cookies.find((cookie) => cookie.trim().startsWith(`${LOCALE_COOKIE_NAME}=`))
  return localeCookie ? localeCookie.split('=')[1] : 'en'
}

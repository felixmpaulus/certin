import { updateSession } from '@/lib/supabase/middleware'
import { type NextRequest } from 'next/server'
import { LOCALE_COOKIE_NAME } from './constants/constants'

export async function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get(LOCALE_COOKIE_NAME)
  const acceptLanguage = request.headers.get('accept-language')
  const preferredLocale = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0] : 'en'
  const locale = localeCookie?.value || preferredLocale || 'en'
  const response = await updateSession(request)

  // Set the locale cookie if it doesn't exist or needs updating
  if (!localeCookie || localeCookie.value !== locale) {
    response.cookies.set(LOCALE_COOKIE_NAME, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Static image files (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

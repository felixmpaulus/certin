import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'

export const COOKIE_NAME = 'NEXT_LOCALE'

export const getLocale = async () => {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get(COOKIE_NAME)
  const headersStore = await headers()
  const acceptLanguage = headersStore.get('accept-language')
  const preferredLocale = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0] : 'en'
  return localeCookie?.value || preferredLocale || 'en'
}

export default getRequestConfig(async () => {
  const locale = await getLocale()

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})

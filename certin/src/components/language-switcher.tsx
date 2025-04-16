'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { setLanguageCookie } from '@/i18n/client'

type Language = 'en' | 'fr'

export function LanguageSwitcher() {
  const router = useRouter()

  const setLanguage = (lang: Language) => {
    // Set the cookie using the client utility
    setLanguageCookie(lang)

    // Reload the page to apply the language change
    router.refresh()
  }

  return (
    <div className='flex space-x-2'>
      <Button variant='outline' size='sm' onClick={() => setLanguage('en')}>
        English
      </Button>
      <Button variant='outline' size='sm' onClick={() => setLanguage('fr')}>
        Français
      </Button>
    </div>
  )
}

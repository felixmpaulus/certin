import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function RunningPage() {
  const t = useTranslations('Sustainability')
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>{t('title')}</h1>
      <p className='text-muted-foreground'>
        View and manage your running things related to sustainability.
      </p>
      <div className='mt-6'>
        <h2 className='text-lg font-medium mb-2'>Change Language</h2>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

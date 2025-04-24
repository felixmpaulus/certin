import { useTranslations } from 'next-intl'

export default function RunningPage() {
  const t = useTranslations('Sustainability')
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>{t('title')}</h1>
      <p className='text-muted-foreground'>
        View and manage your running things related to sustainability.
      </p>
    </div>
  )
}

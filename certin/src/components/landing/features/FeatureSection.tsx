import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

// Feature data type
export type FeatureItem = {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  primaryColor: string
  secondaryColor: string
  howItWorks: {
    steps: Array<string>
  }
  keyBenefits: {
    items: Array<{
      icon: LucideIcon
      text: string
    }>
  }
  demoType: 'message-manager' | 'business-dashboard' | 'invoice-creator'
}

interface FeatureSectionProps {
  feature: FeatureItem
  DemoComponent: React.ComponentType<{ id: string }>
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ feature, DemoComponent }) => {
  const {
    id,
    icon: FeatureIcon,
    title,
    subtitle,
    primaryColor,
    secondaryColor,
    howItWorks,
    keyBenefits,
  } = feature

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row gap-8 md:items-center mb-6'>
        <div
          className='w-16 h-16 inline-flex items-center justify-center p-3 rounded-2xl'
          style={{ backgroundColor: secondaryColor }}
        >
          <FeatureIcon className='h-16 w-16' style={{ color: primaryColor }} />
        </div>

        <div>
          <h3 className='text-3xl font-bold text-foreground mb-4'>{title}</h3>
          <p className='text-xl text-muted-foreground'>{subtitle}</p>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-10 items-start'>
        <div className='space-y-8'>
          <Card
            className='bg-muted'
            style={{ borderColor: id === 'business-dashboard' ? primaryColor : secondaryColor }}
          >
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {howItWorks.steps.map((step, index) => (
                <div key={`${id}-step-${index}`} className='flex gap-3 items-baseline'>
                  <div
                    className='flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center'
                    style={{ backgroundColor: secondaryColor, color: primaryColor }}
                  >
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className='hidden md:flex justify-center flex-wrap gap-2'>
            {keyBenefits.items.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <div
                  key={`${id}-benefit-${index}`}
                  className='flex items-center gap-2 px-3 py-2 rounded-full bg-muted border border-border'
                >
                  <BenefitIcon className='h-4 w-4' style={{ color: primaryColor }} />
                  <span className='text-sm font-medium'>{benefit.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className='order-2 md:order-1'>
          <DemoComponent id={id} />
        </div>
      </div>
      <div className='md:hidden flex justify-center flex-wrap gap-2'>
        {keyBenefits.items.map((benefit, index) => {
          const BenefitIcon = benefit.icon
          return (
            <div
              key={`${id}-benefit-${index}`}
              className='flex items-center gap-2 px-3 py-2 rounded-full bg-muted border border-border'
            >
              <BenefitIcon className='h-4 w-4' style={{ color: primaryColor }} />
              <span className='text-sm font-medium'>{benefit.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

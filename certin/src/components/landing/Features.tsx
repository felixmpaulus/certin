import { FeatureSection } from '@/components/landing/features/FeatureSection'
import { featuresData } from '@/data/featureData'
import { MessageManagerDemo } from '@/components/landing/features/MessageManagerDemo'
import { BusinessDashboardDemo } from '@/components/landing/features/BusinessDashboardDemo'
import { InvoiceCreatorDemo } from '@/components/landing/features/InvoiceCreatorDemo'
// Map for feature demo types to components
const demoComponentMap = {
  'message-manager': MessageManagerDemo,
  'business-dashboard': BusinessDashboardDemo,
  'invoice-creator': InvoiceCreatorDemo,
}
export function Features() {
  return (
    <section id='features' className='py-24 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Core Features</h2>
            <p className="text-foreground/80 mt-4">Everything you need to run your logistics business efficiently</p>
          </div> */}

        <div className='space-y-32'>
          {featuresData.map((feature) => (
            <FeatureSection
              key={feature.id}
              feature={feature}
              DemoComponent={demoComponentMap[feature.demoType as keyof typeof demoComponentMap]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

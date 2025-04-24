import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className='py-24 bg-gradient-to-b from-background to-muted/30'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
          Ready to Take Control of Your Logistics Business?
        </h2>
        <p className='text-xl text-foreground/85 mb-12 leading-relaxed'>
          Join hundreds of logistics businesses already saving 15+ hours every week with CERTIN.
        </p>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/90 text-lg px-8 rounded-full h-14 text-primary-foreground font-medium'
        >
          Start Your Free Trial
          <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </div>
    </section>
  )
}

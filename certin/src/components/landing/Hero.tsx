import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className='pt-40 pb-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent pb-4'>
          Stop Drowning in Admin work.
          <br />
          Let CERTIN Run Your Logistics Office.
        </h1>
        <p className='text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed'>
          CERTIN manages your messages, organizes your data, and creates your invoices — saving you
          15+ hours every week.
        </p>
        <div className='flex flex-col sm:flex-row gap-6 justify-center'>
          <Button
            size='lg'
            className='bg-primary hover:bg-primary/90 text-lg px-8 rounded-full h-14 text-primary-foreground font-medium'
          >
            Try CERTIN Free for 30 Days
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='text-lg px-8 rounded-full h-14 border-2 text-foreground/90 hover:text-foreground'
          >
            See a 3-Minute Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className='mt-16 flex flex-col items-center space-y-4'>
          <div className='flex items-center space-x-1'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className='h-5 w-5 fill-primary text-primary' />
            ))}
          </div>
          <p className='text-foreground/80'>Trusted by 100+ logistics companies worldwide</p>
        </div>
      </div>
    </section>
  )
}

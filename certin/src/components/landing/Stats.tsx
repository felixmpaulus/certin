import { Card } from '@/components/ui/card'

export function Stats() {
  return (
    <section className='py-24 bg-primary/5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <Card className='p-8 border-none bg-background/50 backdrop-blur'>
            <h3 className='text-4xl font-bold text-primary mb-2'>70%</h3>
            <p className='text-foreground/80'>Less Time on Admin Tasks</p>
          </Card>
          <Card className='p-8 border-none bg-background/50 backdrop-blur'>
            <h3 className='text-4xl font-bold text-primary mb-2'>40%</h3>
            <p className='text-foreground/80'>Faster Payment Collection</p>
          </Card>
          <Card className='p-8 border-none bg-background/50 backdrop-blur'>
            <h3 className='text-4xl font-bold text-primary mb-2'>15+</h3>
            <p className='text-foreground/80'>Hours Saved Weekly</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

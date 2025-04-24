import { Header } from '@/components/Header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/Features'
import { Stats } from '@/components/landing/Stats'
import { CallToAction } from '@/components/landing/CallToAction'

export default function Home() {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-background'>
        <Hero />
        <Features />
        <Stats />
        <CallToAction />
      </div>
    </>
  )
}

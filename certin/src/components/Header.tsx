import Link from 'next/link'
import { ClientNavigation } from './ClientNavigation'

export function Header() {
  return (
    <header className='w-full border-b'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href='/' className='text-xl font-semibold'>
          Certin
        </Link>
        <nav>
          <ClientNavigation />
        </nav>
      </div>
    </header>
  )
}

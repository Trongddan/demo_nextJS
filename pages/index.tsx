import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
    <main>
    <Header name={"danken"} age={12}/>
    </main>

    </div>
  )
}

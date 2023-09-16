
import Music from '@/components/Music';
import OPENING from '@/components/OPENING';
import PART1 from '@/components/PART1';
import Image from 'next/image'

export default function Home() {


  return (
    <>    
    <main className='max-w-[640px] mx-auto min-h-screen flex items-cente relative overflow-hidden'>
      <OPENING/>
      <PART1/>
      <Music/>
    </main>
    </>
  )
}

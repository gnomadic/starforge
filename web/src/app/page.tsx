import door from "@/images/door.png";
import Image from 'next/image';
import Link from 'next/link';
import EXPLORE from '@/images/homepage/EXPLORE.png'
import PLAY from '@/images/homepage/PLAY.png'
import PVE from '@/images/homepage/PVE.png'
import type { Metadata } from 'next'
import MintSection from "@/components/home/MintSection";
import HowToPlaySection from "@/components/home/HowToPlaySection";



export const metadata: Metadata = {
  title: 'Adventure Alchemist',
}


export default function Home() {
  return (
    <main className='items-center font-ptser'>
      {/* <section className='min-w-full pt-12 font-mono min-h-screen'> */}
      {/* <Image
          className='mx-auto'
          src={door}
          alt="door"
          width={300}
          height={300}
        /> */}
      {/* <div className='mx-auto text-3xl text-center text-white pt-28'> */}
      {/* <div className='mx-auto text-5xl md:text-7xl font-display font-bold leading-tight'>
        
        The End of the Universe is Near
        </div>
        <div className='pt-4 mx-auto text-xl text-center text-lightgrey'>
        We can shape what comes next
        </div>
        <div className='mx-auto text-center'>
          <Link
            href='/mint'>
            <button
              className='px-4 py-2 mx-auto mt-24 text-black bg-white rounded-lg'
            >
              Join Us
            </button>
          </Link>
        </div>
        <div className="scroll-indicator" />
      </section> */}

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="text-center max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-mono font-bold leading-tight">
            {/* Discover the <span className="text-gradient">Cosmic</span> Collection */}
            It's the end of the universe.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/70">
            {/* A journey through the stars, captured in digital art */}
            Don't worry, we have a plan
          </p>
        </div>

        <div className="scroll-indicator" />
      </section>
      <HowToPlaySection />
      <MintSection />
      {/* 
      <section className='min-w-full pt-12 md:pt-48 '>

        <div className='mx-auto text-3xl text-center text-white'>
          Want to play?
        </div>
        <div className='pt-4 mx-auto text-xl text-center text-lightgrey'>
          We&apos;re just getting started  <br />
          and you can join us to shape the game
        </div>
        <div className='mx-auto text-center'>
          <Link
            href='/mint'>
            <button
              className='px-4 py-2 mx-auto mt-8 text-black rounded-lg bg-tavernOrange'
            >
              Mint now
            </button>
          </Link>
        </div>
      </section> */}
    </main>
  );
}

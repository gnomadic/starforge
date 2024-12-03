import door from "@/images/door.png";
import Image from 'next/image';
import Link from 'next/link';
import EXPLORE from '@/images/homepage/EXPLORE.png'
import PLAY from '@/images/homepage/PLAY.png'
import PVE from '@/images/homepage/PVE.png'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Adventure Alchemist',
}


export default function Home() {
  return (
    <main className='items-center py-12 md:py-24 font-ptser'>
      <section className='min-w-full pt-12 '>
        <Image
          className='mx-auto'
          src={door}
          alt="door"
          width={300}
          height={300}
        />
        <div className='mx-auto text-3xl text-center text-white'>
        Craft. <br /> Enchant.  <br /> Conquer.
        </div>
        <div className='pt-4 mx-auto text-xl text-center text-lightgrey'>
        An onchain idle game 
        </div>
        <div className='mx-auto text-center'>
          <Link
            href='/mint'>
            <button
              className='px-4 py-2 mx-auto mt-8 text-black bg-white rounded-lg'
            >
              Mint now
            </button>
          </Link>
        </div>
      </section>
      <section className='grid grid-cols-1 gap-24 pt-24 text-center md:grid-cols-2 md:pt-48 md:gap-y-48 md:text-left md:px-12'>
        <div className='mx-auto' >
          <Image
            src={PVE}
            alt="explore"
            width={300}
            height={300}
          />
        </div>
        <div className='mx-auto'>
          <div className='text-3xl '>
          Start Your Journey.
          </div>
          <div className='text-xl text-lightgrey'>
            Choose your lab, customize it, and launch it. <br /> Play to unlock new customizations and upgrades.
          </div>
        </div>
        <div className='mx-auto'>
          <div className='text-3xl '>
            Support your local adventurers <br />
          </div>
          <div className='text-xl text-lightgrey'>
            The potions and items you create can be sold for gold, <br />
            which can be used to buy more items and upgrades
          </div>
        </div>
        <div className='mx-auto' >
          <Image
            src={EXPLORE}
            alt="explore"
            width={300}
            height={300}
          />
        </div>
        <div className='mx-auto text-center' >
          <Image
            src={PLAY}
            alt="explore"
            width={300}
            height={300}
          />
        </div>
        <div className='mx-auto '>
          <div className='text-3xl'>
            Completely onchain <br />
          </div>
          <div className='text-xl text-lightgrey'>
            Data, gameplay, and rules are all stored onchain. <br />
            This means your Lab is transparent, secure, and unstoppable. <br />
            And it means you don&apos;t have to worry about a server.
          </div>
        </div>
      </section>
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
      </section>
    </main>
  );
}

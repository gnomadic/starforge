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
        S T A R | F O R G E
        </div>
        <div className='pt-4 mx-auto text-xl text-center text-lightgrey'>
        An onchain game 
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
          S T A R | F O R G E
          </div>
          <div className='text-xl text-lightgrey'>
          Mauris eu risus sed ligula tempor consectetur eget quis velit. Donec volutpat ante vulputate, euismod mauris sit amet, semper metus. Donec mattis auctor quam, vel commodo purus finibus ut. Aenean posuere lorem sed risus rhoncus interdum. Donec sodales, tortor non tincidunt egestas, velit lorem sodales lorem, vitae vehicula ipsum nibh ut quam
          </div>
        </div>
        <div className='mx-auto'>
          <div className='text-3xl '>
          S T A R | F O R G E
          </div>
          <div className='text-xl text-lightgrey'>
          Donec purus eros, condimentum ac malesuada et, venenatis eu dui. Nulla luctus augue urna. Vestibulum volutpat tortor vel purus eleifend venenatis. In et turpis ac ligula gravida ullamcorper. Nulla consectetur, lacus eu aliquet molestie, neque enim consectetur justo, eget vehicula mi nibh a neque. Curabitur ornare enim eget massa maximus, eget consectetur lacus consequat. Donec eu posuere enim.
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
          S T A R | F O R G E
          </div>
          <div className='text-xl text-lightgrey'>
          Sed dictum non metus blandit tempus. Phasellus scelerisque aliquet arcu ut blandit. Maecenas lorem ante, ullamcorper quis venenatis id, rhoncus ut nisi. Fusce vel justo dui.
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

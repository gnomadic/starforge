import door from "@/images/door.png";
import Image from 'next/image';
import Link from 'next/link';
import EXPLORE from '@/images/homepage/EXPLORE.png'
import PLAY from '@/images/homepage/PLAY.png'
import PVE from '@/images/homepage/PVE.png'

export default function Home() {

  return (
    <main className='items-center py-12 md:py-24 font-outfit'>
      <section className='min-w-full pt-12 '>
        <Image
          className='mx-auto'
          src={door}
          alt="door"
          width={300}
          height={300}
        />
        <div className='mx-auto text-3xl text-center text-white'>
          Build community by playing <br /> games together
        </div>
        <div className='pt-4 mx-auto text-xl text-center text-lightgrey'>
          Made for web3 communities <br />
          looking to launch gaming infrastructure
        </div>
        <div className='mx-auto text-center'>
          <Link
            href='/demo'>
            <button
              className='px-4 py-2 mx-auto mt-8 text-black bg-white rounded-lg'
            >
              Try Demo
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
            Super easy to get started. <br /> Seriously, no code.
          </div>
          <div className='text-xl text-lightgrey'>
            All it takes is submitting transactions. <br />  Choose your gameplay, customize it, and launch it.
          </div>
        </div>
        <div className='mx-auto'>
          <div className='text-3xl '>
            We believe in the power of play. <br />
          </div>
          <div className='text-xl text-lightgrey'>
            Communities are stronger when they play together.
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
            This means your game is transparent, secure, and unstoppable. <br />
            And it means you don&apos;t have to worry about a server.
          </div>
        </div>
      </section>
      <section className='min-w-full pt-12 md:pt-48 '>

        <div className='mx-auto text-3xl text-center text-white'>
          Want a custom solution?
        </div>
        <div className='pt-4 mx-auto text-xl text-center text-lightgrey'>
          We help developers and NFT collections build custom games  <br />
          that are white labeled with our protocol
        </div>
        <div className='mx-auto text-center'>
          <Link
            href='/intro'>
            <button
              className='px-4 py-2 mx-auto mt-8 text-black rounded-lg bg-tavernOrange'
            >
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

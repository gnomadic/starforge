import door from "@/images/door.png";
import Image from 'next/image';
import Link from 'next/link';
import EXPLORE from '@/images/homepage/EXPLORE.png'
import PLAY from '@/images/homepage/PLAY.png'
import PVE from '@/images/homepage/PVE.png'
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className='pt-4 mx-auto text-xl text-center text-white/50'>
          Made for web3 communities <br />
          looking to launch gaming infrastructure
        </div>
        <div className='mx-auto text-center'>
          <Link
            href='/gallery'>
            <button
              className='px-4 py-2 mx-auto mt-8 text-black bg-white rounded-lg'
            >
              See what's possible
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


        {/* <div className='mx-auto'>
          <div className='text-3xl '>
            Super easy to get started. <br /> Seriously, no code.
          </div>
          <div className='text-xl text-lightgrey'>
            All it takes is submitting transactions. <br />  Choose your gameplay, customize it, and launch it.
          </div>
        </div> */}


        <Card className="bg-card/50 border-border system-card p-4 m-4">
          <CardHeader>
            <CardTitle className="text-3xl">Super easy to get started. <br /> Seriously, no code.</CardTitle>
            <CardDescription className="pt-4">All it takes is submitting transactions. <br />  Choose your gameplay, customize it, and launch it.</CardDescription>
          </CardHeader>
        </Card>





        <Card className="bg-card/50 border-border system-card p-4 m-4">
          <CardHeader>
            <CardTitle className="text-3xl">We believe in the power of play. <br /></CardTitle>
            <CardDescription className="pt-4">Communities are stronger when they play together.</CardDescription>
          </CardHeader>
        </Card>


        {/* <div className='mx-auto'>
          <div className='text-3xl '>
            We believe in the power of play. <br />
          </div>
          <div className='text-xl text-lightgrey'>
            Communities are stronger when they play together.
          </div>
        </div> */}
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

        {/* 
        <div className='mx-auto '>
          <div className='text-3xl'>
            Completely onchain <br />
          </div>
          <div className='text-xl text-lightgrey'>
            Data, gameplay, and rules are all stored onchain. <br />
            This means your game is transparent, secure, and unstoppable. <br />
            And it means you don&apos;t have to worry about a server.
          </div>
        </div> */}

        <Card className="bg-card/50 border-border system-card p-4 m-4">
          <CardHeader>
            <CardTitle className="text-3xl">Completely onchain <br /></CardTitle>
            <CardDescription className="pt-4">Data, gameplay, and rules are all stored onchain. <br />
              This means your game is transparent, secure, and unstoppable. <br />
              And it means you don&apos;t have to worry about a server.</CardDescription>
          </CardHeader>
        </Card>




      </section>
      <section className='min-w-full pt-12 md:pt-48 '>

        <div className="text-center px-4 py-12">
          <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Want a custom solution?
            </p>
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary mx-auto mb-4 glow flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <p className="text-muted-foreground">
                We help developers and NFT collections build custom games  <br />
                that are white labeled with our protocol
              </p>
            </div>
            <Link
              href='https://5gz89tb0qad.typeform.com/to/s9xvdSP3' target="_blank" rel="noopener noreferrer">
              <button
                className='px-4 py-2 mx-auto mt-8 text-black bg-white rounded-lg'
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>


      </section>
    </main>
  );
}

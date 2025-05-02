

import Image from 'next/image';

import landingimage from '@/images/intro/landingimage.svg';
import moduleImage from '@/images/intro/moduleImage.svg';
import stepsImage from '@/images/intro/stepsImage.svg';

import Divider from '@/components/Divider';

import { Metadata, ResolvingMetadata } from 'next';
import { getFrameMetadata } from '@coinbase/onchainkit';


interface Params {
  chainid: string;
  address: string;
}

interface SearchParams {
  page: string;
}


export async function generateMetadata({
  params,
  searchParams
}: {
  params: Params;
  searchParams: SearchParams
}): Promise<Metadata> {
  const { chainid, address } = params;
  const { page } = searchParams;

  const postURL = `${process.env.NEXT_PUBLIC_URL}/intro/frame?page=two`;
  const imageUrl = `${process.env.NEXT_PUBLIC_URL}/intro/frame/images?page=one`;

  // const gameSummary = await getGameSummary(params.chainid, params.address as Address)
  // // console.log(gameSummary)

  // const buttonLabels = gameSummary.availableFunctions.length > 0 ? gameSummary.availableFunctions[0].Key : "no modules!"


  return {
    title: 'Tavern Game Frame',
    description: `A Tavern game`,
    openGraph: {
      title: 'playtavern.com',
      description: 'nocode onchain game creation',
      images: [`${imageUrl}`],
    },
    other: {
      ...getFrameMetadata({
        buttons: [{
          action: "post",
          label: `next`,
          target: `${postURL}`
        }],
        image: `${imageUrl}`,
      }),
    },
  };
}

export default function Intro({ params }: { params: { address: string } }) {



  return (
    <main className='font-anon flex flex-col items-center justify-between p-24 mt-40'>

      <Image
        src={landingimage}
        alt='Hero'
        width={1200}
        height={630}
      />


      <section>
        <Divider />
      </section>

      <Image
        src={moduleImage}
        alt='Hero'
        width={1200}
        height={630}
      />

      <section>
        <Divider />
      </section>

      <Image
        src={stepsImage}
        alt='Hero'
        width={1200}
        height={630}
      />



    </main>
  );
}

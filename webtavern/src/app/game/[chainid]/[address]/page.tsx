import GameHeader from '@/components/game/GameHeader';
import { Address } from 'viem';
import { Metadata } from 'next';
import { getFrameMetadata } from '@coinbase/onchainkit';
import GameInfo from '@/components/game/GameInfo';
import GMSection from '@/components/game/GMSection';
import GameTabs from '@/components/game/GameTabs';


interface Params {
  chainid: string;
  address: string;
}

interface SearchParams {
  action: string;
}

export async function generateMetadata({
  params,
  searchParams
}: {
  params: Params;
  searchParams: SearchParams
}): Promise<Metadata> {
  const { chainid, address } = params;
  const { action } = searchParams;

  const postURL = `${process.env.NEXT_PUBLIC_URL}/game/${chainid}/${address}/frame?action=${action}`;
  
  const buttonLabels = 'nope';

  return {
    title: 'Tavern Game',
    description: `A Tavern game`,
    openGraph: {
      title: 'playtavern.com',
      description: 'nocode onchain game creation',
      images: ['https://ipfs.io/ipfs/QmSxZqKhHjEUM1iemXrMJsmwwMy8jZ8yx2zSajE3D7ReY6'],
    },
    other: {
      ...getFrameMetadata({
        buttons: [{
          action: "post",
          label: `${buttonLabels}`,
          target: `${postURL}`
        }],
        image: 'https://ipfs.io/ipfs/QmSxZqKhHjEUM1iemXrMJsmwwMy8jZ8yx2zSajE3D7ReY6',
      }),
    },
  };
}


export default function Game({ params }: { params: { address: string, chainid: string } }) {
  return (
    <main className='font-signika px-8 py-20 md:px-16'>
      <section className='border border-white border-dashed'>

      <GameHeader gameAddress={params.address as Address} />
      <GameTabs gameAddress={params.address as Address} chainId={params.chainid}/>

      {/* <GameInfo gameAddress={params.address as Address} />

      <GMSection gameAddress={params.address as Address} /> */}
      </section>

    </main>
  );
}

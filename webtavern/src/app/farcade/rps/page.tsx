import Divider from '@/components/Divider';
import { Metadata, ResolvingMetadata } from 'next';
import PlayRPS from '@/components/farcade/rps/PlayRPS';
import { fetchMetadata } from 'frames.js/next';
import { getBaseUrl } from './frame/frames';
import ChainTitle from '@/components/base/ChainTitle';

interface Params {
  chainid: string;
  address: string;
}

interface SearchParams {
  action: string;
}

// export const GAME_ADDRESS: Address  = '0xa36F4B4C02D5f583C2747B468730B54D27F7a469';

export async function generateMetadata({

}: {

  }): Promise<Metadata> {

  const postURL = `${process.env.NEXT_PUBLIC_URL}/farcade/rps/frame?action=`;
  const txURL = `${process.env.NEXT_PUBLIC_URL}/farcade/rps/frame/txdata?action=`;
  const imageURL = `${process.env.NEXT_PUBLIC_URL}/farcade/rps/frame/images`;


  // let rockButton: FrameButtonMetadata =
  // {
  //   action: "post",
  //   label: "ROCK",
  //   target: `${postURL}rock&game=${GAME_ADDRESS}`,
  // }

  // let rockButton: FrameButtonMetadata =
  // {
  //   action: "tx",
  //   label: "ROCK",
  //   target: `${txURL}rock`,
  //   postUrl: `${postURL}rock`,


  // }

  // let paperButton: FrameButtonMetadata =
  // {
  //   action: "post",
  //   label: "PAPER",
  //   target: `${postURL}paper`,
  // }

  // let scissorsButton: FrameButtonMetadata =
  // {
  //   action: "post",
  //   label: "SCISSORS",
  //   target: `${postURL}scissors`,
  // }

  // let tavernButton: FrameButtonMetadata =
  // {
  //   action: "link",
  //   label: "TAVERN",
  //   target: `https://docs.playtavern.com`,
  // }
  //   const gameSummary = await getGameSummary(params.chainid, params.address as Address)
  // console.log(gameSummary)

  //   const buttonLabels = gameSummary.availableFunctions.length > 0 ? gameSummary.availableFunctions[0].Key : "no modules!"
  // const buttonLabels = "ROCK";

  // return {
  //   title: 'Rock Paper Scissors ',
  //   description: `A Tavern game`,
  //   openGraph: {
  //     title: 'playtavern.com',
  //     description: 'nocode onchain game creation',
  //     images: [`${imageURL}`],
  //   },
  //   other: {
  //     ...getFrameMetadata({
  //       buttons: [rockButton, paperButton, scissorsButton, tavernButton],
  //       image: `${imageURL}`,
  //     }),
  //   },
  // };

  return {
    title: "New api example",
    description: "This is a new api example",
    other: {
      ...(await fetchMetadata(
        new URL("/farcade/rps/frame", getBaseUrl())
      )),
    },
  };


}


export default function Game({ params }: { params: { address: string, chainid: string } }) {

  return (

    <main className='items-center py-12 md:py-24 font-anon'>
      <section className='pt-36 min-w-full'>
        <ChainTitle title='Rock Paper Scissors' />
      </section>
      <PlayRPS />
    </main>

  );
}

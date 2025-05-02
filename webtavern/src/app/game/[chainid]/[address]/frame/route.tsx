import { ACTION_HELLO, GameSummary, QUERY_ACTION, QUERY_GAME } from "@/domain/Domain";
import { getFrameHtmlResponse, getFrameMessage } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { getBlockNumber, getGameSummary } from "@/services/viemService";
import { Address } from "viem";


function prepareTxPayload(chainid: string, gameAddress: string, gameSummary: GameSummary, action: string) {

  const gameFunction = gameSummary.flows.find((e) => { e.values.find((a) =>{a.value === action}) })


  return {
    chainId: `eip155:${chainid}`,
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: `${gameAddress}`,
      data: "",
      value: "0"
    }
  }
  //   {
  //   chainId: "eip155:10",
  //   method: "eth_sendTransaction",
  //   params: {
  //     abi: [...], // JSON ABI of the function selector and any errors
  //     to: "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D",
  //     data: "0x783a112b0000000000000000000000000000000000000000000000000000000000000e250000000000000000000000000000000000000000000000000000000000000001",
  //     value: "984316556204476",
  //   },
}


export async function POST(
  request: NextRequest,
  { params }: { params: { chainid: string, address: string } }
) {
  // const action = request.nextUrl.searchParams.get(QUERY_ACTION);
  // // const game = request.nextUrl.searchParams.get(QUERY_GAME);
  // if (!action) {
  //   return new NextResponse('action or game query params are invalid!', { status: 400 });
  // }



  console.log(params.chainid);
  console.log(params.address);
  const action = request.nextUrl.searchParams.get('action');


  const blocknumber = await getBlockNumber();
  const gameSummary = await getGameSummary(params.chainid, params.address as Address)
  console.log(gameSummary)

  return new NextResponse(getFrameHtmlResponse({
    buttons: [
      {
        label: `blocknumber: ${blocknumber}`,
      },
    ],
    image: 'https://cyan-fiscal-mackerel-412.mypinata.cloud/ipfs/QmbuoqRAJKXrZb2f1yvCxZUmj4YyXqfhC1iTXVpWRPvF1s',
    postUrl: `${process.env.NEXT_PUBLIC_URL}/game/11155111/0xd362776F706b8E72525e3291e5433A695ECBefA7/frame`,
  }),);

  // if (action === ACTION_HELLO){
  // return new ImageResponse((
  //     <div style={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       backgroundColor: 'black',
  //       width: '100%',
  //       height: '100%',
  //       padding: '20px',
  //       justifyContent: 'center'
  //     }}>
  //       <div style={{fontSize: "48px", color: "white", marginBottom: '10px'}}>Mint an NFT and Claim Your Reward</div>
  //       <div style={{fontSize: "24px", color: "white"}}>Click below to check if you&apos;re eligible and then mint and
  //         claim!
  //       </div>
  //     </div>
  //   ), {width: 600, height: 400});
  // }
}



export async function GET(
  request: NextRequest,
  { params }: { params: { chainid: string, address: string } }
) {
  const action = request.nextUrl.searchParams.get('action');
  if (!action) {
    return new NextResponse("error: Action required to generate image!", { status: 400 });
  }


}



import { ACTION_HELLO, GameSummary, QUERY_ACTION, QUERY_GAME } from "@/domain/Domain";
import { FrameButtonMetadata, getFrameHtmlResponse, getFrameMessage, FrameInputMetadata, FrameRequest } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { Address } from "viem";

const postURL = `${process.env.NEXT_PUBLIC_URL}/intro/frame?page=`;
const imageURL = `${process.env.NEXT_PUBLIC_URL}/intro/frame/images?page=`;


type Frame = {
  page: string;
  nextPage: string | undefined;
  prevPage: string | undefined;
  input: string | undefined;
  btn: string;

}

const frames: Frame[] = [
  { page: 'one', nextPage: "two", input: undefined, prevPage: undefined, btn: "next" },
  { page: 'two', nextPage: "three", input: undefined, prevPage: 'one', btn: "next" },
  { page: 'three', nextPage: "four", input: undefined, prevPage: 'two', btn: "next" },
  { page: 'four', nextPage: "five", input: "Vote for a name!", prevPage: 'three', btn: "vote" },
  { page: 'five', nextPage: "one", input: undefined, prevPage: 'four', btn: "start over" },
]


export async function POST(
  request: NextRequest,
) {


  const frameRequest: FrameRequest = await request.json();
  const { isValid, message } = await getFrameMessage(frameRequest); 

  console.log(message);
 


  const page = request.nextUrl.searchParams.get('page');
  const curFrame = frames.find(f => f.page === page);

  let newPage = '';
  if (page === 'one') {
    newPage = 'two';
  } else if (page === 'two') {
    newPage = 'three';
  } else if (page === 'three') {
    newPage = 'one';
  } else if (page === 'four') {
    newPage = 'five';
  } else if (page == "five") {
    newPage = "one"
  }




  let nextButton: FrameButtonMetadata =
  {
    action: "post",
    label: `${curFrame?.btn}`,
    target: `${postURL}${curFrame?.nextPage}`,
  }

  let prevButton: FrameButtonMetadata =
  {
    action: "post",
    label: "previous",
    target: `${postURL}${curFrame?.prevPage}`,
  }






  const secondButton = [];
  if (page !== 'one') {
    secondButton.push(nextButton)
  } else {
    prevButton = nextButton;
  }







  if (curFrame?.input != undefined) {
    return new NextResponse(getFrameHtmlResponse({
      buttons: [prevButton, ...secondButton],
      image: `${imageURL}${curFrame?.page}`,
      input: { text: `${curFrame?.input}` }
    }));

  } else {
    return new NextResponse(getFrameHtmlResponse({
      buttons: [prevButton, ...secondButton],
      image: `${imageURL}${curFrame?.page}`
    }))
  }

  // postUrl: `${process.env.NEXT_PUBLIC_URL}/game/11155111/0xd362776F706b8E72525e3291e5433A695ECBefA7/frame`,
}


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




// export async function GET(
//   request: NextRequest,
//   { params }: { params: { chainid: string, address: string } }
// ) {
//   const action = request.nextUrl.searchParams.get('action');
//   if (!action) {
//     return new NextResponse("error: Action required to generate image!", { status: 400 });
//   }


// }



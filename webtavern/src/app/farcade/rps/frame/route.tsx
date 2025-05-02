/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { CHAIN_ID, frames } from "./frames";
import WelcomeRPS from "./images/WelcomeRPS";
import { getDeployment, getGameResult, isPlayerInQueue } from "@/services/viemService";
import { Address, zeroAddress } from "viem";
import { bigIntReplacer } from "@/domain/utils";
import { RPSGameResult } from "@/domain/Domain";



// initial frame shows four actions, RPS and like status?
// if the player clicks status it'll grab the queue size?
// if the player hits RPS it'll play for them unless they're already in the queue



const handleRequest = frames(async (ctx) => {

  // if (!ctx?.message?.isValid) {
  //   throw new Error("Invalid Frame");
  // }

  const action = ctx.searchParams.action;
  if (!action) {

  }
  console.log("action", action);

  const postURL = `/rps/frame?action=`;
  const txURL = `/rps/frame/txdata?action=`;
  const imageURL = `/rps/frame/images`;


  let userAddress = ctx?.message?.connectedAddress;
  
  if (process.env.NODE_ENV === "development") {
    userAddress = "0x2273fFEd38ED040FBcd3e45Cd807594d27ebfAE3";
  }
  


  

  // ctx.message?.

  // ctx.message?.transactionId -> tx submitted




  const deployment = getDeployment(CHAIN_ID);
  const resultAddress = deployment.resultComponent;
  const game = deployment.rpsGame;
  // console.log('-----------')
  // console.log('game', game)
  // console.log('resultAddress', resultAddress)
  // console.log('userAddress', userAddress)
  // console.log('-----------')


  const result = await getGameResult(CHAIN_ID, resultAddress, game, userAddress as Address);
  const inQueue = await isPlayerInQueue(CHAIN_ID, game, userAddress as Address);
// console.log(JSON.stringify(result, bigIntReplacer))

  return {
    image: (
      getImage(action, userAddress, result, inQueue)
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="tx"
        target={{ pathname: "/rps/frame/txdata", query: { action: "rock", game: game } }}
        post_url={{ pathname: "/rps/frame", query: { action: "rock", game: game } }}>
        ROCK
      </Button>,
      <Button
        action="tx"
        target={{ pathname: "/rps/frame/txdata", query: { action: "paper", game: game } }}
        post_url={{ pathname: "/rps/frame", query: { action: "paper", game: game } }}>
        PAPER
      </Button>,
      <Button
        action="tx"
        target={{ pathname: "/rps/frame/txdata", query: { action: "scissors", game: game } }}
        post_url={{ pathname: "/rps/frame", query: { action: "scissors", game: game } }}>
        SCISSORS
      </Button>,
      <Button
        action="post" 
        target={{ pathname: "/rps/frame", query: { action: "results", game: game } }}>
        RESULTS
      </Button>,
    ],
  };
});

// async function getImage(action: string, userAddress: string | undefined) {

const getImage = (action: string, userAddress: string | undefined, result: RPSGameResult, inQueue: boolean) => {

  if (action === "rock") {
    return <WelcomeRPS
    cta="make your move!"
    info1="you won last game"
    info2="you played rock"
    info3="0x1234 played scissors"

    />

  } else if (action == "paper") {
    return <WelcomeRPS
    cta="make your move!"
    info1="you won last game"
    info2="you played rock"
    info3="0x1234 played scissors"
    />
  } else if (action == "scissors") {
    return <WelcomeRPS
    cta="make your move!"
    info1="you won last game"
    info2="you played rock"
    info3="0x1234 played scissors"
    />
  } else if (action == "results" && userAddress) {

    let titleFirst = "";
    let titleSecond = "";
    let rowOneFirst = "";
    let rowOneSecond = "";
    let rowTwoFirst = "";
    let rowTwoSecond = "";

    if (result.opponent === zeroAddress) {
    // never played
    // in queue and never played
    // not in queue and never played
    }else{
    // in queue and played before
    // not in queue and played before
    }
    

    // https://cyan-fiscal-mackerel-412.mypinata.cloud/ipfs/QmbTMY2F1AAAGR85LGpgcF269QRMhroUWfQb7tVDiD1X1Z
    
    
    
    

    if (inQueue) {
      titleFirst = "you are in the";
      titleSecond = "queue";
    }

    
    let winner = "draw";
    if (result?.winner === userAddress) {
      winner = "win";
    }else {
      winner = "loss";
    }


    return <WelcomeRPS
    cta="make your move!"
    info1="you won last game"
    info2="you played rock"
    info3="0x1234 played scissors"
    />
  }
  // first load
  return <WelcomeRPS
  cta="play onchain together"
  info1="built with the"
  info2="tavern protocol"
  info3="without any code"
  />
}

export const GET = handleRequest;
export const POST = handleRequest;
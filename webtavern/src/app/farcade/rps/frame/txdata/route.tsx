import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import {
    Abi,
    Address,
    createPublicClient,
    encodeFunctionData,
    getContract,
    http,
} from "viem";
import { GAME_ABI } from "./abi";
import { GameFuncParams } from "@/domain/Domain";
import { CHAIN_ID, frames } from "../frames";
import { getDeployment } from "@/services/viemService";





const handleRequest = frames(async (ctx) => {

    const action = ctx.searchParams.action;
    const game = ctx.searchParams.game;
    const userAddress = ctx?.message?.connectedAddress;

    console.log(JSON.stringify(ctx));

    if (!action) {

    }
    console.log("action", action);
    console.log("game", game);
    console.log("userAddress", userAddress);

    let numberAction = 0;
    if (action === "rock") {
        numberAction = 1;
    } else if (action === "paper") {
        numberAction = 2;
    } else if (action === "scissors") {
        numberAction = 3;
    }


    const params: GameFuncParams = {
        strings: [],
        uints: [{ name: 'action', value: BigInt(numberAction) }],
        addresses: [{ name: "player", value: userAddress! as Address }],
    }

    const calldata = encodeFunctionData({
        abi: GAME_ABI,
        functionName: "executeFlow",
        args: ["playRPS", params],
    });

    // const publicClient = createPublicClient({
    //     chain: sepolia,
    //     transport: http(),
    // });

    // const gameContract = getContract({
    //     address: game as Address,
    //     abi: GAME_ABI,
    //     client: publicClient,
    // });

    return NextResponse.json({
        chainId: `eip155:${CHAIN_ID}`,
        method: "eth_sendTransaction",
        params: {
            abi: GAME_ABI as Abi,
            to: game,
            data: calldata,
        },
    });



});

export const POST = handleRequest;
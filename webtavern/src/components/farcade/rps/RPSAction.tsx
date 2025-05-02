'use client';

import { useReadPvpResultGetLastGame, useReadQueueSessionGetPlayerCount, useReadQueueSessionIsPlayerInQueue, useWatchQueueSessionJoinedQueueEvent, useWatchRockPaperScissorsGameResultEvent, useWriteGame, useWriteGameExecuteFlow, watchRockPaperScissorsGameResultEvent } from '@/generated';
import { Deployment, GameFuncParams } from '@/domain/Domain';
import { useWaitForTransactionReceipt } from 'wagmi';
import { Address } from 'viem';
import { useEffect } from 'react';
import { toast } from 'react-toastify';



type ActionProps = {
    deploy: Deployment;
    address: Address;
    actionmap: { num: string, value: string, image: any }[];
    selected: number;
    setSelected: (n: number) => void;

}

export default function RPSAction(props: ActionProps) {


    // const { data: games, error: gameError } = useReadGameFactoryGetGames({ address: deploy.gameFactory, args: [0] })
    const { data: queueSize, error: queueError, refetch: refetchQueuePlayers } = useReadQueueSessionGetPlayerCount({ address: props.deploy.queueComponent, args: [props.deploy.rpsGame] });
    const { data: inQueue, error: inQueueError, refetch: refetchInQueue } = useReadQueueSessionIsPlayerInQueue({ address: props.deploy.queueComponent, args: [props.deploy.rpsGame, props.address] });
    // const {data: lastGame, error: lastGameError } = useReadPvpResultGetLastGame({address: deploy.resultComponent, args: [address ? address : zeroAddress, deploy.rpsGame]});
    const { data: lastGame, error: lastGameError, refetch: refetchGetLastGame } = useReadPvpResultGetLastGame({ address: props.deploy.resultComponent, args: [props.deploy.rpsGame, props.address] });


    const { data: hash, error: writeError, writeContract } = useWriteGame();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    // const [selected, setSelected] = useState<number>(0);




    const executeFlowTx = (action: number) => {
        console.log("games and address", props.address)
        if (!props.address) {
            console.log("too soon!");
            return;
        }
        console.log(action);
        const params: GameFuncParams = {
            strings: [],
            uints: [{ name: 'action', value: BigInt(action) }],
            addresses: [{ name: "player", value: props.address! }],
        }

        // const write = await executeFlow(games[0].game, "playRPS", params);
        // console.log("params", params);
        // console.log("watching for component: ", deploy.rpsComponent)
        // console.log("watching for game: ", deploy.rpsGame)
        writeContract({ address: props.deploy.rpsGame, functionName: "executeFlow", args: ["playRPS", params] });


    }

    useEffect(() => {
        if (queueError) {
            toast.error(queueError.message);
        }
        if (writeError) {
            toast.error(writeError.message);
        }
        if (isLoading) {
            toast.info("Transaction is pending");

        }
        if (isSuccess) {
            toast.success("Transaction is successful");
            refetchGetLastGame();
            refetchQueuePlayers();
            refetchInQueue();
        }
        // if (data) {
        //     console.log("data", data.logs);
        //     const MY_ABI: Abi = [...gameAbi, ...rockPaperScissorsAbi, ...rewardErc20Abi, ...queueSessionAbi, ...erc20Abi, ...erc721Abi];

        //     data.logs.map((log: any) => {
        //         try {
        //             const wat = decodeEventLog({ abi: MY_ABI, ...log });
        //             console.log(wat)
        //             if (wat.eventName == "GameResult") {
        //                 console.log("game result", wat)
        //             }
        //         } catch (e) {
        //             console.log("bad abi")
        //         }

        //     });
        // }
    }, [queueError, writeError, isLoading, isSuccess, data]);



    return (
        <section className='relative min-h-96 md:min-h-full' >
            <div className='p-4 text-2xl'>
                Rock Paper Scissors
            </div>


            <div className='px-4 text-lg font-outfit'>
                Choice
            </div>
            {/* <div className='px-4 text-lg font-outfit'>
                {props.selected}
            </div> */}

            <div className='flex gap-2 p-4 text-xs font-outfit'>
                {props.actionmap.map((element, i) => {
                    if (i != 0) {
                        return (
                            <button
                                key={i}
                                className={'justify-center py-4 border rounded-md basis-1/3 bg-slate-800 ' + ((props.selected === i) ? 'border-selected text-selected' : 'border-unselected text-unselected')}
                                onClick={() => {
                                    if (props.selected == i) {
                                        props.setSelected(0);
                                    } else {
                                        props.setSelected(i);
                                    }
                                }}
                            >
                                {element.value}
                            </button>

                        );
                    }
                })}


            </div>
            <div className='absolute bottom-0 flex p-4 inset-x-1'>
                <button
                    className='flex-grow py-2 mx-auto text-black rounded-md basis-0 bg-tavernOrange disabled:hidden'
                    onClick={() => { executeFlowTx(props.selected); }}
                    disabled={inQueue || props.selected === 0}
                >
                    play
                </button>
            </div>



        </section >
    );
}

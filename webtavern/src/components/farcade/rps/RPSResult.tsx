'use client';

import { useReadPvpResultGetLastGame, useReadQueueSessionIsPlayerInQueue } from '@/generated';
import { Deployment } from '@/domain/Domain';
import { Address, zeroAddress } from 'viem';
import rock from '@/images/rockpaperscissors/rock.png';
import Image from 'next/image';
import { Name } from '@coinbase/onchainkit/identity';
import { pretty } from '@/domain/utils';



type ResultProps = {
    deploy: Deployment;
    address: Address;
    actionmap: { num: string, value: string, image: any }[];
    selected: number;
}


export default function RPSResult(props: ResultProps) {

    let actionmap = [
        { num: "1", value: 'rock', image: '/images/rockpaperscissors/rock.png' },
        { num: "2", value: 'paper', image: '/images/rockpaperscissors/paper.png' },
        { num: "3", value: 'scissors', image: '/images/rockpaperscissors/scissors.png' },
    ]

    const { data: inQueue, error: inQueueError, refetch: refetchInQueue } = useReadQueueSessionIsPlayerInQueue({ address: props.deploy.queueComponent, args: [props.deploy.rpsGame, props.address] });
    const { data: lastGame, error: lastGameError, refetch: refetchGetLastGame } = useReadPvpResultGetLastGame({ address: props.deploy.resultComponent, args: [props.deploy.rpsGame, props.address] });

    function inQueueView() {
        return (
            <section className=' grid gap-2 md:gap-2 grid-cols-1 md:grid-cols-3 md:px-12'>
                <div className='text-5xl md:text-6xl lg:text-8xl text-center md:col-span-3 '>
                    Waiting...
                </div>

                <div className='block md:hidden -pt-12' />
                <div className='md:block hidden pt-12 col-span-3' />
                <div className='scale-75 md:scale-100'>
                    <Image
                        className='rotate-45 mx-auto'
                        src={actionmap[0].image}
                        alt={actionmap[0].value}
                        // src={actionmap.find((action) => { return action.num === lastGame?.myAction.toString() })!.image}
                        // alt={actionmap.find((action) => { return action.num === lastGame?.myAction.toString() })!.value}
                        width={200}
                        height={200} />
                </div>

                <div className='md:block hidden' />

                <div className='text-xl lg:text-4xl text-selected text-center -mt-8 md:mt-0 md:hidden'>
                    <Name address={props.address} sliced={true} />
                    {/* {pretty(props.address)} */}
                </div>
                
                <div className='-rotate-45 scale-75 md:scale-100 -scale-y-75 md:-scale-y-100 '>
                    <Image
                        className='rotate-180 '
                        src={actionmap[0].image}
                        alt={actionmap[0].value}
                        width={200}
                        height={200} />
                </div>
                <div className='text-xl lg:text-4xl text-red text-center md:hidden'>
                    Loading...
                </div>


                <div className='text-xl xl:text-4xl text-selected text-center hidden md:block'>
                    <Name address={props.address} sliced={true} />
                    {/* {pretty(props.address)} */}
                </div>
                <div className='md:block hidden' />
                <div className='text-xl xl:text-4xl text-red text-center hidden md:block' >
                    Loading...
                </div>
                <div className='md:block hidden' />
                <div className='md:block hidden' />

            </section>
        )
    }



    function unplayedView() {
        return (
            <section>
                <div className='text-2xl p-4'>
                    Your next game
                </div>
                <div className=' grid gap-2 md:gap-2 grid-cols-1 md:grid-cols-3 md:px-12'>

                    <div className='text-5xl md:text-6xl lg:text-8xl text-center md:col-span-3 '>
                        Choose
                    </div>

                    <div className='block md:hidden -pt-12' />
                    <div className='md:block hidden pt-12 col-span-3' />
                    <div className='scale-75 md:scale-100'>
                        <Image
                            className='rotate-45 mx-auto'
                            src={props.actionmap[props.selected].image}
                            alt={props.actionmap[props.selected].value}
                            width={200}
                            height={200} />
                    </div>

                    <div className='md:block hidden' />

                    <div className='text-xl lg:text-4xl text-selected text-center -mt-8 md:mt-0 md:hidden'>
                        {/* <Name address={props.address} sliced={true} /> */}
                        {pretty(props.address)}
                    </div>
                    <div className='md:block hidden' />
                    <div className='text-xl xl:text-4xl text-selected text-center hidden md:block'>
                        {/* <Name address={props.address} sliced={true} /> */}
                        {pretty(props.address)}
                    </div>
                    <div className='md:block hidden' />

                    <div className='md:block hidden' />
                    <div className='md:block hidden' />
                </div>
            </section>
        )
    }

    function lastGameView() {
        return (
            <section>
                <div className='text-2xl p-4'>
                    Your last game
                </div>
                <div className=' grid gap-2 md:gap-2 grid-cols-1 md:grid-cols-3 md:px-12'>

                    {/* <div>{JSON.stringify(lastGame, bigIntReplacer)}</div> */}
                    <div className='text-5xl md:text-6xl lg:text-8xl text-center md:col-span-3 '>
                        {(lastGame?.winner == zeroAddress || lastGame?.myAction === lastGame?.opponentAction) ? "Draw" : lastGame?.winner == props.address ? "Winner" : "Loser"}
                    </div>

                    <div className='block md:hidden -pt-12' />
                    <div className='md:block hidden pt-12 col-span-3' />
                    <div className='scale-75 md:scale-100'>
                        <Image
                            className='rotate-45 mx-auto'
                            src={actionmap.find((action) => { return action.num === lastGame?.myAction.toString() })!.image}
                            alt={actionmap.find((action) => { return action.num === lastGame?.myAction.toString() })!.value}
                            width={200}
                            height={200} />
                    </div>

                    <div className='md:block hidden' />

                    <div className='text-xl lg:text-4xl text-selected text-center -mt-8 md:mt-0 md:hidden'>
                        <Name address={props.address} sliced={true} />
                        {/* {pretty(props.address)} */}
                    </div>
                    <div className='-rotate-45 scale-75 md:scale-100 -scale-y-75 md:-scale-y-100 '>
                        <Image
                            className='rotate-180 '
                            src={actionmap.find((action) => { return action.num === lastGame?.opponentAction.toString() })!.image}
                            alt={actionmap.find((action) => { return action.num === lastGame?.myAction.toString() })!.value}
                            width={200}
                            height={200} />
                    </div>
                    <div className='text-xl lg:text-4xl text-red text-center md:hidden'>
                        <Name address={lastGame ? lastGame.opponent : zeroAddress} sliced={true} />
                        {/* {pretty(lastGame ? lastGame.opponent : zeroAddress)} */}
                    </div>


                    <div className='text-xl xl:text-4xl text-selected text-center hidden md:block'>
                        <Name address={props.address} sliced={true} />
                        {/* {pretty(props.address)} */}
                    </div>
                    <div className='md:block hidden' />
                    <div className='text-xl xl:text-4xl text-red text-center hidden md:block' >
                        <Name address={lastGame ? lastGame.opponent : zeroAddress} sliced={true} />
                        {/* {pretty(lastGame ? lastGame.opponent : zeroAddress)} */}

                    </div>
                    <div className='md:block hidden' />
                    <div className='md:block hidden' />

                </div>
            </section>
        )
    }

    function getView() {
        return inQueue ? inQueueView() : ((props.selected === 0 && lastGame && lastGame.opponent != zeroAddress) ? lastGameView() : unplayedView());


        // return inQueueView();
        // return unplayedView();
    }


    return (
        <section className='relative' >
            {getView()}


        </section >
    );
}

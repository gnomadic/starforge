'use client';

import GameCard from '@/components/game/GameCard';
import CreateCard from '@/components/base/CreateCard';
import { useReadGameFactoryGetGameCount, useReadGameFactoryGetGames } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import { useConfig } from 'wagmi'


export default function ExploreGames() {
    const { deploy } = useDeployment();
    const { data: currentGames, error: curError } = useReadGameFactoryGetGames({ address: deploy.gameFactory, args: [0] })
    const { data: gameCount, error: countError } = useReadGameFactoryGetGameCount({ address: deploy.gameFactory })

    const { chain } = useAccount()
    const config = useConfig()

    useEffect(() => {
        if (curError) {
            toast.error(curError.message);
        }
        if (countError) {
            toast.error(countError.message);
        }
    }, [curError, countError]);

    return (
        <section className='px-8 py-20 md:px-16'>

            <div className=" border border-white border-dashed">

                <div className='p-4 text-2xl'>
                    Explore games
                </div>
                {/* <div className='text-center text-2xl md:text-5xl border-b-2 border-t-2 border-white py-2 uppercase'>
                {deploy.chain}{'/'}GAMES{'/'}{gameCount ? gameCount.toString() : "..."}
            </div> */}

                {/* <div>{JSON.stringify(error)}</div> */}
                {/* <div>chain: {JSON.stringify(chain)}</div> */}
                {/* <div>config: {JSON.stringify(config)}</div> */}



                <div className='pb-24 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-8'>
                    <CreateCard url='/create' />
                    {Array.from({ length: currentGames ? currentGames.length : 0 }).map((object, i) => {
                        if (currentGames![i].game !== '0x0000000000000000000000000000000000000000') {
                            return (
                                <GameCard
                                    key={i}
                                    index={i}
                                    deployment={deploy}
                                    gm={currentGames![i].gm}
                                    metadata={currentGames![i].metadata}
                                    address={currentGames![i].game}
                                />


                            );
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

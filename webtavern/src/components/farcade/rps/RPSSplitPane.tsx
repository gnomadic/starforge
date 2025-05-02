'use client';

import useDeployment from "@/hooks/useDeployment";
import { useAccount } from 'wagmi';
import { zeroAddress } from 'viem';
import { useState } from 'react';

import RPSAction from '@/components/farcade/rps/RPSAction';
import RPSResult from '@/components/farcade/rps/RPSResult';


export default function RPSSplitPane() {
    const { deploy } = useDeployment();
    const { address } = useAccount();

    let actionmap = [
        { num: "0", value: 'choose', image: '/images/rockpaperscissors/rock.png' },
        { num: "1", value: 'rock', image: '/images/rockpaperscissors/rock.png' },
        { num: "2", value: 'paper', image: '/images/rockpaperscissors/paper.png' },
        { num: "3", value: 'scissors', image: '/images/rockpaperscissors/scissors.png' },
    ]

    const [selected, setSelected] = useState<number>(0);


    return (
        <section >
            <div className='flex flex-col gap-8 px-8 py-20 md:px-16 md:flex-row'>
                <div className='border border-white border-dashed basis-1/3'>
                    <RPSAction
                        deploy={deploy}
                        address={address ? address : zeroAddress}
                        actionmap={actionmap}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
                <div className='border border-white border-dashed basis-2/3'>
                    <RPSResult
                        deploy={deploy}
                        address={address ? address : zeroAddress}
                        actionmap={actionmap}
                        selected={selected}

                    />
                </div>

            </div>

        </section >
    );
}

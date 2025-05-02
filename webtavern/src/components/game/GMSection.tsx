"use client"

import { Address } from 'viem';
import { useReadGameFlows, useReadGameGetSummary } from '@/generated';
import { useMetadata } from '@/hooks/useMetadata';
import { GameMetadata, GameSummary } from '@/domain/Domain';
import useDeployment from '@/hooks/useDeployment';

import ModuleFunctionCard from '../component/ModuleFunctionCard';


type StepThreeProps = {
    gameAddress: Address
    summary: GameSummary
}

export default function GMSection(props: StepThreeProps) {

    // const { data: summary } = useReadGameGetSummary({ address: props.gameAddress });
    // const { data: flows } = useReadGameFlows({ address: props.gameAddress, args: ["playRPS", BigInt(0)] });
    // const { data } = useMetadata<GameMetadata>(summary?.metadata);
    // const { deploy } = useDeployment();


    return (
        <section id='connect' className=' font-outfit'>
            <div className='p-4 text-2xl'>
                Customize
            </div>
            <section className="mx-4 md:mx-12 py-8">
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-8 '>

                    {Array.from({ length: props.summary.components.length as number }).map((object, i) => {
                        return (
                            <ModuleFunctionCard
                                key={i}
                                index={i}
                                address={props.summary.componentSummaries[i].component!}
                                metadata={props.summary.componentSummaries[i].metadata!}
                                gameAddress={props.gameAddress}
                            />
                        );
                    })}
                </div>
            </section>
        </section>

    );
}

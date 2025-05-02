"use client"
import { Address } from 'viem';
import { useMetadata } from '@/hooks/useMetadata';
import { GameMetadata, GameSummary } from '@/domain/Domain';
import { censor, pretty } from '@/domain/utils';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import useDeployment from '@/hooks/useDeployment';
import { Name } from '@coinbase/onchainkit/identity';


type StepThreeProps = {
    gameAddress: Address
    summary: GameSummary
}

export default function GameInfo(props: StepThreeProps) {


    const { data } = useMetadata<GameMetadata>(props.summary?.metadata);
    const { deploy } = useDeployment();


    return (
        <section id='connect' className=' font-outfit'>
            <div className='p-4 text-2xl'>
                Info
            </div>
            <section className='mx-4 md:mx-12 py-8'>
                <div className='text-lg'>
                    Play at
                </div>
                <div className='p-2.5 bg-darkgrey text-sm'>
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={data?.gameUrl} >
                        {data ? censor(data.gameUrl) : "loading"}
                        <span>
                            <ArrowUpRightIcon
                                className="w-4 h-4 mb-1"
                                style={{ display: "inline" }} />
                        </span>
                    </a>
                </div>

                <div className='text-lg'>
                    Deployed at
                </div>
                <div className='p-2.5 bg-darkgrey text-sm'>
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={deploy.scan + props.gameAddress} >
                        {pretty(props.gameAddress)}
                        <span>
                            <ArrowUpRightIcon
                                className="w-4 h-4 mb-1"
                                style={{ display: "inline" }} />
                        </span>
                    </a>
                </div>
                <div className='text-lg'>
                    Game Manager (GM)
                </div>
                <div className='p-2.5 bg-darkgrey text-sm'>
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={deploy.scan + props.summary.gm} >
                        <span><Name address={props.summary.gm}/></span>
                        <span>
                            <ArrowUpRightIcon
                                className="w-4 h-4 mb-1"
                                style={{ display: "inline" }} />
                        </span>
                    </a>
                </div>



            </section>
            {/* <section>
                <SmallTitle title={'components/' + summary?.components.length} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24'>
                    {Array.from({ length: summary?.components.length as number }).map((object, i) => {
                        return (
                            <ModuleCard
                                key={i}
                                index={i}
                                address={summary?.componentSummaries[i].component!}
                                metadata={summary?.componentSummaries[i].metadata!}
                            />
                        );
                    })}
                </div>
            </section> */}
            {/* <section>
                <SmallTitle title={'data/' + summary?.availableData.length} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24'>
                    {Array.from({ length: summary?.availableData.length as number }).map((object, i) => {
                        return (
                            <div key={i} className="pt-8 pb-8">
                                <div>{summary?.availableData[i].name}</div>
                            </div>

                        );
                    })}
                </div>
            </section> */}
            {/* <section>
                <SmallTitle title={'flows/' + summary?.flows.length} />
                <ul className='py-12 md:py-24'>
                    {Array.from({ length: summary?.flows.length as number }).map((object, i) => {
                        return (
                            <div key={i} className='justify-center pt-12'>
                                <div className='pt-5 pl-5 text-lg border-b-2 border-white'>
                                    {i + 1}{'/'}{summary!.flows[i].name}{' '}
                                </div>

                                <div className="mx-12 py-8">
                                    <div className="border-b-2 border-white text-xs ">
                                        component function
                                    </div>

                                    {Array.from({ length: summary!.flows[i].values.length as number }).map((object, j) => {
                                        return (
                                            <p key={j}>
                                                {j + 1}/
                                                <span>
                                                    <a target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={deploy.scan + summary!.flows[i].values[j].value} >
                                                        {pretty(summary!.flows[i].values[j].value)}
                                                        <span>
                                                            <ArrowUpRightIcon
                                                                className="w-4 h-4 mb-1"
                                                                style={{ display: "inline" }} />
                                                        </span>
                                                    </a>
                                                </span>
                                                /{summary!.flows[i].values[j].name} {''}
                                            </p>
                                        );
                                    })}
                                </div>

                            </div>
                        );
                    })}
                </ul>
            </section> */}
        </section>

    );
}

"use client"

import { useReadGameGetSummary } from "@/generated";
import { Address } from "viem";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GameInfo from "./GameInfo";
import GMSection from "./GMSection";
import GameComponents from "./GameComponents";
import GameFlows from "./GameFlows";

type StatsProps = {
    gameAddress: Address
    chainId: string
}

export default function GameTabs(props: StatsProps) {

    const { data: summary } = useReadGameGetSummary({ address: props.gameAddress });

    return (
        <section id='connect' className='relative items-center '>
            <Tabs defaultIndex={0} className="pt-12">
                <TabList>
                    <Tab default={true} >Info</Tab>
                    <Tab>Customize</Tab>
                    <Tab>Components</Tab>
                    <Tab>Flows</Tab>

                </TabList>

                <TabPanel>
                    {summary ?
                        <GameInfo
                            gameAddress={props.gameAddress}
                            summary={summary} />
                        :
                        <div className="py-12 md:py-24 mx-4 md:mx-12 font-outfit text-lg">
                            loading...
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {summary ?
                        <GMSection
                            gameAddress={props.gameAddress}
                            summary={summary} />
                        :
                        <div className="py-12 md:py-24 mx-4 md:mx-12 font-outfit text-lg">
                            loading...
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {summary ?
                        <GameComponents
                            gameAddress={props.gameAddress}
                            summary={summary} />
                        :
                        <div className="py-12 md:py-24 mx-4 md:mx-12 font-outfit text-lg">
                            loading...
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {summary ?
                        <GameFlows
                            gameAddress={props.gameAddress}
                            summary={summary} 
                            chainid={props.chainId}/>
                        :
                        <div className="py-12 md:py-24 mx-4 md:mx-12 font-outfit text-lg">
                            loading...
                        </div>
                    }
                </TabPanel>
            </Tabs>
        </section>
    );
}

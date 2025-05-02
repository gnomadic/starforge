"use client"

import { ComponentMetadata } from "@/domain/Domain";
import { censor } from "@/domain/utils";
import { useReadIComponentGetSummary } from "@/generated";
import useDeployment from "@/hooks/useDeployment";
import { useMetadata } from "@/hooks/useMetadata";
import { Address } from "viem";
import ComponentFunctions from "./ComponentFunctions";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ComponentStats from "./ComponentStats";


type StatsProps = {
    moduleAddress: Address
}

export default function ComponentTabs(props: StatsProps) {

    const { deploy } = useDeployment();
    const { data: summary } = useReadIComponentGetSummary({ address: props.moduleAddress })
    const { data } = useMetadata<ComponentMetadata>(summary?.metadata);

    return (
        <section id='connect' className='relative items-center '>
           <Tabs  defaultIndex={0} className="pt-12">
            <TabList>
                <Tab default={true} >Play</Tab>
                <Tab>Customize</Tab>
                <Tab>View</Tab>
            </TabList>

            <TabPanel>
                <ComponentStats
                moduleAddress={props.moduleAddress}
                functions={data?.gameFunctions ?? []}
                displayName={"Play"}
                 />
            </TabPanel>
            <TabPanel>
                <ComponentStats
                moduleAddress={props.moduleAddress}
                functions={data?.configFunctions ?? []}
                displayName={"Customize"}
                 />
            </TabPanel>
            <TabPanel>
                <ComponentStats
                moduleAddress={props.moduleAddress}
                functions={data?.readFunctions ?? []}
                displayName={"View"}
                 />
            </TabPanel>
        </Tabs>
        </section>
    );
}

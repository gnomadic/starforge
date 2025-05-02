"use client"

import { ComponentMetadata, ComponentMetadataFunction } from "@/domain/Domain";
import { censor } from "@/domain/utils";
import { useReadIComponentGetSummary } from "@/generated";
import useDeployment from "@/hooks/useDeployment";
import { useMetadata } from "@/hooks/useMetadata";
import { Address } from "viem";
import ComponentFunctions from "./ComponentFunctions";

type StatsProps = {
    moduleAddress: Address
    functions: ComponentMetadataFunction[]
    displayName: string;
}

export default function ComponentStats(props: StatsProps) {

    const { deploy } = useDeployment();
    const { data: summary } = useReadIComponentGetSummary({ address: props.moduleAddress })
    const { data } = useMetadata<ComponentMetadata>(summary?.metadata);

    return (
        <section id='connect' className='relative items-center pt-24 pb-12'>
        <div className='p-4 text-2xl'>
                {props.displayName} Functions
            </div>
            <div className="px-6 py-2 text-lightgrey">
                This component has {props.functions.length} functions.  Add this component to your game to use them.
            </div>
            {/* {summary && data ? */}
                {/* <div> */}
                    {/* <div className="text-3xl uppercase">
                        {censor(data.name)}/functions/{data.gameFunctions?.length}
                    </div> */}
                    <ComponentFunctions functions={props.functions} />
                    {/* <div className="text-3xl uppercase pt-20">
                        {censor(data.name)}/config/{data.configFunctions?.length}
                    </div> */}
                    {/* <ComponentFunctions functions={data.configFunctions} /> */}
                {/* </div> */}
                {/* :
                <></>} */}
        </section>
    );
}

"use client";

import React, { useEffect, useState } from 'react';
import { NFTGrid } from '@/components/codex/NFTGrid';
import { useReadJobEntityGetActiveJob, useReadPlanetVAlphaTokensOfOwner, useWriteJobSystemActivateJob, useWriteJobSystemFinishJob } from "@/generated";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { useDeployment } from "@/hooks/useDeployment";
import { Hex, zeroAddress } from 'viem';
// import PlanetCard from '@/components/codex/PlanetCard';

import { Shell, Droplet, Sun, ArrowDown } from 'lucide-react';
import { useSupplies } from '@/components/SupplyContext';
import { useReadJobEntityGetAvailableJobs, useReadJobSystemGetAvailableJobs, useReadScenarioGetEntity } from '@/generated';
import { useScenarios } from '@/components/ScenarioContext';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible";
import JobCard from '@/components/job/JobCard';
import { bigIntReplacer } from '@/domain/utils';
import { b32, str, safeb32 } from '@/lib/utils/utils';


interface JobDeco {
    icon: React.ReactNode;
    color: string;
    resourceType: Hex;
    displayName: string;
}

const DECOS: JobDeco[] = [
    {
        icon: <Shell className="h-5 w-5 text-red-400" />,
        resourceType: safeb32('Bioflux'),
        color: 'bg-red-950/60 hover:bg-red-900/60',
        displayName: 'Organic'
    }, {
        icon: <Droplet className="h-5 w-5 text-blue-400" />,
        resourceType: safeb32('Hydrocite'),
        color: 'bg-blue-950/60 hover:bg-blue-900/60',
        displayName: 'Lithic'

    }, {
        icon: <Sun className="h-5 w-5 text-yellow-400" />,
        resourceType: safeb32('Solaris Dust'),
        color: 'bg-yellow-950/60 hover:bg-yellow-900/60',
        displayName: 'Solaric'

    }
]

function getDecoByResourceType(resourceType: string): JobDeco {
    const deco = DECOS.find(deco => deco.resourceType === resourceType);
    if (!deco) {
        throw new Error(`No deco found for resource type: ${resourceType}`);
    }
    return deco;
}

interface JobBoardProps {

}




export default function JobBoard({ }: JobBoardProps) {
    const { deploy } = useDeployment();
    const { scenarios } = useScenarios();
    const { supplies } = useSupplies();
    const { address } = useAccount();

    const [selectedTokenId, setSelectedTokenId] = useState<bigint>(BigInt(0));
    const { data: held } = useReadPlanetVAlphaTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.Planet })

    const { data: whichEntity, isLoading, error } = useReadScenarioGetEntity({ args: [deploy.JobSystem], address: scenarios ? scenarios[0] : "0x0" })


    const { data: activateJobHash, error: writeError, writeContract: activateJob } = useWriteJobSystemActivateJob();
    const { data: deactivateJobHash, error: deactivateError, writeContract: finishJob } = useWriteJobSystemFinishJob();
    const { isLoading: activateJobLoading, isSuccess: activateJobSucesss, data: activateJobData } = useWaitForTransactionReceipt({ hash: activateJobHash })


    const { data: allJobs } = useReadJobEntityGetAvailableJobs({
        args: [],
        address: whichEntity
    })

    const { data: availableJobs } = useReadJobSystemGetAvailableJobs({
        args: [scenarios ? scenarios[0] : "0x0", selectedTokenId],
        address: deploy.JobSystem
    })

    const { data: activeJob, refetch: refetchActiveJob } = useReadJobEntityGetActiveJob({
        args: [selectedTokenId],
        address: whichEntity,

    })


    const [enabled, setEnabled] = React.useState<boolean[]>([]);

    useEffect(() => {
        if (allJobs) {
            const enabledJobs: boolean[] = new Array(allJobs.length).fill(true);
            setEnabled(enabledJobs);
        }
    }, [allJobs]);


    const activateNewJob = async (jobId: Hex) => {

        activateJob({ address: deploy.JobSystem, args: [scenarios[0], jobId, selectedTokenId] });
    }

    const deactivateJob = async (jobId: Hex) => {
        finishJob({ address: deploy.JobSystem, args: [scenarios[0], selectedTokenId] });

    }


    return (
        <section>
            <NFTGrid
                heldTokenIds={held || []}
                setSelectedTokenId={setSelectedTokenId}
                selectedTokenId={selectedTokenId}
            />

            {held && held.length > 0 ? (
                <Accordion type="multiple" className="space-y-4">
                    {supplies.map((supply, index) => {
                        return <AccordionItem
                            key={index}
                            value={supply.type}
                            className="border border-white/10 rounded-lg overflow-hidden glass"
                        >
                            <div className="flex flex-row items-center justify-between p-3"
                                onClick={() => {
                                    const updatedEnabled = [...enabled];
                                    updatedEnabled[index] = !updatedEnabled[index];
                                    setEnabled(updatedEnabled);
                                }}>
                                <div className="space-y-0.5">
                                    <div className="flex items-center">
                                        {supply.icon}
                                        <p className='pl-2 text-lg font-semibold text-white'>
                                            {str(supply.type)}
                                        </p>
                                    </div>
                                    <p className="text-sm">
                                        {supply.description}
                                    </p>
                                </div>
                                <ArrowDown
                                    className="w-5 h-5 text-blue-400 mr-5"
                                />
                            </div>

                            <Collapsible open={enabled[index]}>
                                <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                                        {allJobs?.filter((job) => (job.tokenName === supply.type)).map((job, index) => {
                                            const isActive = false;
                                            return (
                                                <JobCard
                                                    key={job.id}
                                                    job={job}
                                                    activeJobId={activeJob}
                                                    getDecoByResourceType={getDecoByResourceType}
                                                    activate={activateNewJob}
                                                    deactivate={deactivateJob}
                                                />
                                            );
                                        })}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </AccordionItem>

                    })}


                </Accordion>
            ) : (
                <div className="text-muted-foreground">
                    Mint your first planet to see available jobs here.
                </div>
            )}


        </section>
    );

}

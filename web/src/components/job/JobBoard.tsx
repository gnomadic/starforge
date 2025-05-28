"use client";

import React, { useEffect, useState } from 'react';
import { NFTGrid } from '@/components/codex/NFTGrid';
import { useReadJobEntityGetActiveJob, useReadPlanetVAlphaTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import { useDeployment } from "@/hooks/useDeployment";
import { Hex, zeroAddress } from 'viem';
// import PlanetCard from '@/components/codex/PlanetCard';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { useSupplies } from '@/components/supplies/SupplyContext';
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
import { str } from '@/lib/utils/utils';


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
                                        {/* <div>
                                            error:{JSON.stringify(activateError, bigIntReplacer)}
                                        </div> */}
                                        {allJobs?.filter((job) => (job.tokenName === supply.type)).map((job, index) => {
                                            return (
                                                <JobCard
                                                    selectedTokenId={selectedTokenId}
                                                    key={job.id}
                                                    job={job}
                                                    activeJobId={activeJob}
                                                    refetchActiveJob={refetchActiveJob}
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

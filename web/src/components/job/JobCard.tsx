"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Hex } from 'viem';
import { longStr, shortHandError, str } from '@/lib/utils/utils';
import TXButton from '../global/TXButton';
import { useWriteJobSystemActivateJob, useWriteJobSystemFinishJob } from "@/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import JobProgress from './JobProgress';
import { useDeployment } from '@/hooks/useDeployment';
import { useScenarios } from '../ScenarioContext';
import { getDecoByResourceType } from '../supplies/SupplyContext';

interface JobCardProps {
    selectedTokenId: bigint;
    activeJobId: readonly [number, bigint] | undefined;
    job: {
        id: number;
        title: Hex;
        description: Hex;
        tokenName: Hex;
        amountPerCycle: bigint;
        cycleDuration: number;
    };
    refetchActiveJob: () => void;
    // state: "idle" | "loading" | "success" | "error";
    // error: string | null;
}




export default function JobCard({ selectedTokenId, activeJobId, job, refetchActiveJob }: JobCardProps) {

    const { deploy } = useDeployment();
    const { scenarios } = useScenarios();

    const { data: activateJobHash, error: activateError, writeContract: activateJob } = useWriteJobSystemActivateJob();
    const { isLoading: activateJobLoading, isSuccess: activateJobSucesss, data: activateJobData } = useWaitForTransactionReceipt({ hash: activateJobHash })
    const { data: deactivateJobHash, error: deactivateError, writeContract: finishJob } = useWriteJobSystemFinishJob();
    const { isLoading: deactivateJobLoading, isSuccess: deactivateJobSucesss, data: deactivateJobData } = useWaitForTransactionReceipt({ hash: deactivateJobHash })

    const isActive = activeJobId?.[0] === job.id;
    const startedAt = activeJobId?.[1] || BigInt(0);

    const state = isActive ? "idle" : activateJobLoading ? "loading" : deactivateJobLoading ? "loading" : activateJobSucesss || deactivateJobSucesss ? "success" : activateError || deactivateError ? "error" : "idle";


    const onClick = async (jobId: number) => {
        // setSelectedJobId(jobId);
        if (activeJobId?.[0] === jobId) {
            finishJob({ address: deploy.JobSystem, args: [scenarios[0], selectedTokenId] });
        } else {
            activateJob({ address: deploy.JobSystem, args: [scenarios[0], jobId, selectedTokenId] });
        }
    }

    useEffect(() => {
        if (activateJobSucesss || deactivateJobSucesss) {
            refetchActiveJob();
        }
    }, [activateJobSucesss, deactivateJobSucesss, refetchActiveJob]);

    const getError = (): string | null => activateError ? shortHandError(activateError)
        : deactivateError ? shortHandError(deactivateError)
            : null;

    return (
        <Card
            key={job.id}
            className={`border transition-all ${isActive ? 'border-primary ring-2 ring-primary/20' : 'border-border/40'}`}
        >
            <CardHeader className={`${getDecoByResourceType(job.tokenName).color} rounded-t-lg`}>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-lg font-semibold text-white">{str(job.title)}</CardTitle>
                        <CardDescription className="text-white/80">{str(job.tokenName)}</CardDescription>
                        {/* <CardDescription className="text-white/80">{state}</CardDescription> */}
                    </div>
                    <div className="p-2 rounded-full bg-black/20">
                        {getDecoByResourceType(job.tokenName).icon}
                    </div>
                </div>

            </CardHeader>
            <CardContent className="pt-6 flex flex-col gap-4 relative ">
                <p className="text-sm text-muted-foreground min-h-28">{longStr(job.description)}</p>

                <div className=" justify-between items-center border-t border-border/40 pt-4">
                    {isActive && (
                        <JobProgress
                            activeJob={activeJobId}
                            tokenName={job.tokenName}
                            amountPerCycle={job.amountPerCycle}
                            cycleDuration={job.cycleDuration}
                            isActive={isActive}
                        />
                    )}
                    {!isActive && (
                        <div className="text-sm">
                            <div className="text-muted-foreground">Earn</div>
                            <div className="font-semibold">+{Number(job.amountPerCycle) / 1e18} per {job.cycleDuration} seconds</div>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className='pb-2'>
                <div className=' w-full mx-4'>
                    <TXButton
                        callToAction={isActive ? "Deactivate" : "Activate"}
                        onClick={() => { onClick(job.id) }}
                        state={state}
                        error={getError()}
                    />
                </div>
            </CardFooter>
        </Card>
    );
}

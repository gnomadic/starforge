"use client";

import React, { useEffect, useState } from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSupplies } from '@/components/supplies/SupplyContext';
import { bigIntReplacer } from '@/domain/utils';
import { Hex } from 'viem';
import { longStr, str } from '@/lib/utils/utils';
import TXButton, { TestTXButton } from '../global/TXButton';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Progress } from '../ui/progress';

interface JobCardProps {
    activeJobId: readonly [number, bigint] | undefined;
    getDecoByResourceType: (resourceType: string) => {
        icon: React.ReactNode;
        color: string;
    }
    job: {
        id: number;
        title: Hex;
        description: Hex;
        tokenName: Hex;
        amountPerCycle: bigint;
        cycleDuration: number;
    };
    activate: (jobId: number) => void;
    deactivate: (jobId: number) => void;
    state: "idle" | "loading" | "success" | "error";
    onClick: () => void;
    error: string | null;
}




export default function JobCard({ activeJobId, getDecoByResourceType, job, activate, deactivate, state, onClick, error }: JobCardProps) {

    const isActive = activeJobId?.[0] === job.id;

    // const [xState, setXState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [progress, setProgress] = useState(0)
    const [cycles, setCycles] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {

                if (prevProgress >= 100) {
                    setCycles((prev) => prev + 1)
                    return 0
                }
                return prevProgress + 1
            })
        }, 100) // Update every 100ms to complete in 10 seconds (100 * 100ms = 10000ms = 10s)

        return () => clearInterval(interval)
    }, [])


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
                        <CardDescription className="text-white/80">{state}</CardDescription>
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
                       <div className='pt-4'>
                        <Progress value={progress} className="h-2" aria-label="Progress timer" />
                    </div>
                    )}
                    {!isActive && (
                                    <div className="text-sm">
                            <div className="text-muted-foreground">Earn</div>
                            <div className="font-semibold">+{Number(job.amountPerCycle) / 1e18} per {job.cycleDuration} seconds</div>
                        </div>
                    )}

                 


                </div>
                {/* <div className='py-4'> */}
                {/* <TXButton
                    callToAction={isActive ? "Deactivate" : "Activate"}
                    onClick={onClick}
                    state={state}
                    error={error}
                /> */}
                {/* <CardFooter className='bg-white/10'> */}
                {/* <div className=' w-full'>
                     <TXButton
                    callToAction={isActive ? "Deactivate" : "Activate"}
                    onClick={onClick}
                    state={state}
                    error={error}
                />
                </div> */}
                {/* </CardFooter> */}
                {/* <TestTXButton  /> */}
                {/* <Button
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => isActive ? deactivate(job.id) : activate(job.id)}
                >
                    {isActive ? "Deactivate" : "Activate"}
                </Button> */}

            </CardContent>

            <CardFooter className='pb-2'>
                <div className=' w-full mx-4'>
                    <TXButton
                        callToAction={isActive ? "Deactivate" : "Activate"}
                        onClick={onClick}
                        state={state}
                        error={error}
                    />
                </div>
            </CardFooter>
        </Card>

    );

}

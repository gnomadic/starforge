"use client";

import React, { useEffect, useState } from 'react';
import { Hex } from 'viem';
import { str } from '@/lib/utils/utils';
import { Progress } from '../ui/progress';

interface JobCardProps {
    activeJob: readonly [number, bigint] | undefined;
    tokenName: Hex;
    amountPerCycle: bigint;
    cycleDuration: number;
    isActive: boolean;
}


export default function JobProgress({ activeJob, tokenName, amountPerCycle, cycleDuration, isActive }: JobCardProps) {

    const startedAt = activeJob?.[1] || BigInt(0);

    const [progress, setProgress] = useState(0)
    const [cycles, setCycles] = useState(0)

    useEffect(() => {
        if (!isActive) {
            console.log("not active, resetting progress and cycles");
            setProgress(0);
            setCycles(0);
            return;
        }

        const cycleDurationMs = cycleDuration * 1000;
        const now = Date.now();
        const startedAtMs = Number(startedAt) * 1000;
        const elapsedMs = Math.max(0, now - startedAtMs);

        // Calculate how many cycles have already passed
        const completedCycles = Math.floor(elapsedMs / cycleDurationMs);
        setCycles(completedCycles);

        // Calculate progress within the current cycle
        const progressInCurrentCycle = ((elapsedMs % cycleDurationMs) / cycleDurationMs) * 100;
        setProgress(progressInCurrentCycle);

        const interval = setInterval(() => {
            const now = Date.now();
            const elapsedMs = Math.max(0, now - startedAtMs);
            const completedCycles = Math.floor(elapsedMs / cycleDurationMs);
            setCycles(completedCycles);

            const progressInCurrentCycle = ((elapsedMs % cycleDurationMs) / cycleDurationMs) * 100;
            setProgress(progressInCurrentCycle);
        }, 100);

        return () => clearInterval(interval);
    }, [isActive, startedAt, cycleDuration]);

    return (
        <div className=''>
            {/* <div>
                {activeJob} : {tokenName} : {amountPerCycle} : {cycleDuration} : {isActive}
            </div> */}
            <div className="text-muted-foreground pb-2">Earning {(cycles * (Number(amountPerCycle) / 1e18)).toFixed(4)} {str(tokenName)}</div>
            <Progress value={progress} className="h-2" aria-label="Progress timer" />
        </div>
    );
}

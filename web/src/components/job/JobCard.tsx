"use client";

import React, { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSupplies } from '@/components/supplies/SupplyContext';
import { bigIntReplacer } from '@/domain/utils';
import { Hex } from 'viem';
import { longStr, str } from '@/lib/utils/utils';
import TXButton from '../global/TXButton';


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
}




export default function JobCard({ activeJobId, getDecoByResourceType, job, activate, deactivate, state }: JobCardProps) {

    const isActive = activeJobId?.[0] === job.id;

    const [xState, setXState] = useState<"idle" | "loading" | "success" | "error">("idle");

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
                    </div>
                    <div className="p-2 rounded-full bg-black/20">
                        {getDecoByResourceType(job.tokenName).icon}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{longStr(job.description)}</p>

                <div className="flex justify-between items-center border-t border-border/40 pt-4">
                    <div className="text-sm">
                        <div className="text-muted-foreground">Earn</div>
                        <div className="font-semibold">+{Number(job.amountPerCycle) / 1e18} per {job.cycleDuration}</div>
                    </div>
                    {/* <TXButton
                        callToAction={isActive ? "Deactivate" : "Activate"}
                    />
                    <Button
                        variant={isActive ? "default" : "outline"}
                        size="sm"
                        onClick={() => isActive ? deactivate(job.id) : activate(job.id)}
                    >
                        {isActive ? "Deactivate" : "Activate"}
                    </Button> */}
                </div>
                <TXButton
                    callToAction={isActive ? "Deactivate" : "Activate"}
                    // onClick={() => isActive ? deactivate(job.id) : activate(job.id)}
                    onClick={() => {
                        if (xState === "idle") {
                            setXState("loading");
                        } else if (xState === "loading") {
                            setXState("success");
                        } else if (xState === "success") {
                            setXState("error");
                        } else if (xState === "error") {
                            setXState("idle");
                        }
                    }}
                    state={xState}

                />
                {/* <Button
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => isActive ? deactivate(job.id) : activate(job.id)}
                >
                    {isActive ? "Deactivate" : "Activate"}
                </Button> */}
            </CardContent>
        </Card>

    );

}

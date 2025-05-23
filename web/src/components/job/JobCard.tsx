"use client";

import React, { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSupplies } from '@/components/supplies/SupplyContext';
import { bigIntReplacer } from '@/domain/utils';
import { Hex } from 'viem';
import { longStr, str } from '@/lib/utils/utils';


interface JobCardProps {
    activeJobId: readonly [string, bigint] | undefined;
    getDecoByResourceType: (resourceType: string) => {
        icon: React.ReactNode;
        color: string;
    }
    job: {
        id: Hex;
        title: Hex;
        description: Hex;
        tokenName: Hex;
        amountPerHour: bigint;
    };
    activate: (jobId: Hex) => void;
    deactivate: (jobId: Hex) => void;
}




export default function JobCard({ activeJobId, getDecoByResourceType, job, activate, deactivate}: JobCardProps) {

    const isActive = activeJobId?.[0] === job.id;

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
                        <div className="font-semibold">+{Number(job.amountPerHour) / 1e18} per hour</div>
                    </div>
                    <Button
                        variant={isActive ? "default" : "outline"}
                        size="sm"
                        onClick={() => isActive ? deactivate(job.id) : activate(job.id)}
                    >
                        {isActive ? "Deactivate" : "Activate"}
                    </Button>
                </div>
            </CardContent>
        </Card>

    );

}

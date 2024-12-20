"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { CalendarDays, MapPin, Users } from "lucide-react";
import { bigIntReplacer } from '@/domain/utils';
import InfoCard from '@/components/InfoCard';
import { Button } from '@/components/ui/button';
import { GameState, StationModifier } from '@/domain/types';
import StatsCard from './StatsCard';
import { planetStats } from '@/domain/TestingData';
import Resources from '../resources/ResourceTab';

type StatusTabProps = {
  planetName: string;
  state: readonly [bigint, bigint, bigint, bigint] | undefined;
  simulatedState: GameState;
}

export default function StatusTab({ state, simulatedState, planetName }: StatusTabProps) {



  return (

    <Card>
      <CardHeader>
        <CardTitle>{planetName} Status</CardTitle>
        <CardDescription className="flex justify-between items-center">
          <div>
            Welcome back.  Information is <span className="italic text-red">simulated</span> and must be synced with your client regularly.
          </div>
          <Button>Sync Data</Button>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 pt-8">
        <StatsCard stats={planetStats} />
      </CardContent>
      <CardFooter>
        {/* <CardDescription>
          Information is <span className="italic text-red">simulated</span>.
        </CardDescription>
        <CardDescription>
          <Button>Sync Data</Button>
        </CardDescription> */}
      </CardFooter>
    </Card>
  );
}
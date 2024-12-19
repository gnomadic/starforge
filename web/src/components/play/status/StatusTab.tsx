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
import Resources from './Resources';

type StatusTabProps = {
  planetName: string;
  state: readonly [bigint, bigint, bigint, bigint] | undefined;
  simulatedState: GameState;
}

export default function StatusTab({ state, simulatedState, planetName }: StatusTabProps) {



  return (

    <Card>
      <CardHeader>
        
        <CardTitle>{planetName}</CardTitle>
        <CardDescription><Button>Sync Data</Button></CardDescription>
        
      </CardHeader>
      <CardContent className="space-y-2">

        {/* <div>{JSON.stringify(state, bigIntReplacer)}</div> */}
        <StatsCard stats={planetStats} />

        <div className="grid grid-cols-2 gap-2">
          {/* <InfoCard title="Last Sync" value={state ? state[0] : "--"} simulatedValue={simulatedState.time} /> */}
          {/* <InfoCard title="Population" value={simulatedState.gold} simulatedValue={simulatedState.pendingGold} /> */}
          {/* <InfoCard title="Packet Rate" value={state ? state[1] : "--"} simulatedValue={2} /> */}
          {/* <InfoCard title="Processing Rate" value={state ? state[2] : "--"} simulatedValue={10} /> */}


        </div>

        <Resources />

      </CardContent>
      <CardFooter>
        <CardDescription>
          Information is <span className="italic text-red">simulated</span>.
        </CardDescription>
        <CardDescription>
          <Button>Sync Data</Button>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
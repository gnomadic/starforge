"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { CalendarDays, MapPin, Users } from "lucide-react";
import { bigIntReplacer } from '@/domain/utils';
import InfoCard from '@/components/InfoCard';
import { Button } from '@/components/ui/button';
import { GameState, StationModifier } from '@/domain/types';
import { StationCard } from '@/components/play/StationCard';

type InvestmentTabProps = {
    
  state: readonly [bigint, bigint, bigint, bigint] | undefined;
  setStation: (index: number, modifier: StationModifier) => void;

  simulatedState: GameState;
}

export default function InvestmentTabxx({ state,setStation, simulatedState }: InvestmentTabProps) {



    return (

      <Card>
      <CardHeader>
        <CardTitle>Investments</CardTitle>
        <CardDescription>
          You're always on the move so your connection to the your lab is slow.  You can <span className="italic text-red">simulate</span>  changes, but you have to sync or they won't happen.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-1">
          {simulatedState.stations?.map((station, index) => {
            return <StationCard
              key={index}
              index={index}
              station={station}
              onStationClick={(mod) => { setStation(index, mod) }} />
          })}
        </div>
      </CardContent>
      <CardFooter>
        <Button>Sync Commands</Button>
      </CardFooter>
    </Card>
    );
}
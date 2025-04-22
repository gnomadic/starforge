"use client";

import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { cn } from '@/lib/utils';
import { ArrowUpCircle, LockIcon, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeployment } from '@/hooks/useDeployment';
import { useReadPlanetStatsEntityGetStats, useReadScenarioGetEntity } from '@/generated';
import MintPreview from '../mint/MintPreview';
import PlanetStats from './PlanetStats';
import { RarityBadge } from './RarityBadge';
import { NFT } from '@/domain/types';
import { useScenarios } from '../ScenarioContext';
import { bigIntReplacer } from '@/domain/utils';

interface PlanetCardProps {
  selectedTokenId: bigint;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ selectedTokenId }) => {

  const { deploy } = useDeployment()

  // const { data: stats } = useReadPlanetStatsSystemGetStats({ args: [selectedTokenId], address: deploy.PlanetStatsSystem })

  const { scenarios } = useScenarios();

  const {data: whichEntity } = useReadScenarioGetEntity({ args: [deploy.PlanetStats], address: "0x75537828f2ce51be7289709686A69CbFDbB714F1" }) 

  const { data: entityData, error, isLoading} = useReadPlanetStatsEntityGetStats({ args: [selectedTokenId], address: "0x3b02ff1e626ed7a8fd6ec5299e2c54e1421b626b" })//whichEntity })// scenarios ? scenarios[0] : "0x0" })

  return (
    <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {/* <span>{stats.name}</span> */}
          <span>Lost Planet #{selectedTokenId.toString()}</span>
          <RarityBadge rarity={entityData?.[0]} />
        </CardTitle>
        <CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <MintPreview
              preview=''
              size={512}
              tokenId={selectedTokenId}
            />
            {/* <h3 className="text-lg font-medium my-2 pt-2">Entropy</h3> */}
            {/* <div className="mt-2 w-full bg-white/10 h-2 rounded-full mx-auto md:mx-2"> */}
              {/* <div */}
                {/* className="bg-red-500 h-2 rounded-full" */}
                {/* // style={{ width: `${stats?.entropy}%` }} */}
              {/* /> */}
              {/* <span className="float-right text-xs text-white/70 pt-2">{stats?.entropy} / 100</span> */}
            {/* </div> */}

          </div>

          <PlanetStats
          stats={entityData}
            // selectedTokenId={selectedTokenId}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanetCard;

"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDeployment } from '@/hooks/useDeployment';
import { useReadStatsEntityGetStatSet, useReadStatsEntityGetStatSetNames, useReadScenarioGetEntity } from '@/generated';
import MintPreview from '../mint/MintPreview';
import PlanetStats from './PlanetStats';
import { RarityBadge } from './RarityBadge';
import { useScenarios } from '../ScenarioContext';
import { bigIntReplacer } from '@/domain/utils';
import { b32 } from '@/lib/utils/utils';

interface PlanetCardProps {
  selectedTokenId: bigint;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ selectedTokenId }) => {

  const { deploy } = useDeployment()

  // const { data: stats } = useReadPlanetStatsSystemGetStats({ args: [selectedTokenId], address: deploy.PlanetStatsSystem })

  const { scenarios } = useScenarios();

  // const { data: whichEntity } = useReadScenarioGetEntity({ args: [deploy.PlanetStats], address: "0x75537828f2ce51be7289709686A69CbFDbB714F1" })
  const { data: whichEntity, error: whichError } = useReadScenarioGetEntity({ args: [deploy.PlanetStats], address: scenarios ? scenarios[0] : "0x0" })

  // const { data: entityData, error, isLoading } = useReadPlanetStatsEntityGetStats({ args: [selectedTokenId], address: "0x3b02ff1e626ed7a8fd6ec5299e2c54e1421b626b" })//whichEntity })// scenarios ? scenarios[0] : "0x0" })
  const { data: statSets } = useReadStatsEntityGetStatSetNames({ args: [], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });
  const { data: rarity } = useReadStatsEntityGetStatSet({ args: [selectedTokenId, b32("RARITY")], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });

  return (
    <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {/* <p>which entity: {whichEntity}</p> */}
          {/* <p>which error: {JSON.stringify(whichError)}</p> */}
          <span>Lost Planet #{selectedTokenId.toString()}</span>
          {/* <p>{JSON.stringify(rarity, bigIntReplacer)}</p> */}
          <RarityBadge rarity={rarity?.[0]} />
        </CardTitle>
        <CardDescription>
          {/* <p>{JSON.stringify(statSets)}</p> */}
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
          {/* <div>

          stats: {JSON.stringify(statSets, bigIntReplacer) }
          </div> */}
          <div>

            {whichEntity && statSets?.map((statSet, index) => (

              <PlanetStats
                key={index}
                // stats={entityData}
                statSetName={statSet}
                selectedTokenId={selectedTokenId}
                whichEntity={whichEntity}
              />
            )
            )}
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default PlanetCard;

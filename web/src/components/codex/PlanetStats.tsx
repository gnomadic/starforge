
import React from 'react';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useDeployment } from '@/hooks/useDeployment';
import { Address } from 'viem';
import { useReadStatsEntityGetStatSet, useReadStatsEntityGetStatSetMaxValues, useReadStatsEntityGetStatSetPointNames } from '@/generated';
import { bigIntReplacer } from '@/domain/utils';
import { b32 } from '@/lib/utils/utils';

interface PlanetStatsProps {
  stats?: readonly [number, number, number, number, number, number, number, number, number, number] | undefined;
  statSetName: string;
  selectedTokenId: bigint;
  whichEntity: Address;
}

const PlanetStats: React.FC<PlanetStatsProps> = ({ stats, statSetName, selectedTokenId, whichEntity }) => {

  const { deploy } = useDeployment()
  const { data: statSetData } = useReadStatsEntityGetStatSet({ args: [selectedTokenId, b32(statSetName)], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });
  const { data: statSetNames } = useReadStatsEntityGetStatSetPointNames({ args: [b32(statSetName)], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });
  const {data: statMaxs} = useReadStatsEntityGetStatSetMaxValues({ args: [b32(statSetName)], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });

  // const { data: stats } = useReadPlanetStatsSystemGetStats({ args: [selectedTokenId], address: deploy.PlanetStatsSystem })



  // const upgrades = useGameStore(state => state.upgrades);
  // const resources = useGameStore(state => state.resources);
  // const purchaseUpgrade = useGameStore(state => state.purchaseUpgrade);

  // const visibleUpgrades = upgrades.filter(upgrade => upgrade.visible);

  // const canAffordUpgrade = (upgradeId: string) => {
  //   const upgrade = upgrades.find(u => u.id === upgradeId);
  //   if (!upgrade) return false;

  //   // Check if we have enough of each resource
  //   for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
  //     const resource = resources.find(r => r.id === resourceId);
  //     if (!resource || resource.amount < cost) {
  //       return false;
  //     }
  //   }

  //   return true;
  // };

  // if (visibleUpgrades.length === 0) {
  //   return null;
  // }

  return (
    <div>
      <h3 className="text-lg font-medium">{statSetName}</h3>
      <Table>
        <TableBody>
          {statSetData && statSetNames && statMaxs && statSetData.map((statSet, index) => (
            <TableRow key={index}>
              <TableCell className="text-white/70">{statSetNames[index]}</TableCell>
              <TableCell>
                <div className="w-full bg-white/10 rounded-full">
                  <div
                    className="bg-orange-300 h-2 rounded-full"
                    style={{ width: `${(statSetData[index] / statMaxs[index]) * 100}%` }}
                  />
                </div>

                <span className="text-xs text-white/70">{statSetData[index]} / {statMaxs[index]}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlanetStats;

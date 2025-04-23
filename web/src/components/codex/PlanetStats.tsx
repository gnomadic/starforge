
import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useDeployment } from '@/hooks/useDeployment';
import { Address } from 'viem';
import { useReadPlanetStatsEntityGetStatSet, useReadPlanetStatsEntityGetStatSetPointNames } from '@/generated';
import { bigIntReplacer } from '@/domain/utils';
// import { useReadPlanetStatsSystemGetStats } from "@/generated";

interface PlanetStatsProps {
  // selectedTokenId: bigint;
  stats?: readonly [number, number, number, number, number, number, number, number, number, number] | undefined;
  statSetName: string;
  selectedTokenId: bigint;
  whichEntity: Address;
}

const PlanetStats: React.FC<PlanetStatsProps> = ({ stats, statSetName, selectedTokenId, whichEntity }) => {

  const { deploy } = useDeployment()
  const { data: statSetData } = useReadPlanetStatsEntityGetStatSet({ args: [selectedTokenId, statSetName], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });
  const { data: statSetNames } = useReadPlanetStatsEntityGetStatSetPointNames({ args: [statSetName], address: whichEntity })//whichEntity })// scenarios ? scenarios[0] : "0x0" });


  // const { data: stats } = useReadPlanetStatsSystemGetStats({ args: [selectedTokenId], address: deploy.PlanetStatsSystem })



  const upgrades = useGameStore(state => state.upgrades);
  const resources = useGameStore(state => state.resources);
  const purchaseUpgrade = useGameStore(state => state.purchaseUpgrade);

  const visibleUpgrades = upgrades.filter(upgrade => upgrade.visible);

  const canAffordUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (!upgrade) return false;

    // Check if we have enough of each resource
    for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
      const resource = resources.find(r => r.id === resourceId);
      if (!resource || resource.amount < cost) {
        return false;
      }
    }

    return true;
  };

  if (visibleUpgrades.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-medium my-2">{statSetName}</h3>
      <Table>
        <TableBody>
          {statSetData && statSetNames && statSetData.map((statSet, index) => (
            <TableRow key={index}>
              <TableCell className="text-white/70">{statSetNames[index]}</TableCell>
              <TableCell>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div
                    className="bg-orange-300 h-2 rounded-full"
                    style={{ width: `${statSetData[index] * 5}%` }}
                  />
                </div>

                <span className="text-xs text-white/70">{statSetData[index]}/20</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlanetStats;

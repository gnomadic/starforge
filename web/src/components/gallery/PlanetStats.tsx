
import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import useDeployment from '@/hooks/useDeployment';
import { useReadPlanetStatsSystemGetStats } from "@/generated";

interface PlanetStatsProps {
  selectedTokenId: bigint;
}

const PlanetStats: React.FC<PlanetStatsProps> = ({ selectedTokenId }) => {

  const { deploy } = useDeployment()

  const { data: stats } = useReadPlanetStatsSystemGetStats({ args: [selectedTokenId], address: deploy.PlanetStatsSystem })


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


      <h3 className="text-lg font-medium my-2">Stats</h3>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-white/70">Temperature</TableCell>
            <TableCell>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-orange-300 h-2 rounded-full"
                  style={{ width: `${stats?.stats ? stats.stats[0] * 5 : 0}%` }}
                />
              </div>

              <span className="text-xs text-white/70">{stats?.stats[0]}/20</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white/70">Water</TableCell>
            <TableCell>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${stats?.stats ? stats.stats[1] * 5 : 0}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{stats?.stats[1]}/20</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white/70">Biomass</TableCell>
            <TableCell>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-blue-400 h-2 rounded-full"
                  style={{ width: `${stats?.stats ? stats.stats[2] * 5 : 0}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{stats?.stats[2]}/20</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white/70">Atmosphere</TableCell>
            <TableCell>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-blue-400 h-2 rounded-full"
                  style={{ width: `${stats?.stats ? stats.stats[3] * 5 : 0}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{stats?.stats[3]}/20</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white/70">Density</TableCell>
            <TableCell>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-blue-400 h-2 rounded-full"
                  style={{ width: `${stats?.stats ? stats.stats[4] * 5 : 0}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{stats?.stats[4]}/20</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white/70">Anomaly</TableCell>
            <TableCell>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-blue-400 h-2 rounded-full"
                  style={{ width: `${stats?.stats ? stats.stats[5] * 5 : 0}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{stats?.stats[5]}/20</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>


    </div>
  );
};

export default PlanetStats;

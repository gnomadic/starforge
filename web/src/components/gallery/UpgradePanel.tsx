
"use client";


import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { cn } from '@/lib/utils';
import { ArrowUpCircle, LockIcon, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader } from '../ui/card';
import { useReadUpgradesSystemGetAllUpgrades, useReadUpgradesSystemGetAppliedUpgrades } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { Address, formatEther, parseGwei } from 'viem';
import { bigIntReplacer } from '@/domain/utils';
import { useSupplies } from '../SupplyContext';

interface UpgradePanelProps {
  selectedTokenId: bigint;

}

const UpgradePanel: React.FC<UpgradePanelProps> = ({ selectedTokenId }) => {

  const { deploy } = useDeployment();

  const { data: ups, error: upgradesError, isLoading } = useReadUpgradesSystemGetAllUpgrades({ args: [], address: deploy.UpgradesSystem });
  const { data: bought } = useReadUpgradesSystemGetAppliedUpgrades({ args: [selectedTokenId], address: deploy.UpgradesSystem });

  const supplyContext = useSupplies();
  if (!supplyContext) {
    throw new Error('useResources must be used within a ResourcesProvider');
  }
  const { supplies, updateSupply, sync, syncReady } = supplyContext;

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

  const canAffordItUpgrade = (upgradeId: bigint) => {
    // const upgrade = upgrades.find(u => u.id === upgradeId);
    // if (!upgrade) return false;

    // // Check if we have enough of each resource
    // for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
    //   const resource = resources.find(r => r.id === resourceId);
    //   if (!resource || resource.amount < cost) {
    //     return false;
    //   }
    // }

    // return true;
    return false;
  };

  if (visibleUpgrades.length === 0) {
    return null;
  }

  return (
    <Card className={cn("backdrop-blur-sm p-4", "")}>
      <CardHeader className="text-lg font-semibold mb-3">Upgrades</CardHeader>
      <div className="space-y-3">

        {ups?.map(upgrade => {
          return (<div>{upgrade.name} = {upgrade.description}</div>)
        })}


        {ups?.map(upgrade => {
          const isAffordable = canAffordItUpgrade(upgrade.id);
          // const isPurchased = upgrade.purchased;
          const isPurchased = bought?.some((u) => u === upgrade.id);

          const costSupply = supplies.find(r => r.address === upgrade.cost.token);
          const benefitSupply = supplies.find(r => r.address === upgrade.benefit.token);

          return (
            <div
              key={upgrade.id}
                           className={cn(
                "rounded-lg p-3 border transition-all duration-300",
                isPurchased
                  ? "bg-secondary/20 border-secondary/30 cursor-default opacity-70"
                  : isAffordable
                    ? "bg-secondary/60 border-accent/50 hover:bg-secondary/80 cursor-pointer"
                    : "bg-secondary/40 border-secondary/30 opacity-70 cursor-not-allowed"
              )}
            >
              <div>
                {JSON.stringify(upgrade, bigIntReplacer)}
              </div>
              <div>

                {JSON.stringify(costSupply, bigIntReplacer)}
                {/* costSupply?.icon */}
              </div>

              <div>

                {JSON.stringify(benefitSupply, bigIntReplacer)}
              </div>

            </div>
            // <div
            //   key={upgrade.id}
            //   className={cn(
            //     "rounded-lg p-3 border transition-all duration-300",
            //     isPurchased
            //       ? "bg-secondary/20 border-secondary/30 cursor-default opacity-70"
            //       : isAffordable
            //         ? "bg-secondary/60 border-accent/50 hover:bg-secondary/80 cursor-pointer"
            //         : "bg-secondary/40 border-secondary/30 opacity-70 cursor-not-allowed"
            //   )}
            //   // onClick={() => !isPurchased && isAffordable && purchaseUpgrade(upgrade.id)}
            //   onClick={() => !isPurchased && isAffordable}

            // >
            //   <div className="flex items-start justify-between">
            //     <div>
            //       <div className="flex items-center space-x-2">
            //         {isPurchased ? (
            //           <CheckCircle2 className="h-5 w-5 text-green-400" />
            //         ) : isAffordable ? (
            //           <ArrowUpCircle className="h-5 w-5 text-primary" />
            //         ) : (
            //           <LockIcon className="h-5 w-5 text-muted-foreground" />
            //         )}
            //         <h3 className="font-medium">{upgrade.name}</h3>
            //       </div>
            //       <p className="text-sm text-muted-foreground mt-1">{upgrade.description}</p>
            //       <p className="text-xs text-primary mt-2">{formatEther(upgrade.benefit.rate)}</p>

            // //     </div>

            //     {!isPurchased && (
            //       <div className="text-right text-xs space-y-1">
            //         {/* 
            //         {let resource = resources.find(r => r.id === upgrade.resourceId);
            //         return (
            //           <div className={cn('p-1.5 rounded-full', resource.color)}>
            //           {resource.icon}
            //         </div>

            //         )

            //         } */}


            // {JSON.stringify(upgrade.cost, bigIntReplacer)}
            // {upgrade.cost.token}
            // {Object.entries(upgrade.cost).map(([resourceId, cost]) => {
            //   const resource = supplies.find(r => r.address === resourceId);
            //   const hasEnough = false;//resource && resource.amount >= cost;

            //   return (
            //     <div
            //       key={resourceId}
            //       className={cn(
            //         "rounded px-2 py-1 inline-block",
            //         hasEnough ? "bg-secondary/60" : "bg-destructive/40"
            //       )}
            //     >

            //       {/* {resourceId}: {Math.floor(1)} */}
            //       {resourceId}: {cost}
            //       {resource?.type}
            //       {/* {resourceId}: {cost} */}
            //     </div>
            //   );
            // })}
            // </div>
            // )}
            // </div>
            // </div>
          );
        })}
      </div>

    </Card>
  );
};

export default UpgradePanel;

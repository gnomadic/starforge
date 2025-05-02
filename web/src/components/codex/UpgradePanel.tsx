"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpCircle, LockIcon, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader } from '../ui/card';
import { useReadUpgradesSystemGetAllUpgrades, useReadUpgradesSystemGetAppliedUpgrades } from '@/generated';
import { useDeployment } from '@/hooks/useDeployment';
import { formatEther } from 'viem';
import { useSupplies } from '../SupplyContext';
import { SupplyBadge } from '../SupplyBadge';

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

  const handleSync = async () => {
    // Use deploy.SupplyEmissionsSystem and call sync(selectedTokenId)
  };

  // if (visibleUpgrades.length === 0) {
  //   return null;
  // }

  return (
    <Card className={cn("backdrop-blur-sm p-4", "")}>
      <CardHeader className="text-lg font-semibold mb-3">Upgrades</CardHeader>
      <div className="space-y-3">

        {ups?.map(upgrade => {
          const isAffordable = canAffordItUpgrade(upgrade.id);
          const isPurchased = bought?.some((u) => u === upgrade.id);

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
              <div className='grid grid-cols-4 gap-2'>
                <div className='col-span-3'>
                  <div className='flex'>
                    {isPurchased ? (
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    ) : isAffordable ? (
                      <ArrowUpCircle className="h-5 w-5 text-primary" />
                    ) : (
                      <LockIcon className="h-5 w-5 text-muted-foreground" />
                    )}
                    <h3 className="font-medium">{upgrade.name}</h3>

                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{upgrade.description}</p>
                    <div className='border border-gray-300 rounded-md pl-2 py-2 mt-2'>
                    <div className='text-xs'>benefits</div>
                    <div className='grid grid-cols-2 pt-2 '>
                      {upgrade.benefitToken.map
                        ((token, index) => {
                          return (
                            <div key={index}>
                              <SupplyBadge
                                address={token}
                                emission={upgrade.costRate[index]}
                              />
                            </div>
                          )
                        }
                        )}
                    </div>
                  </div>
                </div>
                <div>
                <div className='border border-gray-300 rounded-md pl-2 py-2 mt-2'>

                  <div className='text-xs'>costs</div>
                  <div className='grid grid-cols-1'>
                    {upgrade.costToken.map
                      ((token, index) => {
                        return (
                          <div key={index}>
                            <SupplyBadge
                              address={token}
                              value={upgrade.costRate[index]}
                            />
                          </div>
                        )
                      }
                      )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default UpgradePanel;

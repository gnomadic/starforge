
"use client";


import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { cn } from '@/lib/utils';
import { ArrowUpCircle, LockIcon, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader } from '../ui/card';
import { useReadUpgradesSystemGetAllUpgrades, useReadUpgradesSystemPlanetUpgrades, useReadUpgradesSystemUpgrades } from '@/generated';
import useDeployment from '@/hooks/useDeployment';

interface UpgradePanelProps {
  selectedTokenId: bigint;

}

const UpgradePanel: React.FC<UpgradePanelProps> = ({ selectedTokenId }) => {

  const { deploy } = useDeployment();

  const { data: ups, error: upgradesError, isLoading } = useReadUpgradesSystemGetAllUpgrades({ args: [], address: deploy.UpgradesSystem });

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
    <Card className={cn("backdrop-blur-sm p-4", "")}>
      <CardHeader className="text-lg font-semibold mb-3">Upgrades</CardHeader>
      <div className="space-y-3">

        {ups?.map(upgrade => {
return (<div>{upgrade.name} = {upgrade.description}</div>)
        })}


        {visibleUpgrades.map(upgrade => {
          const isAffordable = canAffordUpgrade(upgrade.id);
          const isPurchased = upgrade.purchased;

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
              onClick={() => !isPurchased && isAffordable && purchaseUpgrade(upgrade.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
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
                  <p className="text-xs text-primary mt-2">{upgrade.effect}</p>
                </div>

                {!isPurchased && (
                  <div className="text-right text-xs space-y-1">
                    {Object.entries(upgrade.cost).map(([resourceId, cost]) => {
                      const resource = resources.find(r => r.id === resourceId);
                      const hasEnough = resource && resource.amount >= cost;

                      return (
                        <div
                          key={resourceId}
                          className={cn(
                            "rounded px-2 py-1 inline-block",
                            hasEnough ? "bg-secondary/60" : "bg-destructive/40"
                          )}
                        >
                          {resourceId}: {Math.floor(cost)}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </Card>
  );
};

export default UpgradePanel;

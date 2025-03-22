
import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { ProbeUpgrade } from '@/lib/types/combatTypes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { Heart, Shield, Swords, Weight, Plus, CheckCircle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProbeCustomizer = () => {
  const { 
    probe,
    probeUpgrades,
    resources,
    purchaseProbeUpgrade,
    installProbeUpgrade,
    uninstallProbeUpgrade 
  } = useGameStore(state => ({
    probe: state.probe,
    probeUpgrades: state.probeUpgrades,
    resources: state.resources,
    purchaseProbeUpgrade: state.purchaseProbeUpgrade,
    installProbeUpgrade: state.installProbeUpgrade,
    uninstallProbeUpgrade: state.uninstallProbeUpgrade
  }));

  const canAffordUpgrade = (upgrade: ProbeUpgrade) => {
    for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
      const resource = resources.find(r => r.id === resourceId);
      if (!resource || resource.amount < cost) {
        return false;
      }
    }
    return true;
  };

  const handlePurchase = (upgradeId: string) => {
    purchaseProbeUpgrade(upgradeId);
  };

  const handleInstall = (upgradeId: string) => {
    const upgrade = probeUpgrades.find(u => u.id === upgradeId);
    if (!upgrade) return;
    
    if (probe.currentWeight + upgrade.weight > probe.weightCapacity) {
      toast({
        title: "Weight limit exceeded",
        description: "You can't install this upgrade as it would exceed your probe's weight capacity.",
        variant: "destructive"
      });
      return;
    }
    
    installProbeUpgrade(upgradeId);
  };

  const handleUninstall = (upgradeId: string) => {
    uninstallProbeUpgrade(upgradeId);
  };

  const availableUpgrades = probeUpgrades.filter(u => u.purchased);
  const purchasableUpgrades = probeUpgrades.filter(u => !u.purchased);
  const installedUpgrades = probe.upgrades.map(u => u.id);

  return (
    <div className="cosmic-panel p-4">
      <h2 className="text-lg font-semibold mb-3">Probe Customization</h2>
      
      {/* Installed Upgrades */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Installed Upgrades</h3>
        <div className="space-y-2">
          {probe.upgrades.length > 0 ? (
            probe.upgrades.map(upgrade => (
              <div 
                key={upgrade.id}
                className="bg-secondary/40 border border-secondary/30 rounded-lg p-2 flex justify-between items-center"
              >
                <div>
                  <div className="font-medium">{upgrade.name}</div>
                  <div className="text-xs flex items-center space-x-2 mt-1">
                    {upgrade.healthBonus > 0 && (
                      <span className="flex items-center space-x-1">
                        <Heart className="h-3 w-3 text-red-500" />
                        <span>+{upgrade.healthBonus}</span>
                      </span>
                    )}
                    {upgrade.attackBonus > 0 && (
                      <span className="flex items-center space-x-1">
                        <Swords className="h-3 w-3 text-orange-500" />
                        <span>+{upgrade.attackBonus}</span>
                      </span>
                    )}
                    {upgrade.defenseBonus > 0 && (
                      <span className="flex items-center space-x-1">
                        <Shield className="h-3 w-3 text-blue-500" />
                        <span>+{upgrade.defenseBonus}</span>
                      </span>
                    )}
                    <span className="flex items-center space-x-1">
                      <Weight className="h-3 w-3 text-slate-400" />
                      <span>{upgrade.weight}</span>
                    </span>
                  </div>
                </div>
                <Button 
                  size="sm"
                  variant="ghost"
                  onClick={() => handleUninstall(upgrade.id)}
                >
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <div className="text-sm text-muted-foreground">No upgrades installed</div>
          )}
        </div>
      </div>
      
      {/* Available Upgrades (Purchased but not installed) */}
      {availableUpgrades.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Available Upgrades</h3>
          <div className="space-y-2">
            {availableUpgrades
              .filter(upgrade => !installedUpgrades.includes(upgrade.id))
              .map(upgrade => (
                <div
                  key={upgrade.id}
                  className="bg-secondary/30 border border-secondary/20 rounded-lg p-2 flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium">{upgrade.name}</div>
                    <div className="text-xs text-muted-foreground">{upgrade.description}</div>
                    <div className="text-xs flex items-center space-x-2 mt-1">
                      {upgrade.healthBonus > 0 && (
                        <span className="flex items-center space-x-1">
                          <Heart className="h-3 w-3 text-red-500" />
                          <span>+{upgrade.healthBonus}</span>
                        </span>
                      )}
                      {upgrade.attackBonus > 0 && (
                        <span className="flex items-center space-x-1">
                          <Swords className="h-3 w-3 text-orange-500" />
                          <span>+{upgrade.attackBonus}</span>
                        </span>
                      )}
                      {upgrade.defenseBonus > 0 && (
                        <span className="flex items-center space-x-1">
                          <Shield className="h-3 w-3 text-blue-500" />
                          <span>+{upgrade.defenseBonus}</span>
                        </span>
                      )}
                      <span className="flex items-center space-x-1">
                        <Weight className="h-3 w-3 text-slate-400" />
                        <span>{upgrade.weight}</span>
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleInstall(upgrade.id)}
                    className={cn(
                      probe.currentWeight + upgrade.weight > probe.weightCapacity
                        ? "bg-destructive/70 hover:bg-destructive"
                        : ""
                    )}
                  >
                    Install
                  </Button>
                </div>
              ))}
          </div>
        </div>
      )}
      
      {/* Purchasable Upgrades */}
      <div>
        <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Available for Purchase</h3>
        <div className="space-y-2">
          {purchasableUpgrades.length > 0 ? (
            purchasableUpgrades.map(upgrade => {
              const affordable = canAffordUpgrade(upgrade);
              
              return (
                <div
                  key={upgrade.id}
                  className={cn(
                    "border rounded-lg p-2 flex justify-between items-center",
                    affordable 
                      ? "bg-secondary/20 border-secondary/30" 
                      : "bg-secondary/10 border-secondary/20 opacity-70"
                  )}
                >
                  <div>
                    <div className="font-medium">{upgrade.name}</div>
                    <div className="text-xs text-muted-foreground">{upgrade.description}</div>
                    <div className="text-xs flex items-center space-x-2 mt-1">
                      {upgrade.healthBonus > 0 && (
                        <span className="flex items-center space-x-1">
                          <Heart className="h-3 w-3 text-red-500" />
                          <span>+{upgrade.healthBonus}</span>
                        </span>
                      )}
                      {upgrade.attackBonus > 0 && (
                        <span className="flex items-center space-x-1">
                          <Swords className="h-3 w-3 text-orange-500" />
                          <span>+{upgrade.attackBonus}</span>
                        </span>
                      )}
                      {upgrade.defenseBonus > 0 && (
                        <span className="flex items-center space-x-1">
                          <Shield className="h-3 w-3 text-blue-500" />
                          <span>+{upgrade.defenseBonus}</span>
                        </span>
                      )}
                      <span className="flex items-center space-x-1">
                        <Weight className="h-3 w-3 text-slate-400" />
                        <span>{upgrade.weight}</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Object.entries(upgrade.cost).map(([resourceId, cost]) => {
                        const resource = resources.find(r => r.id === resourceId);
                        const hasEnough = resource && resource.amount >= cost;
                        
                        return (
                          <Badge
                            key={resourceId}
                            variant={hasEnough ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {resourceId}: {cost}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    disabled={!affordable}
                    onClick={() => handlePurchase(upgrade.id)}
                  >
                    {affordable ? (
                      <Plus className="h-4 w-4 mr-1" />
                    ) : (
                      <Lock className="h-4 w-4 mr-1" />
                    )}
                    Purchase
                  </Button>
                </div>
              );
            })
          ) : (
            <div className="text-sm text-muted-foreground">No upgrades available for purchase</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProbeCustomizer;

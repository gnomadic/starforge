
import { Upgrade } from '../../types/gameTypes';
import { initialUpgrades } from '../../data/upgrades';
import { toast } from "react-toastify";

export interface UpgradesState {
  upgrades: Upgrade[];
  purchaseUpgrade: (upgradeId: string) => void;
}

export const createUpgradesSlice = (set: any, get: any): UpgradesState => ({
  upgrades: [...initialUpgrades],
  
  purchaseUpgrade: (upgradeId) => {
    const upgrade: Upgrade | undefined = get().upgrades.find((u: Upgrade) => u.id === upgradeId);
    if (!upgrade || upgrade.purchased) return;
    
    const resources = [...get().resources];
    let canAfford = true;
    
    // Check if we can afford the upgrade
    for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex === -1 || resources[resourceIndex].amount < Number(cost)) {
        canAfford = false;
        break;
      }
    }
    
    if (!canAfford) {
      toast.warning(JSON.stringify({
        title: "Cannot afford upgrade",
        description: "You don't have enough resources for this upgrade.",
        variant: "destructive"
      }));
      return;
    }
    
    // Pay the cost
    for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex !== -1) {
        resources[resourceIndex].amount -= Number(cost);
      }
    }
    
    // Apply the upgrade effects
    if (upgradeId === 'basic-collector') {
      const energyIndex = resources.findIndex(r => r.id === 'energy');
      resources[energyIndex].perSecond += 0.1;
    } else if (upgradeId === 'matter-extractor') {
      const matterIndex = resources.findIndex(r => r.id === 'matter');
      resources[matterIndex].perSecond += 0.1;
    } else if (upgradeId === 'life-seeder') {
      const lifeIndex = resources.findIndex(r => r.id === 'life');
      resources[lifeIndex].perSecond += 0.05;
    } else if (upgradeId === 'advanced-collector') {
      const energyIndex = resources.findIndex(r => r.id === 'energy');
      resources[energyIndex].perSecond += 0.5;
    } else if (upgradeId === 'tech-research') {
      const techIndex = resources.findIndex(r => r.id === 'technology');
      resources[techIndex].perSecond += 0.05;
    }
    
    // Mark as purchased and unlock any dependent upgrades
    interface Resource {
      id: string;
      amount: number;
      perSecond: number;
    }

    interface UpgradeCost {
      [key: string]: number;
    }

    interface Upgrade {
      id: string;
      name: string;
      cost: UpgradeCost;
      purchased: boolean;
      visible: boolean;
      unlockRequirement?: string;
    }

    const upgrades: Upgrade[] = get().upgrades.map((u: Upgrade) => {
      if (u.id === upgradeId) {
        return { ...u, purchased: true };
      }
      
      // Check if this upgrade should be visible now
      if (!u.visible && u.unlockRequirement === upgradeId) {
        return { ...u, visible: true };
      }
      
      return u;
    });
    
    set({ 
      resources,
      upgrades 
    });
    
    toast.warning(JSON.stringify({
      title: "Upgrade purchased",
      description: `You've purchased ${upgrade.name}!`,
    }));
  }
});

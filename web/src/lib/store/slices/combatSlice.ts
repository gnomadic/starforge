
import { Probe, ProbeUpgrade, Enemy, CombatLog } from '../../types/combatTypes';
import { initialProbeUpgrades } from '../../data/probeUpgrades';
import { initialEnemies } from '../../data/enemies';
import { toast } from "@/components/ui/use-toast";
import { v4 as uuidv4 } from 'uuid';

export interface CombatState {
  probe: Probe;
  probeUpgrades: ProbeUpgrade[];
  currentEnemy: Enemy;
  combatLogs: CombatLog[];
  purchaseProbeUpgrade: (upgradeId: string) => void;
  installProbeUpgrade: (upgradeId: string) => void;
  uninstallProbeUpgrade: (upgradeId: string) => void;
  launchProbe: () => void;
  resetEnemy: () => void;
  addCombatLog: (message: string, type: CombatLog['type']) => void;
}

export const createCombatSlice = (set: any, get: any): CombatState => ({
  probe: {
    id: 'scout-probe',
    health: 50,
    attack: 10,
    defense: 5,
    baseHealth: 50,
    baseAttack: 10,
    baseDefense: 5,
    weightCapacity: 10,
    currentWeight: 0,
    upgrades: [],
    cooldown: 30,
    lastLaunch: null
  },
  probeUpgrades: [...initialProbeUpgrades],
  currentEnemy: {...initialEnemies[0]},
  combatLogs: [],
  
  purchaseProbeUpgrade: (upgradeId) => {
    const upgrade = get().probeUpgrades.find(u => u.id === upgradeId);
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
      toast({
        title: "Cannot afford upgrade",
        description: "You don't have enough resources for this probe upgrade.",
        variant: "destructive"
      });
      return;
    }
    
    // Pay the cost
    for (const [resourceId, cost] of Object.entries(upgrade.cost)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex !== -1) {
        resources[resourceIndex].amount -= Number(cost);
      }
    }
    
    // Mark as purchased
    const probeUpgrades = get().probeUpgrades.map(u => {
      if (u.id === upgradeId) {
        return { ...u, purchased: true };
      }
      return u;
    });
    
    set({ 
      resources,
      probeUpgrades 
    });
    
    toast({
      title: "Upgrade purchased",
      description: `You've purchased the ${upgrade.name} for your probe!`,
    });
    
    get().addCombatLog(`Purchased probe upgrade: ${upgrade.name}`, 'system');
  },
  
  installProbeUpgrade: (upgradeId) => {
    const probeUpgrades = [...get().probeUpgrades];
    const probe = {...get().probe};
    
    const upgradeIndex = probeUpgrades.findIndex(u => u.id === upgradeId);
    if (upgradeIndex === -1 || !probeUpgrades[upgradeIndex].purchased) return;
    
    const upgrade = probeUpgrades[upgradeIndex];
    
    // Check if already installed
    if (probe.upgrades.some(u => u.id === upgradeId)) {
      toast({
        title: "Already installed",
        description: "This upgrade is already installed on your probe.",
        variant: "destructive"
      });
      return;
    }
    
    // Check weight capacity
    if (probe.currentWeight + upgrade.weight > probe.weightCapacity) {
      toast({
        title: "Weight limit exceeded",
        description: "This upgrade would exceed your probe's weight capacity.",
        variant: "destructive"
      });
      return;
    }
    
    // Apply the upgrade
    probe.upgrades.push(upgrade);
    probe.currentWeight += upgrade.weight;
    probe.health = probe.baseHealth + probe.upgrades.reduce((sum, u) => sum + u.healthBonus, 0);
    probe.attack = probe.baseAttack + probe.upgrades.reduce((sum, u) => sum + u.attackBonus, 0);
    probe.defense = probe.baseDefense + probe.upgrades.reduce((sum, u) => sum + u.defenseBonus, 0);
    
    // Special case for lightweight alloys: reduce weight of all other upgrades by 20%
    if (upgradeId === 'lightweight-alloys') {
      let weightReduction = 0;
      probe.upgrades.forEach(u => {
        if (u.id !== 'lightweight-alloys') {
          weightReduction += u.weight * 0.2;
        }
      });
      probe.currentWeight = Math.max(0, probe.currentWeight - weightReduction);
    }
    
    set({ probe });
    
    toast({
      title: "Upgrade installed",
      description: `${upgrade.name} has been installed on your probe.`,
    });
    
    get().addCombatLog(`Installed ${upgrade.name} on probe`, 'system');
  },
  
  uninstallProbeUpgrade: (upgradeId) => {
    const probe = {...get().probe};
    
    const upgradeIndex = probe.upgrades.findIndex(u => u.id === upgradeId);
    if (upgradeIndex === -1) return;
    
    const upgrade = probe.upgrades[upgradeIndex];
    
    // Remove the upgrade
    probe.upgrades.splice(upgradeIndex, 1);
    
    // Special case for lightweight alloys: revert weight reduction when uninstalled
    let weightAdjustment = upgrade.weight;
    if (upgradeId === 'lightweight-alloys') {
      // Add back the 20% weight that was reduced
      probe.upgrades.forEach(u => {
        weightAdjustment += u.weight * 0.2;
      });
    }
    
    probe.currentWeight = Math.max(0, probe.currentWeight - upgrade.weight);
    
    // Recalculate stats
    probe.health = probe.baseHealth + probe.upgrades.reduce((sum, u) => sum + u.healthBonus, 0);
    probe.attack = probe.baseAttack + probe.upgrades.reduce((sum, u) => sum + u.attackBonus, 0);
    probe.defense = probe.baseDefense + probe.upgrades.reduce((sum, u) => sum + u.defenseBonus, 0);
    
    set({ probe });
    
    toast({
      title: "Upgrade removed",
      description: `${upgrade.name} has been removed from your probe.`,
    });
    
    get().addCombatLog(`Removed ${upgrade.name} from probe`, 'system');
  },
  
  launchProbe: () => {
    const probe = {...get().probe};
    const currentTime = Date.now();
    
    // Check if probe is on cooldown
    if (probe.lastLaunch !== null) {
      const elapsedTime = (currentTime - probe.lastLaunch) / 1000;
      if (elapsedTime < probe.cooldown) {
        const remainingTime = Math.ceil(probe.cooldown - elapsedTime);
        toast({
          title: "Probe on cooldown",
          description: `Your probe will be ready in ${remainingTime} seconds.`,
          variant: "destructive"
        });
        return;
      }
    }
    
    // Set the launch time
    probe.lastLaunch = currentTime;
    
    // Get the current enemy
    const enemy = {...get().currentEnemy};
    
    // Skip if enemy is already defeated
    if (enemy.defeated) {
      toast({
        title: "No enemy to attack",
        description: "The current enemy has already been defeated. Select a new target.",
      });
      return;
    }
    
    // Calculate damage
    // Formula: probe attack - enemy defense (with minimum damage of 1)
    const damageToEnemy = Math.max(1, probe.attack - enemy.defense / 2);
    
    // Calculate damage to probe
    // Formula: enemy attack - probe defense (with minimum damage of 0)
    const damageToProbe = Math.max(0, enemy.attack - probe.defense / 2);
    
    // Apply damage to enemy
    enemy.currentHealth = Math.max(0, enemy.currentHealth - damageToEnemy);
    
    // Check if enemy is defeated
    const enemyDefeated = enemy.currentHealth <= 0;
    if (enemyDefeated) {
      enemy.currentHealth = 0;
      enemy.defeated = true;
      
      // Award resources
      const resources = [...get().resources];
      for (const [resourceId, amount] of Object.entries(enemy.rewards.resources)) {
        const resourceIndex = resources.findIndex(r => r.id === resourceId);
        if (resourceIndex !== -1) {
          resources[resourceIndex].amount += amount;
        }
      }
      
      // Chance to discover artifact
      const artifactChance = Math.random();
      if (artifactChance < enemy.rewards.artifactChance && enemy.rewards.possibleArtifacts.length > 0) {
        const artifacts = [...get().artifacts];
        const randomIndex = Math.floor(Math.random() * enemy.rewards.possibleArtifacts.length);
        const artifactId = enemy.rewards.possibleArtifacts[randomIndex];
        
        const artifactIndex = artifacts.findIndex(a => a.id === artifactId);
        if (artifactIndex !== -1 && !artifacts[artifactIndex].discovered) {
          artifacts[artifactIndex].discovered = true;
          
          set({ artifacts });
          
          toast({
            title: "Artifact discovered!",
            description: `Your probe discovered the ${artifacts[artifactIndex].name}!`,
          });
          
          get().addCombatLog(`Discovered artifact: ${artifacts[artifactIndex].name}`, 'system');
        }
      }
      
      set({ 
        currentEnemy: enemy,
        resources
      });
      
      toast({
        title: "Enemy defeated!",
        description: `Your probe has defeated the ${enemy.name} and collected resources!`,
      });
      
      get().addCombatLog(`Defeated ${enemy.name} and collected rewards`, 'defeat');
    } else {
      // Add combat log for the attack
      get().addCombatLog(`Probe dealt ${damageToEnemy.toFixed(1)} damage to ${enemy.name}`, 'attack');
      
      // Set the updated enemy
      set({ 
        currentEnemy: enemy,
        probe
      });
    }
    
    // Launch log
    get().addCombatLog(`Probe launched against ${enemy.name}`, 'launch');
    
    set({ probe });
  },
  
  resetEnemy: () => {
    const { currentEnemy } = get();
    
    if (!currentEnemy.defeated) {
      toast({
        title: "Enemy not defeated",
        description: "You must defeat the current enemy before selecting a new one.",
        variant: "destructive"
      });
      return;
    }
    
    // Pick a random enemy from the list, different from current one
    const availableEnemies = initialEnemies.filter(e => e.id !== currentEnemy.id);
    const randomIndex = Math.floor(Math.random() * availableEnemies.length);
    const newEnemy = {
      ...availableEnemies[randomIndex],
      currentHealth: availableEnemies[randomIndex].maxHealth,
      defeated: false
    };
    
    set({ currentEnemy: newEnemy });
    
    toast({
      title: "New threat detected",
      description: `Your scanners have detected a ${newEnemy.name}!`,
    });
    
    get().addCombatLog(`New threat detected: ${newEnemy.name}`, 'system');
  },
  
  addCombatLog: (message, type) => {
    const combatLogs = [...get().combatLogs];
    
    // Add new log entry
    combatLogs.push({
      id: uuidv4(),
      timestamp: Date.now(),
      message,
      type
    });
    
    // Limit to last 50 logs
    while (combatLogs.length > 50) {
      combatLogs.shift();
    }
    
    set({ combatLogs });
  }
});

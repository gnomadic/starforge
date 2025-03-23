import { Resource } from "@/lib/planetData";

export interface CommonState {
  lastUpdateTime: number;
  updateGameLoop: () => void;
  resetGame: () => void;
}

export const createCommonSlice = (set: any, get: any): CommonState => ({
  lastUpdateTime: Date.now(),
  
  updateGameLoop: () => {
    const currentTime = Date.now();
    const elapsedTimeInSeconds = (currentTime - get().lastUpdateTime) / 1000;
    
    // Only update if some time has passed
    if (elapsedTimeInSeconds > 0) {
      // Update resources based on per-second rates
      const resources: Resource[] = get().resources.map((resource: Resource) => {
        return {
          ...resource,
          amount: resource.amount + (resource.perSecond * elapsedTimeInSeconds)
        };
      });
      
      // Check if any ventures have completed
      get().checkVentureCompletion();
      
      set({ 
        resources,
        lastUpdateTime: currentTime
      });
    }
  },
  
  resetGame: () => {
    // Import all initial states
    const { 
      initialResources, 
      initialPlanets, 
      initialUpgrades, 
      initialCouncilProjects, 
      initialVentures, 
      initialArtifacts, 
      initialProbeUpgrades, 
      initialEnemies, 
      initialMarketListings, 
      initialMarketStats 
    } = get();
    
    set({
      resources: [...initialResources],
      planets: [...initialPlanets],
      upgrades: [...initialUpgrades],
      councilProjects: [...initialCouncilProjects],
      ventures: [...initialVentures],
      artifacts: [...initialArtifacts],
      selectedPlanetId: 'terra',
      lastUpdateTime: Date.now(),
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
      marketListings: [...initialMarketListings],
      marketStats: {...initialMarketStats}
    });
  }
});


import { Planet } from '../../types/gameTypes';
import { initialPlanets } from '../../data/planets';
import { toast } from "@/components/ui/use-toast";

export interface PlanetsState {
  planets: Planet[];
  selectedPlanetId: string | null;
  selectPlanet: (planetId: string | null) => void;
  regeneratePlanet: (planetId: string) => void;
  unlockPlanet: (planetId: string) => void;
  pullGacha: () => string | null;
  destroyPlanet: (planetId: string) => void;
}

export const createPlanetsSlice = (set: any, get: any): PlanetsState => ({
  planets: [...initialPlanets],
  selectedPlanetId: 'terra',
  
  selectPlanet: (planetId) => {
    set({ selectedPlanetId: planetId });
  },
  
  regeneratePlanet: (planetId) => {
    const planet = get().planets.find(p => p.id === planetId);
    if (!planet || planet.regenerationLevel >= planet.maxRegenerationLevel) return;
    
    const requiredEnergy = 50 * (planet.regenerationLevel + 1);
    const requiredMatter = 25 * (planet.regenerationLevel + 1);
    const requiredLife = 10 * (planet.regenerationLevel + 1);
    
    const resources = [...get().resources];
    const energyIndex = resources.findIndex(r => r.id === 'energy');
    const matterIndex = resources.findIndex(r => r.id === 'matter');
    const lifeIndex = resources.findIndex(r => r.id === 'life');
    
    if (resources[energyIndex].amount < requiredEnergy ||
        resources[matterIndex].amount < requiredMatter ||
        resources[lifeIndex].amount < requiredLife) {
      toast({
        title: "Cannot regenerate",
        description: "You don't have enough resources to regenerate this planet.",
        variant: "destructive"
      });
      return;
    }
    
    resources[energyIndex].amount -= requiredEnergy;
    resources[matterIndex].amount -= requiredMatter;
    resources[lifeIndex].amount -= requiredLife;
    
    const planets = get().planets.map(p => {
      if (p.id === planetId) {
        return {
          ...p,
          regenerationLevel: p.regenerationLevel + 1
        };
      }
      return p;
    });
    
    set({ 
      planets,
      resources 
    });
    
    toast({
      title: "Planet regenerated",
      description: `${planet.name} has been regenerated to level ${planet.regenerationLevel + 1}!`,
    });
  },
  
  unlockPlanet: (planetId) => {
    const planet = get().planets.find(p => p.id === planetId);
    if (!planet || planet.discovered || !planet.unlockCost) return;
    
    const resources = [...get().resources];
    let canAfford = true;
    
    // Check if we can afford to unlock
    for (const [resourceId, cost] of Object.entries(planet.unlockCost)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex === -1 || resources[resourceIndex].amount < Number(cost)) {
        canAfford = false;
        break;
      }
    }
    
    if (!canAfford) {
      toast({
        title: "Cannot unlock planet",
        description: "You don't have enough resources to unlock this planet.",
        variant: "destructive"
      });
      return;
    }
    
    // Pay the cost
    for (const [resourceId, cost] of Object.entries(planet.unlockCost)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex !== -1) {
        resources[resourceIndex].amount -= Number(cost);
      }
    }
    
    const planets = get().planets.map(p => {
      if (p.id === planetId) {
        return {
          ...p,
          discovered: true
        };
      }
      return p;
    });
    
    set({ 
      planets,
      resources,
      selectedPlanetId: planetId 
    });
    
    toast({
      title: "Planet discovered",
      description: `You've discovered ${planet.name}!`,
    });
  },
  
  pullGacha: () => {
    const planets = get().planets;
    let resources = [...get().resources];
    
    // Define gacha cost
    const gachaCost = {
      energy: 50,
      matter: 30,
      life: 10,
      technology: 5
    };
    
    // Check if we can afford the gacha
    let canAfford = true;
    Object.entries(gachaCost).forEach(([resourceId, cost]) => {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex !== -1 && resources[resourceIndex].amount < cost) {
        canAfford = false;
      }
    });
    
    if (!canAfford) {
      toast({
        title: "Cannot pull gacha",
        description: "You don't have enough resources.",
        variant: "destructive"
      });
      return null;
    }
    
    // Deduct resources
    Object.entries(gachaCost).forEach(([resourceId, cost]) => {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex !== -1) {
        resources[resourceIndex].amount -= cost;
      }
    });
    
    // Get undiscovered planets
    const undiscoveredPlanets = planets.filter(p => !p.discovered);
    
    if (undiscoveredPlanets.length === 0) {
      toast({
        title: "No planets to discover",
        description: "You've already discovered all available planets.",
      });
      return null;
    }
    
    // Randomly select a planet to discover
    const randomIndex = Math.floor(Math.random() * undiscoveredPlanets.length);
    const planetToDiscover = undiscoveredPlanets[randomIndex];
    
    // Update the planet to be discovered
    const updatedPlanets = planets.map(p => {
      if (p.id === planetToDiscover.id) {
        return {
          ...p,
          discovered: true,
          stats: Object.keys(p.stats).length > 0 ? p.stats : generatePlanetStats(p.type)
        };
      }
      return p;
    });
    
    set({ 
      planets: updatedPlanets,
      resources,
      selectedPlanetId: planetToDiscover.id 
    });
    
    toast({
      title: "Planet discovered!",
      description: `You've discovered ${planetToDiscover.name}!`,
    });
    
    return planetToDiscover.id;
  },
  
  destroyPlanet: (planetId) => {
    const planets = get().planets;
    const resources = [...get().resources];
    
    // Don't allow destroying Terra (home planet)
    if (planetId === 'terra') {
      toast({
        title: "Cannot destroy home planet",
        description: "Terra is your home planet and cannot be destroyed.",
        variant: "destructive"
      });
      return;
    }
    
    const planet = planets.find(p => p.id === planetId);
    if (!planet || !planet.discovered) return;
    
    // Calculate resources gained from destroying the planet
    // Base amount + amount based on regeneration level
    const energyGain = 30 + (planet.regenerationLevel * 20);
    const matterGain = 20 + (planet.regenerationLevel * 15);
    const lifeGain = 10 + (planet.regenerationLevel * 10);
    const techGain = 5 + (planet.regenerationLevel * 5);
    
    // Add resources
    const energyIndex = resources.findIndex(r => r.id === 'energy');
    const matterIndex = resources.findIndex(r => r.id === 'matter');
    const lifeIndex = resources.findIndex(r => r.id === 'life');
    const techIndex = resources.findIndex(r => r.id === 'technology');
    
    if (energyIndex !== -1) resources[energyIndex].amount += energyGain;
    if (matterIndex !== -1) resources[matterIndex].amount += matterGain;
    if (lifeIndex !== -1) resources[lifeIndex].amount += lifeGain;
    if (techIndex !== -1) resources[techIndex].amount += techGain;
    
    // Reset the planet to undiscovered state and reset regeneration
    const updatedPlanets = planets.map(p => {
      if (p.id === planetId) {
        return {
          ...p,
          discovered: false,
          regenerationLevel: 0
        };
      }
      return p;
    });
    
    // If the selected planet was the destroyed one, select Terra instead
    const selectedPlanetId = get().selectedPlanetId === planetId ? 'terra' : get().selectedPlanetId;
    
    set({ 
      planets: updatedPlanets,
      resources,
      selectedPlanetId
    });
    
    toast({
      title: "Planet destroyed",
      description: `${planet.name} has been destroyed and yielded resources!`,
    });
  }
});

// Imported from planetUtils but needed here
import { generatePlanetStats } from "../../utils/planetUtils";


// Base resource types
export type ResourceType = 'energy' | 'matter' | 'life' | 'technology';

export type PlanetType = 'temperate' | 'rocky' | 'gaseous' | 'oceanic' | 'barren' | 'ice';

// Resource interface
export interface Resource {
  id: string;
  name: string;
  amount: number;
  perSecond: number;
  color: string;
}

// Planet interfaces
export interface PlanetStat {
  value: number;
  name: string;
  description: string;
  color: string;
}

export interface Planet {
  id: string;
  name: string;
  type: string;
  description: string;
  discovered: boolean;
  regenerationLevel: number;
  maxRegenerationLevel: number;
  color: string;
  size: number;
  resourceMultiplier: {
    energy: number;
    matter: number;
    life: number;
    technology: number;
  };
  unlockCost?: { [resourceId: string]: number };
  stats: {
    temperature: PlanetStat;
    water: PlanetStat;
    biomass: PlanetStat;
    atmosphere: PlanetStat;
    density: PlanetStat;
  };
}

// Upgrade interface
export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: { [resourceId: string]: number };
  effect: string;
  purchased: boolean;
  visible: boolean;
  unlockRequirement?: string;
  unlockArtifactId?: string; // Added to support unlocking upgrades from artifacts
}

// Council interfaces
export interface CouncilProject {
  id: string;
  name: string;
  description: string;
  resourceRequirements: { [resourceId: string]: number };
  currentProgress: { [resourceId: string]: number };
  completed: boolean;
  unlockUpgradeId?: string;
  timeEstimate: string;
  importance: 'low' | 'medium' | 'high';
}

import { Address, Hex } from "viem";










export type Deployment = {
  Planet: Address;
  SystemController: Address;
  ScenarioFactory: Address;
  PlanetStats: Address;
  SupplySystem: Address;
  JobSystem: Address
  // UpgradesSystem: Address;
  // DungeonMaster: Address;
  // EnergyToken: Address;
  // LifeToken: Address;
  // MatterToken: Address;
  // TechToken: Address;



  // InvestmentSystem: Address;
  // GlobalProgress: Address;
  // displayName: string;
  currency: string;
  chain: string;
  chainId: string;
  scan: string;
  // viemChain: Chain;
  // viemTransport: Transport;
}

export type HSL = {
  h: number;
  s: number;
  l: number;
  a: number;
}



export interface Supply {
  type: Hex;  // b32('Bioflux') | 'Hydrocite' | 'Solaris Dust' | 'TECHNOLOGY';
  amount: number;
  emissionRate: number;
  icon: React.ReactNode;
  color: string;
  id: string;
  description?: string;
}

export interface Reward {
  type: 'xp' | 'gold' | 'artifact' | 'cosmic-dust';
  amount: number;
  artifactId?: string;
  name: string;
  icon: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  timeRequired: number; // in seconds
  riskLevel: 'low' | 'medium' | 'high' | 'extreme';
  supplies: Supply[];
  rewards: Reward[];
  availableUntil?: Date;
  image: string;
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  rarity: number;// 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  image: string;
  boost: {
    type: 'energy' | 'power' | 'speed' | 'health' | 'attack' | 'defense';
    amount: number;
  };
  equipped: boolean;
}

export interface Enemy {
  id: string;
  name: string;
  health: number;
  attack: number;
  defense: number;
  image: string;
  description: string;
  rewards: Reward[];
}

export interface CombatStats {
  health: number;
  maxHealth: number;
  attack: number;
  defense: number;
}

export interface CombatLogData {
  id: string;
  message: string;
  type: 'player' | 'enemy' | 'system' | 'reward';
  timestamp: number;
}


export interface Scenario {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  activations: number;
  thumbnail?: string;
  quests?: Quest[];
  artifacts?: Artifact[];
  enemies?: Enemy[];
  resources?: Supply[];
  jobs?: ScenarioJob[];
  isActive?: boolean; // Track if scenario is active for current player
}

export interface ScenarioJob {
  id: string;
  title: string;
  description: string;
  resourceType: 'life' | 'matter' | 'energy' | 'technology';
  baseEmissionBoost: number;
}

export interface ScenarioForm {
  title: string;
  description: string;
  quests: boolean;
  artifacts: boolean;
  enemies: boolean;
  resources: boolean;
  jobs: boolean;

  // Content type details could be added here in the future
  questDetails?: any[];
  artifactDetails?: any[];
  enemyDetails?: any[];
  resourceDetails?: any[];
  jobDetails?: any[];
}

export interface ScenarioMetadata {
  name: string;
  description: string;
}
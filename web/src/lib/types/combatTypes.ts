
export interface Probe {
  id: string;
  health: number;
  attack: number;
  defense: number;
  baseHealth: number;
  baseAttack: number;
  baseDefense: number;
  weightCapacity: number;
  currentWeight: number;
  upgrades: ProbeUpgrade[];
  cooldown: number; // cooldown in seconds
  lastLaunch: number | null; // timestamp of last launch
}

export interface ProbeUpgrade {
  id: string;
  name: string;
  description: string;
  healthBonus: number;
  attackBonus: number;
  defenseBonus: number;
  weight: number;
  purchased: boolean;
  cost: { [resourceId: string]: number };
}

export interface Enemy {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  maxHealth: number;
  currentHealth: number;
  attack: number;
  defense: number;
  rewards: {
    resources: { [resourceId: string]: number };
    artifactChance: number;
    possibleArtifacts: string[];
  };
  defeated: boolean;
}

export interface CombatLog {
  id: string;
  timestamp: number;
  message: string;
  type: 'attack' | 'defense' | 'defeat' | 'system' | 'launch';
}

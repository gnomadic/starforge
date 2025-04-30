
import { ResourceType } from './gameTypes';

export type VentureStatus = 'idle' | 'active' | 'completed' | 'failed';
export type VentureRisk = 'low' | 'medium' | 'high';

export interface Venture {
  id: string;
  name: string;
  description: string;
  duration: number; // in seconds
  startTime?: number; // timestamp when started
  targetPlanetId: string;
  risk: VentureRisk;
  resourceRequirements: { [resourceId: string]: number };
  artifactRewards: string[]; // ids of possible artifact rewards
  successRate: number; // 0-1
  status: VentureStatus;
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  discovered: boolean;
  bonuses: {
    resourceMultiplier?: { [key in ResourceType]?: number };
    ventureSuccessBonus?: number;
    regenerationDiscount?: number;
  };
  image: string; // Path to artifact image
}

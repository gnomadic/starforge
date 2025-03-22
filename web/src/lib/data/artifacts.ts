
import { Artifact } from '../types/ventureTypes';

export const initialArtifacts: Artifact[] = [
  {
    id: 'ancient-crystal',
    name: 'Ancient Crystal',
    description: 'A crystalline structure that resonates with energy, boosting energy production.',
    rarity: 'common',
    discovered: false,
    bonuses: {
      resourceMultiplier: {
        energy: 1.1 // +10% energy production
      }
    },
    image: '/placeholder.svg'
  },
  {
    id: 'matter-compressor',
    name: 'Matter Compressor',
    description: 'A device that enhances the extraction of matter from planetary surfaces.',
    rarity: 'uncommon',
    discovered: false,
    bonuses: {
      resourceMultiplier: {
        matter: 1.15 // +15% matter production
      }
    },
    image: '/placeholder.svg'
  },
  {
    id: 'life-seed',
    name: 'Life Seed',
    description: 'A mysterious seed that enhances life development.',
    rarity: 'rare',
    discovered: false,
    bonuses: {
      resourceMultiplier: {
        life: 1.2 // +20% life production
      }
    },
    image: '/placeholder.svg'
  },
  {
    id: 'ancient-circuit',
    name: 'Ancient Circuit',
    description: 'A technological marvel that enhances research capabilities.',
    rarity: 'uncommon',
    discovered: false,
    bonuses: {
      resourceMultiplier: {
        technology: 1.15 // +15% technology production
      }
    },
    image: '/placeholder.svg'
  },
  {
    id: 'planetary-core',
    name: 'Planetary Core Fragment',
    description: 'A fragment of a planet\'s core, reducing the cost of planetary regeneration.',
    rarity: 'rare',
    discovered: false,
    bonuses: {
      regenerationDiscount: 0.1 // 10% discount on regeneration costs
    },
    image: '/placeholder.svg'
  },
  {
    id: 'cosmic-map',
    name: 'Cosmic Map',
    description: 'An ancient map showing promising venture locations, increasing success rates.',
    rarity: 'rare',
    discovered: false,
    bonuses: {
      ventureSuccessBonus: 0.1 // +10% venture success rate
    },
    image: '/placeholder.svg'
  },
  {
    id: 'universal-catalyst',
    name: 'Universal Catalyst',
    description: 'A substance that enhances all resource production.',
    rarity: 'legendary',
    discovered: false,
    bonuses: {
      resourceMultiplier: {
        energy: 1.1,
        matter: 1.1,
        life: 1.1,
        technology: 1.1
      }
    },
    image: '/placeholder.svg'
  }
];

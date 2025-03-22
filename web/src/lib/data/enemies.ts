
import { Enemy } from '../types/combatTypes';

export const initialEnemies: Enemy[] = [
  {
    id: 'space-debris',
    name: 'Space Debris Field',
    description: 'A dangerous field of space junk and debris.',
    imageUrl: '/placeholder.svg',
    maxHealth: 50,
    currentHealth: 50,
    attack: 5,
    defense: 2,
    rewards: {
      resources: {
        matter: 20,
        energy: 15
      },
      artifactChance: 0.1,
      possibleArtifacts: ['ancient-fragment']
    },
    defeated: false
  },
  {
    id: 'asteroid-swarm',
    name: 'Asteroid Swarm',
    description: 'A swarm of small but numerous asteroids.',
    imageUrl: '/placeholder.svg',
    maxHealth: 80,
    currentHealth: 80,
    attack: 8,
    defense: 5,
    rewards: {
      resources: {
        matter: 35,
        energy: 20
      },
      artifactChance: 0.15,
      possibleArtifacts: ['crystalline-formation', 'ancient-fragment']
    },
    defeated: false
  },
  {
    id: 'rogue-satellite',
    name: 'Rogue Satellite',
    description: 'An old satellite with malfunctioning defense systems.',
    imageUrl: '/placeholder.svg',
    maxHealth: 120,
    currentHealth: 120,
    attack: 12,
    defense: 10,
    rewards: {
      resources: {
        matter: 40,
        energy: 30,
        technology: 20
      },
      artifactChance: 0.2,
      possibleArtifacts: ['tech-core', 'data-crystal']
    },
    defeated: false
  },
  {
    id: 'cosmic-anomaly',
    name: 'Cosmic Anomaly',
    description: 'A strange energy phenomenon that defies explanation.',
    imageUrl: '/placeholder.svg',
    maxHealth: 200,
    currentHealth: 200,
    attack: 15,
    defense: 15,
    rewards: {
      resources: {
        energy: 60,
        technology: 40,
        life: 20
      },
      artifactChance: 0.3,
      possibleArtifacts: ['void-essence', 'reality-shard']
    },
    defeated: false
  }
];

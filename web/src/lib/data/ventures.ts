
import { Venture } from '../types/ventureTypes';

export const initialVentures: Venture[] = [
  {
    id: 'surface-scan',
    name: 'Surface Scan',
    description: 'A basic scan of the planet\'s surface looking for artifacts.',
    duration: 60, // 60 seconds
    targetPlanetId: 'terra',
    risk: 'low',
    resourceRequirements: {
      energy: 20
    },
    artifactRewards: ['ancient-crystal'],
    successRate: 0.8,
    status: 'idle'
  },
  {
    id: 'deep-excavation',
    name: 'Deep Excavation',
    description: 'Dig deep into the planet\'s crust to find buried artifacts.',
    duration: 180, // 3 minutes
    targetPlanetId: 'terra',
    risk: 'medium',
    resourceRequirements: {
      energy: 50,
      matter: 30
    },
    artifactRewards: ['matter-compressor', 'planetary-core'],
    successRate: 0.6,
    status: 'idle'
  },
  {
    id: 'bio-survey',
    name: 'Biological Survey',
    description: 'Conduct a survey of life forms that might lead to unique discoveries.',
    duration: 120, // 2 minutes
    targetPlanetId: 'terra',
    risk: 'low',
    resourceRequirements: {
      energy: 30,
      life: 20
    },
    artifactRewards: ['life-seed'],
    successRate: 0.7,
    status: 'idle'
  },
  {
    id: 'tech-retrieval',
    name: 'Tech Retrieval Mission',
    description: 'Search for lost technology from ancient civilizations.',
    duration: 240, // 4 minutes
    targetPlanetId: 'terra',
    risk: 'medium',
    resourceRequirements: {
      energy: 60,
      technology: 30
    },
    artifactRewards: ['ancient-circuit'],
    successRate: 0.65,
    status: 'idle'
  },
  {
    id: 'cosmic-expedition',
    name: 'Cosmic Expedition',
    description: 'A risky expedition to the far reaches of the planet.',
    duration: 300, // 5 minutes
    targetPlanetId: 'terra',
    risk: 'high',
    resourceRequirements: {
      energy: 100,
      matter: 50,
      life: 30,
      technology: 20
    },
    artifactRewards: ['cosmic-map', 'universal-catalyst'],
    successRate: 0.5,
    status: 'idle'
  }
];

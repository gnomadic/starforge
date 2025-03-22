
import { Planet } from '../types/gameTypes';
import { getPlanetColorByType, generatePlanetStats } from '../utils/planetUtils';

export const initialPlanets: Planet[] = [
  {
    id: 'terra',
    name: 'Terra',
    type: 'temperate',
    description: 'Your home planet, a perfect cradle for life.',
    discovered: true,
    regenerationLevel: 1,
    maxRegenerationLevel: 5,
    color: '#4CAF50',
    size: 80,
    resourceMultiplier: {
      energy: 1,
      matter: 1,
      life: 1.5,
      technology: 1.2
    },
    stats: {
      temperature: { value: 0.5, name: 'Temperature', description: 'Perfect for life', color: 'text-orange-500' },
      water: { value: 0.7, name: 'Water', description: 'Abundant oceans and freshwater', color: 'text-blue-500' },
      biomass: { value: 0.8, name: 'Biomass', description: 'Rich with life', color: 'text-green-500' },
      atmosphere: { value: 0.9, name: 'Atmosphere', description: 'Breathable atmosphere', color: 'text-cyan-500' },
      density: { value: 0.6, name: 'Density', description: 'Rocky planet with metal core', color: 'text-gray-500' }
    }
  },
  {
    id: 'proxima',
    name: 'Proxima',
    type: 'rocky',
    description: 'A rocky world with potential for terraforming.',
    discovered: false,
    regenerationLevel: 0,
    maxRegenerationLevel: 3,
    color: '#795548',
    size: 60,
    resourceMultiplier: {
      energy: 1.2,
      matter: 1.5,
      life: 0.8,
      technology: 1
    },
    unlockCost: {
      energy: 50,
      matter: 30,
      life: 10
    },
    stats: {
      temperature: { value: 0.8, name: 'Temperature', description: 'Hot and harsh', color: 'text-red-500' },
      water: { value: 0.1, name: 'Water', description: 'Very dry', color: 'text-blue-300' },
      biomass: { value: 0.1, name: 'Biomass', description: 'Barely any life', color: 'text-green-300' },
      atmosphere: { value: 0.3, name: 'Atmosphere', description: 'Thin atmosphere', color: 'text-cyan-300' },
      density: { value: 0.7, name: 'Density', description: 'Dense rocky core', color: 'text-gray-700' }
    }
  }
];

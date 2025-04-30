
import { Upgrade } from '../types/gameTypes';

export const initialUpgrades: Upgrade[] = [
  {
    id: 'basic-collector',
    name: 'Basic Energy Collector',
    description: 'Harnesses solar energy to increase energy production.',
    cost: {
      matter: 20,
      technology: 5
    },
    effect: '+0.1 Energy/Second',
    purchased: false,
    visible: true
  },
  {
    id: 'matter-extractor',
    name: 'Matter Extractor',
    description: 'Extracts valuable matter from the planet\'s crust.',
    cost: {
      energy: 30,
      technology: 10
    },
    effect: '+0.1 Matter/Second',
    purchased: false,
    visible: true
  },
  {
    id: 'life-seeder',
    name: 'Life Seeder',
    description: 'Cultivates the planet to enhance life generation.',
    cost: {
      energy: 40,
      matter: 20,
      technology: 15
    },
    effect: '+0.05 Life/Second',
    purchased: false,
    visible: true
  },
  {
    id: 'advanced-collector',
    name: 'Advanced Energy Collector',
    description: 'An advanced collector that significantly increases energy production.',
    cost: {
      matter: 75,
      technology: 25
    },
    effect: '+0.5 Energy/Second',
    purchased: false,
    visible: false,
    unlockRequirement: 'basic-collector'
  },
  {
    id: 'tech-research',
    name: 'Technology Research Lab',
    description: 'A dedicated lab to boost technology research.',
    cost: {
      energy: 100,
      matter: 50
    },
    effect: '+0.05 Technology/Second',
    purchased: false,
    visible: false,
    unlockRequirement: 'matter-extractor'
  },
  // Council unlocked upgrades
  {
    id: 'advanced-shields',
    name: 'Advanced Shield Technology',
    description: 'Protective energy shields that boost resource production by deflecting harmful radiation.',
    cost: {
      energy: 250,
      technology: 100
    },
    effect: '+20% to all resource production',
    purchased: false,
    visible: false
  },
  {
    id: 'life-accelerator',
    name: 'Life Acceleration System',
    description: 'Advanced biodome technology that dramatically increases life production.',
    cost: {
      energy: 200,
      matter: 100,
      life: 50
    },
    effect: '+0.3 Life/Second',
    purchased: false,
    visible: false
  },
  {
    id: 'quantum-computer',
    name: 'Quantum Computing Network',
    description: 'A revolutionary computing system that enhances all technological research.',
    cost: {
      energy: 350,
      matter: 150,
      technology: 125
    },
    effect: '+0.2 Technology/Second and +10% to all other resources',
    purchased: false,
    visible: false
  }
];

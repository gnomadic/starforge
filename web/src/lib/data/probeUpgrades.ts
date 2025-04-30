
import { ProbeUpgrade } from '../types/combatTypes';

export const initialProbeUpgrades: ProbeUpgrade[] = [
  {
    id: 'reinforced-hull',
    name: 'Reinforced Hull',
    description: 'Strengthens the probe hull, increasing health significantly.',
    healthBonus: 20,
    attackBonus: 0,
    defenseBonus: 5,
    weight: 3,
    purchased: false,
    cost: {
      matter: 50,
      energy: 30
    }
  },
  {
    id: 'laser-array',
    name: 'Laser Array',
    description: 'Powerful laser weapons that increase attack capability.',
    healthBonus: 0,
    attackBonus: 15,
    defenseBonus: 0,
    weight: 2,
    purchased: false,
    cost: {
      energy: 45,
      technology: 25
    }
  },
  {
    id: 'energy-shields',
    name: 'Energy Shields',
    description: 'Deflective shields that provide superior defense.',
    healthBonus: 5,
    attackBonus: 0,
    defenseBonus: 15,
    weight: 3,
    purchased: false,
    cost: {
      energy: 40,
      technology: 30
    }
  },
  {
    id: 'targeting-system',
    name: 'Advanced Targeting System',
    description: 'Improves attack precision.',
    healthBonus: 0,
    attackBonus: 10,
    defenseBonus: 0,
    weight: 1,
    purchased: false,
    cost: {
      technology: 35,
      matter: 20
    }
  },
  {
    id: 'lightweight-alloys',
    name: 'Lightweight Alloys',
    description: 'Special alloys that reduce the weight of all upgrades by 20%.',
    healthBonus: 0,
    attackBonus: 0,
    defenseBonus: 0,
    weight: 1,
    purchased: false,
    cost: {
      matter: 60,
      technology: 40
    }
  },
  {
    id: 'balanced-systems',
    name: 'Balanced Systems',
    description: 'A balanced upgrade that improves all stats moderately.',
    healthBonus: 8,
    attackBonus: 8,
    defenseBonus: 8,
    weight: 4,
    purchased: false,
    cost: {
      energy: 35,
      matter: 35,
      technology: 35
    }
  }
];

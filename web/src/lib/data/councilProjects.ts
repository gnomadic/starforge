
import { CouncilProject } from '../types/gameTypes';

export const initialCouncilProjects: CouncilProject[] = [
  {
    id: 'planetary-shield',
    name: 'Planetary Shield Network',
    description: 'A network of energy shields to protect planets from cosmic threats and radiation.',
    resourceRequirements: {
      energy: 200,
      matter: 100,
      technology: 50
    },
    currentProgress: {
      energy: 0,
      matter: 0,
      technology: 0
    },
    completed: false,
    unlockUpgradeId: 'advanced-shields',
    timeEstimate: '3 cycles',
    importance: 'high'
  },
  {
    id: 'biodome-project',
    name: 'Biodome Cultivation',
    description: 'Advanced biodomes to accelerate life growth and sustainability across planets.',
    resourceRequirements: {
      energy: 150,
      matter: 75,
      life: 100
    },
    currentProgress: {
      energy: 0,
      matter: 0,
      life: 0
    },
    completed: false,
    unlockUpgradeId: 'life-accelerator',
    timeEstimate: '2 cycles',
    importance: 'medium'
  },
  {
    id: 'quantum-research',
    name: 'Quantum Research Initiative',
    description: 'Cutting-edge research into quantum mechanics to enhance technological advancement.',
    resourceRequirements: {
      energy: 300,
      technology: 100,
      matter: 50
    },
    currentProgress: {
      energy: 0,
      technology: 0,
      matter: 0
    },
    completed: false,
    unlockUpgradeId: 'quantum-computer',
    timeEstimate: '5 cycles',
    importance: 'high'
  }
];

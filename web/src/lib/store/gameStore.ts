
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  initialResources, 
  initialPlanets, 
  initialUpgrades, 
  initialVentures,
  initialArtifacts,
  initialProbeUpgrades,
  initialEnemies,
  initialMarketListings,
  initialMarketStats
} from '../planetData';
import { initialCouncilProjects } from '../data/councilProjects';

// Import all slices
import { createResourcesSlice, ResourcesState } from './slices/resourcesSlice';
import { createPlanetsSlice, PlanetsState } from './slices/planetsSlice';
import { createUpgradesSlice, UpgradesState } from './slices/upgradesSlice';
import { createCouncilSlice, CouncilState } from './slices/councilSlice';
import { createVenturesSlice, VenturesState } from './slices/venturesSlice';
import { createCombatSlice, CombatState } from './slices/combatSlice';
import { createMarketSlice, MarketState } from './slices/marketSlice';
import { createCommonSlice, CommonState } from './slices/commonSlice';

// Define the combined state type
export type GameState = ResourcesState & 
  PlanetsState & 
  UpgradesState & 
  CouncilState & 
  VenturesState & 
  CombatState &
  MarketState &
  CommonState;

// Create the store with all slices
export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      // Make initial data available to all slices for reset functionality
      initialResources,
      initialPlanets,
      initialUpgrades,
      initialCouncilProjects,
      initialVentures,
      initialArtifacts,
      initialProbeUpgrades,
      initialEnemies,
      initialMarketListings,
      initialMarketStats,
      
      // Combine all slices
      ...createResourcesSlice(set, get),
      ...createPlanetsSlice(set, get),
      ...createUpgradesSlice(set, get),
      ...createCouncilSlice(set, get),
      ...createVenturesSlice(set, get),
      ...createCombatSlice(set, get),
      ...createMarketSlice(set, get),
      ...createCommonSlice(set, get),
    }),
    {
      name: 'cosmic-collector-storage2'
    }
  )
);

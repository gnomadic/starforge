
import { PlanetStat, PlanetType } from '../types/gameTypes';

export const getPlanetColorByType = (type: string): string => {
  switch (type) {
    case 'temperate': return '#4CAF50';
    case 'rocky': return '#795548';
    case 'gaseous': return '#9C27B0';
    case 'oceanic': return '#03A9F4';
    case 'barren': return '#9E9E9E';
    case 'ice': return '#90CAF9';
    default: return '#607D8B';
  }
};

export const getRegenerationDescription = (level: number, maxLevel: number): string => {
  if (level === 0) return 'Undeveloped';
  if (level < maxLevel * 0.3) return 'Basic development';
  if (level < maxLevel * 0.6) return 'Moderate development';
  if (level < maxLevel) return 'Advanced development';
  return 'Fully developed';
};

export const generatePlanetStats = (type: string): {
  temperature: PlanetStat;
  water: PlanetStat;
  biomass: PlanetStat;
  atmosphere: PlanetStat;
  density: PlanetStat;
} => {
  let temperature, water, biomass, atmosphere, density;

  switch (type) {
    case 'temperate':
      temperature = { value: 0.5, name: 'Temperature', description: 'Perfect for life', color: 'text-orange-500' };
      water = { value: 0.7, name: 'Water', description: 'Abundant oceans and freshwater', color: 'text-blue-500' };
      biomass = { value: 0.8, name: 'Biomass', description: 'Rich with life', color: 'text-green-500' };
      atmosphere = { value: 0.9, name: 'Atmosphere', description: 'Breathable atmosphere', color: 'text-cyan-500' };
      density = { value: 0.6, name: 'Density', description: 'Rocky planet with metal core', color: 'text-gray-500' };
      break;
    case 'rocky':
      temperature = { value: 0.8, name: 'Temperature', description: 'Hot and harsh', color: 'text-red-500' };
      water = { value: 0.1, name: 'Water', description: 'Very dry', color: 'text-blue-300' };
      biomass = { value: 0.1, name: 'Biomass', description: 'Barely any life', color: 'text-green-300' };
      atmosphere = { value: 0.3, name: 'Atmosphere', description: 'Thin atmosphere', color: 'text-cyan-300' };
      density = { value: 0.7, name: 'Density', description: 'Dense rocky core', color: 'text-gray-700' };
      break;
    case 'gaseous':
      temperature = { value: 0.2, name: 'Temperature', description: 'Extremely cold', color: 'text-blue-700' };
      water = { value: 0.0, name: 'Water', description: 'No surface water', color: 'text-blue-200' };
      biomass = { value: 0.0, name: 'Biomass', description: 'No life detected', color: 'text-green-200' };
      atmosphere = { value: 0.95, name: 'Atmosphere', description: 'Thick, toxic atmosphere', color: 'text-purple-500' };
      density = { value: 0.2, name: 'Density', description: 'Gaseous with a small core', color: 'text-gray-400' };
      break;
    case 'ice':
      temperature = { value: 0.1, name: 'Temperature', description: 'Frozen surface', color: 'text-blue-400' };
      water = { value: 0.9, name: 'Water', description: 'Icy surface, liquid ocean underneath', color: 'text-blue-600' };
      biomass = { value: 0.2, name: 'Biomass', description: 'Simple organisms in the water', color: 'text-green-400' };
      atmosphere = { value: 0.4, name: 'Atmosphere', description: 'Thin, cold atmosphere', color: 'text-cyan-400' };
      density = { value: 0.5, name: 'Density', description: 'Icy crust with a rocky core', color: 'text-gray-500' };
      break;
    case 'oceanic':
      temperature = { value: 0.5, name: 'Temperature', description: 'Mild temperature', color: 'text-yellow-400' };
      water = { value: 0.95, name: 'Water', description: 'Almost entirely water', color: 'text-blue-600' };
      biomass = { value: 0.6, name: 'Biomass', description: 'Abundant marine life', color: 'text-green-600' };
      atmosphere = { value: 0.7, name: 'Atmosphere', description: 'Humid atmosphere', color: 'text-cyan-500' };
      density = { value: 0.4, name: 'Density', description: 'Ocean world with small rocky core', color: 'text-gray-400' };
      break;
    case 'barren':
      temperature = { value: 0.7, name: 'Temperature', description: 'Harsh temperature', color: 'text-red-400' };
      water = { value: 0.05, name: 'Water', description: 'Almost no water', color: 'text-blue-200' };
      biomass = { value: 0.0, name: 'Biomass', description: 'Lifeless', color: 'text-green-200' };
      atmosphere = { value: 0.1, name: 'Atmosphere', description: 'Nearly no atmosphere', color: 'text-cyan-200' };
      density = { value: 0.6, name: 'Density', description: 'Solid rocky planet', color: 'text-gray-600' };
      break;
    default:
      temperature = { value: 0.5, name: 'Temperature', description: 'Average temperature', color: 'text-yellow-500' };
      water = { value: 0.5, name: 'Water', description: 'Moderate water content', color: 'text-blue-500' };
      biomass = { value: 0.5, name: 'Biomass', description: 'Some life presence', color: 'text-green-500' };
      atmosphere = { value: 0.5, name: 'Atmosphere', description: 'Standard atmosphere', color: 'text-cyan-500' };
      density = { value: 0.5, name: 'Density', description: 'Normal density', color: 'text-gray-500' };
  }

  return {
    temperature,
    water,
    biomass,
    atmosphere,
    density
  };
};

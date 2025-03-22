
import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Zap, 
  Box, 
  Leaf, 
  Cpu, 
  ArrowUpCircle,
  Thermometer,
  Droplets,
  TreeDeciduous, // Changed from Tree to TreeDeciduous
  Wind,
  Circle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PlanetDetails = () => {
  const selectedPlanetId = useGameStore(state => state.selectedPlanetId);
  const planets = useGameStore(state => state.planets);
  const regeneratePlanet = useGameStore(state => state.regeneratePlanet);

  const planet = selectedPlanetId ? planets.find(p => p.id === selectedPlanetId) : null;
  if (!planet) return null;

  return (
    <div className="cosmic-panel p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">{planet.name}</h2>
        <p className="text-muted-foreground">{planet.description}</p>
      </div>

      {/* Planet Stats */}
      {planet.stats && (
        <div className="space-y-4">
          <h3 className="font-semibold">Planet Stats</h3>
          <div className="space-y-3">
            {Object.entries(planet.stats).map(([key, stat]) => (
              <div key={key} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {key === 'temperature' && <Thermometer className="h-4 w-4" />}
                    {key === 'water' && <Droplets className="h-4 w-4" />}
                    {key === 'biomass' && <TreeDeciduous className="h-4 w-4" />} {/* Changed Tree to TreeDeciduous */}
                    {key === 'atmosphere' && <Wind className="h-4 w-4" />}
                    {key === 'density' && <Circle className="h-4 w-4" />}
                    <span className="text-sm font-medium">{stat.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(stat.value * 100)}%
                  </span>
                </div>
                <Progress value={stat.value * 100} className="h-2" />
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resource Multipliers */}
      <div className="space-y-4">
        <h3 className="font-semibold">Resource Generation</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.energy > 1 ? "text-yellow-500" : "text-muted-foreground"
          )}>
            <Zap className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.energy}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.matter > 1 ? "text-slate-500" : "text-muted-foreground"
          )}>
            <Box className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.matter}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.life > 1 ? "text-green-500" : "text-muted-foreground"
          )}>
            <Leaf className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.life}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.technology > 1 ? "text-blue-500" : "text-muted-foreground"
          )}>
            <Cpu className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.technology}</span>
          </div>
        </div>
      </div>

      {/* Regeneration Level */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Regeneration Level</h3>
          <span className="text-sm text-muted-foreground">
            {planet.regenerationLevel} / {planet.maxRegenerationLevel}
          </span>
        </div>
        <Progress 
          value={(planet.regenerationLevel / planet.maxRegenerationLevel) * 100} 
          className="h-2" 
        />
        {planet.regenerationLevel < planet.maxRegenerationLevel && (
          <Button
            onClick={() => regeneratePlanet(planet.id)}
            className="w-full"
            variant="default"
          >
            <ArrowUpCircle className="h-4 w-4 mr-2" />
            Regenerate Planet
          </Button>
        )}
      </div>
    </div>
  );
};

export default PlanetDetails;

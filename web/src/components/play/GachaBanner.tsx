
import React, { useState } from 'react';
import { useGameStore } from '@/lib/gameState';
import { Button } from '@/components/ui/button';
import { PlanetType, getPlanetColorByType } from '@/lib/planetData';
import { Sparkles, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/components/ui/use-toast";
import { Progress } from '@/components/ui/progress';

const GachaBanner: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [discoveredPlanetId, setDiscoveredPlanetId] = useState<string | null>(null);
  
  const planets = useGameStore(state => state.planets);
  const resources = useGameStore(state => state.resources);
  const pullGacha = useGameStore(state => state.pullGacha);
  const selectPlanet = useGameStore(state => state.selectPlanet);
  
  const undiscoveredPlanets = planets.filter(p => !p.discovered);
  
  const gachaCost = {
    energy: 50,
    matter: 30,
    life: 10,
    technology: 5
  };
  
  const canAffordGacha = () => {
    return resources.every(resource => {
      const cost = gachaCost[resource.id] || 0;
      return resource.amount >= cost;
    });
  };
  
  const handleGachaPull = () => {
    if (!canAffordGacha()) {
      toast({
        title: "Not enough resources",
        description: "You don't have enough resources for a gacha pull",
        variant: "destructive"
      });
      return;
    }
    
    if (undiscoveredPlanets.length === 0) {
      toast({
        title: "No more planets",
        description: "You've discovered all available planets!",
        variant: "default"
      });
      return;
    }
    
    setIsAnimating(true);
    
    // Simulate discovery animation
    setTimeout(() => {
      const planetId = pullGacha();
      
      if (planetId) {
        setDiscoveredPlanetId(planetId);
        setTimeout(() => {
          selectPlanet(planetId);
          setIsAnimating(false);
          setDiscoveredPlanetId(null);
        }, 3000); // Show the planet for 3 seconds before resetting
      } else {
        setIsAnimating(false);
      }
    }, 1500); // Animation runs for 1.5 seconds
  };
  
  const discoveredPlanet = discoveredPlanetId 
    ? planets.find(p => p.id === discoveredPlanetId) 
    : null;
  
  return (
    <div className="cosmic-panel overflow-hidden relative">
      {/* Background with stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-transparent opacity-40">
        <div className="stars-bg"></div>
      </div>
      
      <div className="relative p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-1 flex items-center">
          <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
          Planet Discovery
          <Sparkles className="h-5 w-5 text-yellow-400 ml-2" />
        </h2>
        
        <p className="text-sm text-center text-muted-foreground mb-4">
          Discover new planets to expand your cosmic collection!
        </p>
        
        {/* Animation container */}
        <div className={cn(
          "min-h-[250px] w-full flex items-center justify-center mb-4 transition-all duration-1000",
          isAnimating && !discoveredPlanet ? "animate-pulse-soft" : ""
        )}>
          {discoveredPlanet ? (
            <div className="animate-scale-in flex flex-col items-center w-full max-w-md">
              <div 
                className="h-20 w-20 rounded-full mb-4 animate-float"
                style={{ 
                  backgroundColor: discoveredPlanet.color,
                  backgroundImage: `radial-gradient(circle at 30% 30%, ${discoveredPlanet.color}80 0%, ${discoveredPlanet.color} 70%)` 
                }}
              ></div>
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-primary">{discoveredPlanet.name}</h3>
                <p className="text-sm text-muted-foreground capitalize">{discoveredPlanet.type} planet</p>
                <p className="text-xs text-muted-foreground mt-1">{discoveredPlanet.description}</p>
              </div>
              
              {/* Display a few key stats */}
              <div className="w-full space-y-2">
                {Object.values(discoveredPlanet.stats).slice(0, 3).map((stat) => (
                  <div key={stat.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span style={{ color: stat.color }}>{stat.name}</span>
                      <span>{stat.value}/100</span>
                    </div>
                    <Progress value={stat.value} className="h-1.5" style={{ backgroundColor: `${stat.color}40` }}>
                      <div className="h-full" style={{ backgroundColor: stat.color }}></div>
                    </Progress>
                  </div>
                ))}
              </div>
            </div>
          ) : isAnimating ? (
            <div className="text-center">
              <div className="h-20 w-20 rounded-full bg-secondary mx-auto mb-2 animate-pulse"></div>
              <p className="text-muted-foreground">Searching the cosmos...</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                {undiscoveredPlanets.length > 0 
                  ? `${undiscoveredPlanets.length} undiscovered planets remaining` 
                  : "All planets discovered!"
                }
              </p>
            </div>
          )}
        </div>
        
        {/* Cost display */}
        <div className="grid grid-cols-4 gap-2 mb-4 w-full max-w-xs">
          {Object.entries(gachaCost).map(([resourceId, cost]) => {
            const resource = resources.find(r => r.id === resourceId);
            const hasEnough = resource && resource.amount >= cost;
            
            return (
              <div 
                key={resourceId}
                className={cn(
                  "text-center p-1 rounded text-xs",
                  hasEnough ? "bg-secondary/40" : "bg-destructive/40"
                )}
              >
                <div>{resourceId}</div>
                <div>{cost}</div>
              </div>
            );
          })}
        </div>
        
        <Button
          onClick={handleGachaPull}
          disabled={isAnimating || undiscoveredPlanets.length === 0 || !canAffordGacha()}
          className="w-full max-w-xs"
          variant="default"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Discover New Planet
        </Button>
        
        {undiscoveredPlanets.length === 0 && (
          <p className="text-xs text-muted-foreground mt-2">
            You've discovered all available planets!
          </p>
        )}
      </div>
    </div>
  );
};

export default GachaBanner;

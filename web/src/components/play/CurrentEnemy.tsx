
import React from 'react';
import { useGameStore } from '@/lib/gameState';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Heart, Shield, Swords } from 'lucide-react';
import { cn } from '@/lib/utils';

const CurrentEnemy = () => {
  const { enemy } = useGameStore(state => ({
    enemy: state.currentEnemy
  }));

  if (!enemy) {
    return <div className="cosmic-panel p-4">No enemy found</div>;
  }

  const healthPercentage = (enemy.currentHealth / enemy.maxHealth) * 100;

  return (
    <div className="cosmic-panel p-4">
      <h2 className="text-lg font-semibold mb-3">Current Threat</h2>
      
      <div className={cn(
        "rounded-lg overflow-hidden border transition-opacity",
        enemy.defeated ? "opacity-50 border-green-500/50" : "border-destructive/50"
      )}>
        <AspectRatio ratio={16 / 9}>
          <img 
            src={enemy.imageUrl} 
            alt={enemy.name}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        
        <div className="p-3">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-lg">{enemy.name}</h3>
            {enemy.defeated && (
              <Badge variant="secondary" className="bg-green-500/20 text-green-500 border-green-500/30">
                Defeated
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">{enemy.description}</p>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Health</span>
                </div>
                <span className="text-sm font-mono">{Math.ceil(enemy.currentHealth)} / {enemy.maxHealth}</span>
              </div>
              <Progress value={healthPercentage} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary/20 rounded p-2">
                <div className="flex items-center space-x-1 mb-1">
                  <Swords className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Attack</span>
                </div>
                <span className="text-xl font-semibold">{enemy.attack}</span>
              </div>
              
              <div className="bg-secondary/20 rounded p-2">
                <div className="flex items-center space-x-1 mb-1">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Defense</span>
                </div>
                <span className="text-xl font-semibold">{enemy.defense}</span>
              </div>
            </div>
          </div>
          
          {enemy.defeated && (
            <div className="mt-3 p-2 bg-secondary/30 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Rewards Collected</h4>
              <div className="flex flex-wrap gap-1">
                {Object.entries(enemy.rewards.resources).map(([resourceId, amount]) => (
                  <Badge key={resourceId} variant="outline" className="text-xs">
                    {resourceId}: +{amount}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentEnemy;

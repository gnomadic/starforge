
import React from 'react';
import { Resource, ResourceType } from '@/lib/types/gameTypes';
import { useGameStore } from '@/lib/gameState';
import { cn } from '@/lib/utils';
import { 
  Sun, 
  MountainSnow, 
  Sprout, 
  Cpu, 
  Plus 
} from 'lucide-react';

interface ResourcePanelProps {
  className?: string;
}

const ResourcePanel: React.FC<ResourcePanelProps> = ({ className }) => {
  const resources = useGameStore(state => state.resources);
  const collectResource = useGameStore(state => state.collectResource);

  const getResourceIcon = (resource: Resource) => {
    switch (resource.id) {
      case 'energy': return <Sun className={cn("h-4 w-4", resource.color)} />;
      case 'matter': return <MountainSnow className={cn("h-4 w-4", resource.color)} />;
      case 'life': return <Sprout className={cn("h-4 w-4", resource.color)} />;
      case 'technology': return <Cpu className={cn("h-4 w-4", resource.color)} />;
      default: return null;
    }
  };

  const handleResourceClick = (resource: Resource) => {
    collectResource(resource.id as ResourceType, 1);
  };

  return (
    <div className={cn("bg-secondary/60 rounded-lg p-2", className)}>
      <div className="grid grid-cols-4 gap-2">
        {resources.map(resource => (
          <div
            key={resource.id}
            className={cn(
              "bg-secondary/40 rounded-lg p-2 flex items-center justify-between transition-all duration-300",
              "hover:bg-secondary/60"
            )}
          >
            <div className="flex items-center">
              {getResourceIcon(resource)}
              <div className="ml-2">
                <div className="text-xs font-medium">{resource.name}</div>
                <div className="text-sm font-semibold">{Math.floor(resource.amount)}</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button 
                onClick={() => handleResourceClick(resource)}
                className="bg-primary/20 hover:bg-primary/30 rounded-full p-1 transition-colors"
              >
                <Plus className="h-3 w-3" />
              </button>
              <div className="text-xs text-muted-foreground mt-1">
                {resource.perSecond > 0 
                  ? `+${resource.perSecond.toFixed(1)}/s` 
                  : "0/s"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePanel;

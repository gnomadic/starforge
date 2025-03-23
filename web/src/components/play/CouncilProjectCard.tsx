
import React from 'react';
import { CouncilProject, ResourceType } from '@/lib/types/gameTypes';
import { useGameStore } from '@/lib/gameState';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Leaf, 
  Cpu, 
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CouncilProjectCardProps {
  project: CouncilProject;
}

const CouncilProjectCard: React.FC<CouncilProjectCardProps> = ({ project }) => {
  const resources = useGameStore(state => state.resources);
  const contributeToProject = useGameStore(state => state.contributeToProject);
  
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-blue-500';
    }
  };
  
  const getProjectIcon = (projectId: string) => {
    switch (projectId) {
      case 'planetary-shield': return <Shield className="h-6 w-6 text-blue-400" />;
      case 'biodome-project': return <Leaf className="h-6 w-6 text-green-400" />;
      case 'quantum-research': return <Cpu className="h-6 w-6 text-purple-400" />;
      default: return <AlertTriangle className="h-6 w-6 text-yellow-400" />;
    }
  };
  
  const getResourceProgressPercentage = (resourceId: string) => {
    const required = project.resourceRequirements[resourceId] || 0;
    const current = project.currentProgress[resourceId] || 0;
    return required > 0 ? Math.min(100, (current / required) * 100) : 0;
  };
  
  const canContribute = (resourceId: string, amount: number) => {
    const resource = resources.find(r => r.id === resourceId);
    return resource && resource.amount >= amount;
  };
  
  const handleContribute = (resourceId: string) => {
    // Contribute 10 resources at a time
    const amount = 10;
    if (canContribute(resourceId, amount)) {
      contributeToProject(project.id, resourceId as ResourceType, amount);
    }
  };
  
  return (
    <div className={cn(
      "border rounded-lg p-4 transition-all mb-4",
      project.completed 
        ? "bg-green-950/20 border-green-500/30" 
        : "bg-secondary/10 border-secondary/30 hover:border-secondary/50"
    )}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {getProjectIcon(project.id)}
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{project.timeEstimate}</span>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex items-center space-x-2 mb-1">
              <span className={cn("text-xs font-medium", getImportanceColor(project.importance))}>
                {project.importance.toUpperCase()} PRIORITY
              </span>
              {project.completed && (
                <span className="flex items-center text-xs text-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" /> COMPLETED
                </span>
              )}
            </div>
            
            <div className="space-y-3 mt-4">
              {Object.entries(project.resourceRequirements).map(([resourceId, required]) => {
                const progress = project.currentProgress[resourceId] || 0;
                const resourceName = resources.find(r => r.id === resourceId)?.name || resourceId;
                const progressPercentage = getResourceProgressPercentage(resourceId);
                const isComplete = progress >= required;
                
                return (
                  <div key={resourceId} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span>{resourceName}</span>
                      <span className={isComplete ? "text-green-500" : ""}>{Math.floor(progress)} / {required}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress 
                        value={progressPercentage} 
                        className={cn(
                          "h-2", 
                          isComplete ? "bg-green-950/30" : "bg-secondary/30"
                        )}
                        // indicatorClassName={isComplete ? "bg-green-500" : ""}
                      />
                      {!project.completed && !isComplete && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 px-2 py-0 text-xs"
                          disabled={!canContribute(resourceId, 10)}
                          onClick={() => handleContribute(resourceId)}
                        >
                          +10
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilProjectCard;

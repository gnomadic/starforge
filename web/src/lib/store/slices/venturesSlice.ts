
import { Venture } from '../../types/ventureTypes';
import { Artifact } from '../../types/ventureTypes';
import { initialVentures } from '../../data/ventures';
import { initialArtifacts } from '../../data/artifacts';
import { toast } from "react-toastify";

export interface VenturesState {
  ventures: Venture[];
  artifacts: Artifact[];
  startVenture: (ventureId: string, planetId: string) => void;
  checkVentureCompletion: () => void;
}

export const createVenturesSlice = (set: any, get: any): VenturesState => ({
  ventures: [...initialVentures],
  artifacts: [...initialArtifacts],
  
  startVenture: (ventureId, planetId) => {
    const ventures = [...get().ventures];
    const resources = [...get().resources];
    
    const ventureIndex = ventures.findIndex(v => v.id === ventureId);
    if (ventureIndex === -1) return;
    
    const venture = ventures[ventureIndex];
    if (venture.status === 'active') {
      toast.warning(JSON.stringify({
        title: "Venture already active",
        description: "This venture is already in progress.",
        variant: "destructive"
      }));
      return;
    }
    
    // Check if we have enough resources
    let canAfford = true;
    for (const [resourceId, cost] of Object.entries(venture.resourceRequirements)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex === -1 || resources[resourceIndex].amount < Number(cost)) {
        canAfford = false;
        break;
      }
    }
    
    if (!canAfford) {
      toast.warning(JSON.stringify({
        title: "Cannot start venture",
        description: "You don't have enough resources for this venture.",
        variant: "destructive"
      }));
      return;
    }
    
    // Deduct resources
    for (const [resourceId, cost] of Object.entries(venture.resourceRequirements)) {
      const resourceIndex = resources.findIndex(r => r.id === resourceId);
      if (resourceIndex !== -1) {
        resources[resourceIndex].amount -= Number(cost);
      }
    }
    
    // Update venture
    ventures[ventureIndex] = {
      ...venture,
      status: 'active',
      startTime: Date.now(),
      targetPlanetId: planetId
    };
    
    set({ 
      ventures,
      resources 
    });
    
    toast.warning(JSON.stringify({
      title: "Venture started",
      description: `${venture.name} venture has been started on the selected planet.`,
    }));
  },
  
  checkVentureCompletion: () => {
    const currentTime = Date.now();
    const ventures = [...get().ventures];
    const artifacts = [...get().artifacts];
    let ventureCompleted = false;
    
    ventures.forEach((venture, index) => {
      if (venture.status === 'active' && venture.startTime) {
        const elapsedTime = (currentTime - venture.startTime) / 1000;
        
        if (elapsedTime >= venture.duration) {
          ventureCompleted = true;
          
          // Determine success based on success rate
          const success = Math.random() < venture.successRate;
          
          if (success) {
            // Select a random artifact from possible rewards
            const rewardIndex = Math.floor(Math.random() * venture.artifactRewards.length);
            const artifactId = venture.artifactRewards[rewardIndex];
            
            // Mark artifact as discovered
            const artifactIndex = artifacts.findIndex(a => a.id === artifactId);
            if (artifactIndex !== -1) {
              artifacts[artifactIndex] = {
                ...artifacts[artifactIndex],
                discovered: true
              };
              
              toast.warning(JSON.stringify({
                title: "Venture completed successfully!",
                description: `Your ${venture.name} venture discovered the ${artifacts[artifactIndex].name}!`,
              }));
            }
            
            ventures[index] = {
              ...venture,
              status: 'completed',
            };
          } else {
            ventures[index] = {
              ...venture,
              status: 'failed',
            };
            
            toast.warning(JSON.stringify({
              title: "Venture failed",
              description: `Your ${venture.name} venture failed to discover anything.`,
              variant: "destructive"
            }));
          }
        }
      }
    });
    
    if (ventureCompleted) {
      set({ 
        ventures,
        artifacts 
      });
    }
  }
});

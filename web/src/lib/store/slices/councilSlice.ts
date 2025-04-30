
import { CouncilProject } from '../../types/gameTypes';
import { initialCouncilProjects } from '../../data/councilProjects';
import { ResourceType } from '../../types/gameTypes';
import { toast } from 'react-toastify';

export interface CouncilState {
  councilProjects: CouncilProject[];
  contributeToProject: (projectId: string, resourceId: ResourceType, amount: number) => void;
}

export const createCouncilSlice = (set: any, get: any): CouncilState => ({
  councilProjects: [...initialCouncilProjects],
  
  contributeToProject: (projectId, resourceId, amount) => {
    const project: CouncilProject | undefined = get().councilProjects.find((p: CouncilProject) => p.id === projectId);
    if (!project || project.completed) return;
    
    const resources = [...get().resources];
    const resourceIndex = resources.findIndex(r => r.id === resourceId);
    
    if (resourceIndex === -1 || resources[resourceIndex].amount < amount) {
      toast.warning(JSON.stringify({
        title: "Insufficient resources",
        description: "You don't have enough resources to contribute this amount.",
        variant: "destructive"
      }));
      return;
    }
    
    // Deduct resources
    resources[resourceIndex].amount -= amount;
    
    // Update project progress
    const councilProjects: CouncilProject[] = get().councilProjects.map((p: CouncilProject): CouncilProject => {
      if (p.id === projectId) {
        const newProgress: { [key in ResourceType]?: number } = { ...p.currentProgress };
        newProgress[resourceId] = (newProgress[resourceId] || 0) + amount;

        // Check if project is now complete
        let isComplete = true;
        for (const [reqResource, reqAmount] of Object.entries(p.resourceRequirements)) {
          if ((newProgress[reqResource as ResourceType] || 0) < (reqAmount as number)) {
            isComplete = false;
            break;
          }
        }

        // If project is complete, make the associated upgrade visible
        if (isComplete && p.unlockUpgradeId) {
          const upgrades = get().upgrades.map((u: any) => {
            if (u.id === p.unlockUpgradeId) {
              return { ...u, visible: true };
            }
            return u;
          });

          set({ upgrades });

          toast.warning(JSON.stringify({
            title: "Project completed!",
            description: `The Council's ${p.name} project has been completed! New technology is now available.`,
          }));
        }

        return {
          ...p,
          currentProgress: newProgress,
          completed: isComplete
        };
      }
      return p;
    });
    
    set({ 
      resources,
      councilProjects
    });
  }
});

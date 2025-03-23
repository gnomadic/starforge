
import { Resource, ResourceType } from '../../types/gameTypes';
import { initialResources } from '../../data/resources';

export interface ResourcesState {
  resources: Resource[];
  collectResource: (resourceId: ResourceType, amount: number) => void;
}

export const createResourcesSlice = (set: any, get: any): ResourcesState => ({
  resources: [...initialResources],
  
  collectResource: (resourceId, amount) => {
    const resources: Resource[] = get().resources.map((resource: Resource) => {
      if (resource.id === resourceId) {
        return {
          ...resource,
          amount: resource.amount + amount
        };
      }
      return resource;
    });
    
    set({ resources });
  },
});

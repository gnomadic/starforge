
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Resource } from '@/components/SupplyBar';
import { Heart, Circle, Zap, Cpu } from 'lucide-react';

// Define the initial resource values
const initialResources: Resource[] = [
  {
    type: 'life',
    amount: 100,
    icon: <Heart className="h-4 w-4 text-red-400" />,
    color: 'bg-red-950/60'
  },
  {
    type: 'matter',
    amount: 250,
    icon: <Circle className="h-4 w-4 text-blue-400" />,
    color: 'bg-blue-950/60'
  },
  {
    type: 'energy',
    amount: 75,
    icon: <Zap className="h-4 w-4 text-yellow-400" />,
    color: 'bg-yellow-950/60'
  },
  {
    type: 'technology',
    amount: 50,
    icon: <Cpu className="h-4 w-4 text-emerald-400" />,
    color: 'bg-emerald-950/60'
  }
];

// Create context with default values
interface ResourceContextProps {
  resources: Resource[];
  updateResource: (type: Resource['type'], amount: number) => void;
}

const ResourceContext = createContext<ResourceContextProps>({
  resources: initialResources,
  updateResource: () => {},
});

// Create provider component
export const ResourceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [resources, setResources] = useState<Resource[]>(initialResources);

  const updateResource = (type: Resource['type'], amount: number) => {
    setResources((prev) => 
      prev.map((resource) => 
        resource.type === type 
          ? { ...resource, amount: Math.max(0, resource.amount + amount) }
          : resource
      )
    );
  };

  return (
    <ResourceContext.Provider value={{ resources, updateResource }}>
      {children}
    </ResourceContext.Provider>
  );
};

// Create a hook for easy context consumption
export const useResources = () => useContext(ResourceContext);
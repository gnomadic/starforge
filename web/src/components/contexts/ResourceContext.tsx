
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Heart, Circle, Zap, Cpu } from 'lucide-react';
import { Supply } from '@/domain/types';
import { useReadErc20BalanceOf } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useAccount } from 'wagmi';

// Define the initial resource values
const initialResources: Supply[] = [
  { id: '1',
    type: 'life',
    amount: 0,
    icon: <Heart className="h-4 w-4 text-red-400" />,
    color: 'bg-red-950/60'
  },
  { id: '2',
    type: 'matter',
    amount: 250,
    icon: <Circle className="h-4 w-4 text-blue-400" />,
    color: 'bg-blue-950/60'
  },
  { id: '3',
    type: 'energy',
    amount: 75,
    icon: <Zap className="h-4 w-4 text-yellow-400" />,
    color: 'bg-yellow-950/60'
  },
  { id: '4',
    type: 'technology',
    amount: 5000,
    icon: <Cpu className="h-4 w-4 text-emerald-400" />,
    color: 'bg-emerald-950/60'
  }
];

// Create context with default values
interface ResourceContextProps {
  resources: Supply[];
  updateResource: (type: Supply['type'], amount: number) => void;
}

const ResourceContext = createContext<ResourceContextProps>({
  resources: initialResources,
  updateResource: () => {},
});

// Create provider component
export const ResourceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [resources, setResources] = useState<Supply[]>(initialResources);

  const { deploy } = useDeployment();
  const { address } = useAccount();
  

  const { data: lifeBalance, error: lifeError } = useReadErc20BalanceOf({
    address: deploy.LifeToken,
    args: [address ? address : "0x"],
  }); 

  const { data: energyBalance } = useReadErc20BalanceOf({
    address: deploy.EnergyToken,
    args: [address ? address : "0x"],
  });

  const { data: matterBalance } = useReadErc20BalanceOf({
    address: deploy.MatterToken,
    args: [address ? address : "0x"],
  });

  const { data: techBalance } = useReadErc20BalanceOf({
    address: deploy.TechToken,
    args: [address ? address : "0x"],
  });

  useEffect(() => {
    console.log(
      "lifeBalance: ", lifeBalance,
      "energyBalance: ", energyBalance,
      "matterBalance: ", matterBalance,
      "techBalance: ", techBalance
    )
    if (lifeBalance) {
      setResources((prev) => 
        prev.map((resource) => 
          resource.type === 'life' 
            ? { ...resource, amount: Number(lifeBalance) }
            : resource
        )
      );
    }
  }
  , [lifeBalance, lifeError]);

  const updateResource = (type: Supply['type'], amount: number) => {
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
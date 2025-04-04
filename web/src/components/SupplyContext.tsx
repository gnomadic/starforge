"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Heart, Circle, Zap, Cpu } from 'lucide-react';
import { Supply } from '@/domain/types';
import SupplyBar from './SupplyBar';
import { useReadErc20BalanceOf } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useAccount } from 'wagmi';

// Define the initial Supply values
const initialSupplies: Supply[] = [
  {
    id: '1',
    type: 'life',
    amount: 0,
    icon: <Heart className="h-4 w-4 text-red-400" />,
    color: 'bg-red-950/60'
  },
  {
    id: '1',
    type: 'matter',
    amount: 0,
    icon: <Circle className="h-4 w-4 text-blue-400" />,
    color: 'bg-blue-950/60'
  },
  {
    id: '1',
    type: 'energy',
    amount: 0,
    icon: <Zap className="h-4 w-4 text-yellow-400" />,
    color: 'bg-yellow-950/60'
  },
  {
    id: '1',
    type: 'technology',
    amount: 0,
    icon: <Cpu className="h-4 w-4 text-emerald-400" />,
    color: 'bg-emerald-950/60'
  }
];

// Create context with default values
interface SupplyContextProps {
  supplies: Supply[];
  updateSupply: (type: Supply['type'], amount: number) => void;
}

const SupplyContext = createContext<SupplyContextProps>({
  supplies: initialSupplies,
  updateSupply: () => {},
});

// Create provider component
export const SupplyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [supplies, setSupplies] = useState<Supply[]>(initialSupplies);


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
      updateSupply('life', Number(lifeBalance) / 1e18);
    }
    if (energyBalance) {
      updateSupply('energy', Number(energyBalance) / 1e18);
    }
    if (matterBalance) {
      updateSupply('matter', Number(matterBalance) / 1e18);
    }
    if (techBalance) {
      updateSupply('technology', Number(techBalance) / 1e18);
    }
  }
  , [lifeBalance, energyBalance, matterBalance, techBalance]);


  const updateSupply = (type: Supply['type'], amount: number) => {
    setSupplies((prev) => 
      prev.map((Supply) => 
        Supply.type === type 
          ? { ...Supply, amount: Math.max(0, Supply.amount + amount) }
          : Supply
      )
    );
  };

  return (
    <SupplyContext.Provider value={{ supplies, updateSupply }}>
      {children}
      <div className={`fixed ${false ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-50 glass rounded-lg shadow-md`}>
            <SupplyBar  />
          </div>
    </SupplyContext.Provider>
  );
};

// Create a hook for easy context consumption
export const useSupplies = () => useContext(SupplyContext);
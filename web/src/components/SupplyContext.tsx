"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Heart, Circle, Zap, Cpu, Shell, Droplet, Sun } from 'lucide-react';
import { Supply } from '@/domain/types';
import SupplyBar from './SupplyBar';
import { useReadErc20BalanceOf, useReadScenarioGetEntity, useReadSupplyEntityGetTokenAddresses, useReadSupplyEntityGetTokenBalances, useReadSupplyEntityGetTokenNames } from '@/generated';
import { useDeployment } from '@/hooks/useDeployment';
import { useAccount } from 'wagmi';
import { useScenarios } from './ScenarioContext';
import { safeb32 } from '@/lib/utils/utils';

// Define the initial Supply values
const initialSupplies: Supply[] = [
  {
    id: '1',
    type: safeb32('Bioflux'),
    amount: 0,
    emissionRate: 0.1,
    icon: <Shell className="h-4 w-4 text-red-400" />,
    color: 'bg-red-950/60',
    description: "A rare organic energy harvested from microbial blooms and ancient spores awakened during terraforming."
  },
  {
    id: '2',
    type: safeb32('Hydrocite'),
    amount: 0,
    emissionRate: 0.2,
    icon: <Droplet className="h-4 w-4 text-blue-400" />,
    color: 'bg-blue-950/60',
    description: "A crystalline form of frozen water laced with trace elements, found deep in glacial cores or comet strikes."
  },
  {
    id: '3',
    type: safeb32('Solaris Dust'),
    amount: 0,
    emissionRate: 0.15,
    icon: <Sun className="h-4 w-4 text-yellow-400" />,
    color: 'bg-yellow-950/60',
    description: "Hyper-reactive nanodust that absorbs and stores solar energy, originally used to power ancient tech."
  }
  // {
  //   id: '4',
  //   type: 'TECHNOLOGY',
  //   amount: 0,
  //   emissionRate: 0.05,
  //   icon: <Cpu className="h-4 w-4 text-emerald-400" />,
  //   color: 'bg-emerald-950/60'
  // }
];

// Create context with default values
interface SupplyContextProps {
  supplies: Supply[];
  updateSupply: (type: Supply['type'], amount: number) => void;
  sync: () => void;
  syncReady: boolean;
}

const SupplyContext = createContext<SupplyContextProps>({
  supplies: initialSupplies,
  updateSupply: () => { },
  sync: () => { },
  syncReady: true
});

// Create provider component
export const SupplyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [supplies, setSupplies] = useState<Supply[]>(initialSupplies);
  const [syncReady, setSyncReady] = useState(true);

  const { deploy } = useDeployment();
  const { address } = useAccount();
  const { scenarios } = useScenarios();

  const { data: whichEntity } = useReadScenarioGetEntity({ args: [deploy.SupplySystem], address: scenarios ? scenarios[0] : "0x0" }) 
  const { data: tokenBalances } = useReadSupplyEntityGetTokenBalances({ args: [address ? address : "0x0"], address: whichEntity })
  const { data: tokenNames } = useReadSupplyEntityGetTokenNames({ args: [], address: whichEntity })
  



  useEffect(() => {
    if (tokenNames && tokenBalances) {
      if (tokenNames.length !== tokenBalances.length) {
        console.error("Token names and addresses length mismatch");
        return;
      }

      const tokenData = tokenNames.map((name, index) => ({
        name,
        balance: tokenBalances[index],
      }));

      console.log("Token Data: ", tokenData);
      setSupplies((prev) =>
        prev.map((supply) => {
          const token = tokenData.find((t) => t.name === supply.type);
          if (token) {
            updateSupply(supply.type, Number(token.balance) / 1e18);
            // console.log("Token: ", { ...supply, address: token.address });
            // return { ...supply, address: token.address };
          }
          return supply;
        })


      );


    }


  }
    , [ tokenBalances, tokenNames]);


  const updateSupply = (type: Supply['type'], amount: number) => {
    setSupplies((prev) =>
      prev.map((Supply) =>
        Supply.type === type
          ? { ...Supply, amount: Math.max(0, amount) }
          : Supply
      )
    );
  };


  const sync = () => {
    if (syncReady) {
      console.log("Sync triggered!");
      // Here you would implement the actual sync logic
      setSyncReady(false);
    }
  };

  return (
    <SupplyContext.Provider value={{ supplies, updateSupply, sync, syncReady }}>
      {children}
      <div className={`fixed ${false ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-50 glass rounded-lg shadow-md`}>
        <SupplyBar />
      </div>
    </SupplyContext.Provider>
  );
};

// Create a hook for easy context consumption
export const useSupplies = () => useContext(SupplyContext);
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Heart, Circle, Zap, Cpu } from 'lucide-react';
import { Supply } from '@/domain/types';
import { useReadErc20BalanceOf, useReadScenarioFactoryGetActivePlayerScenarios } from '@/generated';
import { useDeployment } from '@/hooks/useDeployment';
import { useAccount } from 'wagmi';
import { Address } from 'viem';



// Create context with default values
interface ScenarioContextProps {
  scenarios: readonly Address[];
}

const ScenarioContext = createContext<ScenarioContextProps>({
  scenarios: []
});

// Create provider component
export const ScenarioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [supplies, setSupplies] = useState<Supply[]>(initialSupplies);
  // const [syncReady, setSyncReady] = useState(true);

  const [scenarios, setScenarios] = useState<readonly Address[]>([]);


  const { deploy } = useDeployment();
  const { address } = useAccount();

  const {data: scenarioData } = useReadScenarioFactoryGetActivePlayerScenarios({
    address: deploy.ScenarioFactory,
    args: [address ? address : "0x"],
  })

  // const { data: lifeBalance, error: lifeError } = useReadErc20BalanceOf({
  //   address: deploy.LifeToken,
  //   args: [address ? address : "0x"],
  // });

  // const { data: energyBalance } = useReadErc20BalanceOf({
  //   address: deploy.EnergyToken,
  //   args: [address ? address : "0x"],
  // });

  // const { data: matterBalance } = useReadErc20BalanceOf({
  //   address: deploy.MatterToken,
  //   args: [address ? address : "0x"],
  // });

  // const { data: techBalance } = useReadErc20BalanceOf({
  //   address: deploy.TechToken,
  //   args: [address ? address : "0x"],
  // });

  useEffect(() => {
    // console.log(
    //   "lifeBalance: ", lifeBalance,
    //   "energyBalance: ", energyBalance,
    //   "matterBalance: ", matterBalance,
    //   "techBalance: ", techBalance,
    //   "scenarios: ", scenarioData

    // )
    // if (lifeBalance) {
    //   updateSupply('life', Number(lifeBalance) / 1e18);

    // }
    // if (energyBalance) {
    //   updateSupply('energy', Number(energyBalance) / 1e18);
    // }
    // if (matterBalance) {
    //   updateSupply('matter', Number(matterBalance) / 1e18);
    // }
    // if (techBalance) {
    //   updateSupply('technology', Number(techBalance) / 1e18);
    // }
    if (scenarioData) {
      setScenarios(scenarioData);
    }
  }
    , [scenarioData]);

  // useEffect(() => {
  //   // set the address in the Supply from the deploy
  //   setSupplies((prev) =>
  //     prev.map((supply) => {
  //       switch (supply.type) {
  //         case 'life':
  //           return { ...supply, address: deploy.LifeToken };
  //         case 'energy':
  //           return { ...supply, address: deploy.EnergyToken };
  //         case 'matter':
  //           return { ...supply, address: deploy.MatterToken };
  //         case 'technology':
  //           return { ...supply, address: deploy.TechToken };
  //         default:
  //           return supply;
  //       }
  //     })
  //   );

  // }, [deploy]);



  // const updateSupply = (type: Supply['type'], amount: number) => {
  //   setSupplies((prev) =>
  //     prev.map((Supply) =>
  //       Supply.type === type
  //         ? { ...Supply, amount: Math.max(0, Supply.amount + amount) }
  //         : Supply
  //     )
  //   );
  // };


  // const sync = () => {
  //   if (syncReady) {
  //     console.log("Sync triggered!");
  //     // Here you would implement the actual sync logic
  //     setSyncReady(false);
  //   }
  // };

  return (
    <ScenarioContext.Provider value={{ scenarios }}>
      {children}
            <div className={`fixed ${false ? 'bottom-4 left-4' : 'bottom-6 left-6'} z-50 glass rounded-lg shadow-md`}>
              {JSON.stringify(scenarios)}
            </div>
    </ScenarioContext.Provider>
  );
};

// Create a hook for easy context consumption
export const useScenarios = () => useContext(ScenarioContext);
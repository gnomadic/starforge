"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {  useReadScenarioFactoryGetActivePlayerScenarios } from '@/generated';
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

  const [scenarios, setScenarios] = useState<readonly Address[]>([]);


  const { deploy } = useDeployment();
  const { address } = useAccount();

  const {data: scenarioData } = useReadScenarioFactoryGetActivePlayerScenarios({
    address: deploy.ScenarioFactory,
    args: [address ? address : "0x"],
  })

  useEffect(() => {

    if (scenarioData) {
      setScenarios(scenarioData);
    }
  }
    , [scenarioData]);

 


  return (
    <ScenarioContext.Provider value={{ scenarios }}>
      {children}
    </ScenarioContext.Provider>
  );
};

export const useScenarios = () => useContext(ScenarioContext);
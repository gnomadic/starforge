'use client';
import { Deployment } from '@/domain/types';
import { Deployments } from '@/domain/Deployments';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Address } from 'viem';

export const useDeployment = () => {
  const { chain } = useAccount();
  const [deploy, setDeploy] = useState<Deployment>(Deployments['base']);

  useEffect(() => {
    const chainName = chain?.name.toLowerCase().replaceAll(' ', '') ?? 'base';
    console.log('Network Change detected to: ' + chainName);
    chain?.name && Deployments.hasOwnProperty(chainName)
      ? setDeploy(Deployments[chainName])
      : setDeploy(Deployments['base']);

      updateTokens(deploy);
  }, [chain, deploy?.Planet]);

  // console.log("returning deployment: ", deploy.chain)
  return { deploy };
};


const tokens: DisplayToken[] = [];

interface DisplayToken {
  displayName: string;
  address: Address;
}

export function getTokenDisplayName(address: Address): string {
  const token = tokens.find((token) => token.address === address);
  return token ? token.displayName : address;
};

export function getTokenAddress(displayName: string): Address {
  const token = tokens.find((token) => token.displayName === displayName);
  return token ? token.address : "0x0";
};

const updateTokens = (deployment: Deployment) => {
  // useEffect(() => {

    // Clear the tokens array
    tokens.length = 0; // Clear the array
    // Populate the tokens array with the new tokens from the deployment
    tokens.push(
      // { displayName: 'life', address: deployment.LifeToken },
      // { displayName: 'matter', address: deployment.MatterToken }, 
      // { displayName: 'energy', address: deployment.EnergyToken },
      // { displayName: 'technology', address: deployment.TechToken },
    )

  // }, [deployment]);
};


// prev.map((supply) => {
//   switch (supply.type) {
//     case 'life':
//       return { ...supply, address: deploy.LifeToken };
//     case 'energy':
//       return { ...supply, address: deploy.EnergyToken };
//     case 'matter':
//       return { ...supply, address: deploy.MatterToken };
//     case 'technology':
//       return { ...supply, address: deploy.TechToken };
//     default:
//       return supply;
//   }
// })
// );
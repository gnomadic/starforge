'use client';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Deployment } from '@/domain/types';
import { Deployments } from '@/domain/Deployments';

const useDeployment = () => {
  const { chain } = useAccount();
  const [deploy, setDeploy] = useState<Deployment>(Deployments['basesep']);

  useEffect(() => {
    const chainName = chain?.name.toLowerCase().replaceAll(' ', '') ?? 'basesep';
    console.log('Network Change detected to: ' + chainName);
    chain?.name && Deployments.hasOwnProperty(chainName)
      ? setDeploy(Deployments[chainName])
      : setDeploy(Deployments['basesep']);
  }, [chain]);

  // console.log("returning deployment: ", deploy.chain)
  return { deploy };
};

export default useDeployment;

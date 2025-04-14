"use client";

import React, { useState } from 'react';
import { NFTGrid } from '@/components/codex/NFTGrid';
import UpgradePanel from '@/components/codex/UpgradePanel';
import { useReadPlanetTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import { useDeployment } from "@/hooks/useDeployment";
import { zeroAddress } from 'viem';
import PlanetCard from '@/components/codex/PlanetCard';

interface PlanetTabProps {

}

const PlanetTab: React.FC<PlanetTabProps> = ({ }) => {

  const { deploy } = useDeployment()
  const { address } = useAccount()

  const [selectedTokenId, setSelectedTokenId] = useState<bigint>(BigInt(0));
  const { data: held } = useReadPlanetTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.Planet })

  return (
    <>
      <NFTGrid
        heldTokenIds={held || []}
        setSelectedTokenId={setSelectedTokenId}
        selectedTokenId={selectedTokenId}
      />
      <div className="grid grid-cols-1  gap-8 pt-8">
        {/* <div/> */}
        {/* <div className="col-span-2"> */}
        <div>
          <PlanetCard
            selectedTokenId={BigInt(selectedTokenId)} />
        </div>
        {/* <div/> */}
        {/* <div className="order-1 lg:order-2">
          <UpgradePanel
            selectedTokenId={selectedTokenId} />
        </div> */}
      </div>
    </>
  );
};

export default PlanetTab;

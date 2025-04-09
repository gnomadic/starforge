"use client";

import React, { useState } from 'react';
import { NFTGrid } from '@/components/gallery/NFTGrid';
import UpgradePanel from '@/components/gallery/UpgradePanel';
import { useReadPlanetTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import { useDeployment } from "@/hooks/useDeployment";
import { zeroAddress } from 'viem';
import PlanetCard from '@/components/gallery/PlanetCard';

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <PlanetCard
            selectedTokenId={BigInt(selectedTokenId)} />
        </div>
        <div className="order-1 lg:order-2">
          <UpgradePanel
            selectedTokenId={selectedTokenId} />
        </div>
      </div>
    </>
  );
};

export default PlanetTab;

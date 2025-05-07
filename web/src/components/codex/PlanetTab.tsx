"use client";

import React, { useState } from 'react';
import { NFTGrid } from '@/components/codex/NFTGrid';
import { useReadPlanetTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import { useDeployment } from "@/hooks/useDeployment";
import { zeroAddress } from 'viem';
import PlanetCard from '@/components/codex/PlanetCard';
import { bigIntReplacer } from '@/domain/utils';

interface PlanetTabProps {

}

const PlanetTab: React.FC<PlanetTabProps> = ({ }) => {

  const { deploy } = useDeployment()
  const { address } = useAccount()

  const [selectedTokenId, setSelectedTokenId] = useState<bigint>(BigInt(0));
  const { data: held } = useReadPlanetTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.Planet })

  return (
    <div>
      <NFTGrid
        heldTokenIds={held || []}
        setSelectedTokenId={setSelectedTokenId}
        selectedTokenId={selectedTokenId}
      />
      <div className="grid grid-cols-1  gap-8 pt-8">
        <div>
          {held && held.length > 0 ? (
           <PlanetCard
           selectedTokenId={BigInt(selectedTokenId)} />
          ) : (
            <div className="text-muted-foreground">
              Mint your first planet to see its details here.
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default PlanetTab;

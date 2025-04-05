"use client";
import React, { useState } from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


import { NFTGrid } from '@/components/gallery/NFTGrid';
import UpgradePanel from '@/components/gallery/UpgradePanel';
import { Artifact, NFT } from '@/domain/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArtifactCard } from '@/components/ArtifactCard';
import { useReadPlanetBalanceOf, useReadPlanetStatsSystemGetStats, useReadPlanetTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import useDeployment from "@/hooks/useDeployment";
import { zeroAddress } from 'viem';
import { RarityBadge } from '@/components/gallery/RarityBadge';
import { Progress } from '@/components/ui/progress';
import MintPreview from '@/components/mint/MintPreview';
import PlanetStats from '@/components/gallery/PlanetStats';
import PlanetCard from '@/components/gallery/PlanetCard';

interface PlanetTabProps {
  // className?: string;
  // selectedIndex: bigint;

  // selectedNFT: NFT;
  // selectedTokenId: bigint;

}

// const PlanetTab: React.FC<PlanetTabProps> = ({ selectedIndex, selectedNFT, selectedTokenId }) => {

const PlanetTab: React.FC<PlanetTabProps> = ({ }) => {

  // Mock NFT data - in a real app, this would come from blockchain/API
const mockNFTs: NFT[] = [
  {
    id: 0,
    name: "Cosmic Explorer #042",
    image: "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20",
    rarity: 0,
    entropy: 78,
    stats: [15, 15, 7, 11, 10, 14],

    energy: 89,
    power: 95,
    speed: 76,

    temperature: 30,
    water: 40,
    biomass: 50,
    atmosphere: 33,
    density: 10,


    category: "Explorer",
    description: "A rare cosmic explorer with exceptional power capabilities and interstellar navigation abilities."
  },
  {
    id: 1,
    name: "Nebula Wanderer #108",
    image: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20",
    rarity: 1,
    entropy: 78,
    stats: [15, 15, 7, 11, 10, 14],


    energy: 72,
    power: 68,
    speed: 91,

    temperature: 30,
    water: 40,
    biomass: 50,
    atmosphere: 33,
    density: 10,

    category: "Wanderer",
    description: "This wanderer harnesses the energy of distant nebulas, granting it exceptional speed through cosmic terrain."
  },
  {
    id: 3,
    name: "Star Collector #217",
    image: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    rarity: 2,
    entropy: 78,
    stats: [15, 15, 7, 11, 10, 14],



    energy: 84,
    power: 63,
    speed: 79,

    temperature: 30,
    water: 40,
    biomass: 50,
    atmosphere: 33,
    density: 10,

    category: "Collector",
    description: "Specialized in collecting star fragments and cosmic dust, it converts these materials into pure energy."
  },
  {
    id: 4,
    name: "Void Traveler #355",
    image: "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    rarity: 3,
    entropy: 78,
    stats: [15, 15, 7, 11, 10, 14],


    energy: 78,
    power: 82,
    speed: 75,

    temperature: 30,
    water: 40,
    biomass: 50,
    atmosphere: 33,
    density: 10,

    category: "Traveler",
    description: "A master of void traversal, capable of opening pathways through the darkest regions of space."
  },
  {
    id: 5,
    name: "Void Traveler #355",
    image: "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    rarity: 4,
    entropy: 78,
    stats: [15, 15, 7, 11, 10, 14],


    energy: 78,
    power: 82,
    speed: 75,

    temperature: 30,
    water: 40,
    biomass: 50,
    atmosphere: 33,
    density: 10,

    category: "Traveler",
    description: "A master of void traversal, capable of opening pathways through the darkest regions of space."
  },
  {
    id: 6,
    name: "Void Traveler #355",
    image: "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    rarity: 5,
    entropy: 78,
    stats: [15, 15, 7, 11, 10, 14],


    energy: 78,
    power: 82,
    speed: 75,

    temperature: 30,
    water: 40,
    biomass: 50,
    atmosphere: 33,
    density: 10,

    category: "Traveler",
    description: "A master of void traversal, capable of opening pathways through the darkest regions of space."
  },
];

  const { deploy } = useDeployment()
  const { address } = useAccount()

    const [selectedNFT, setSelectedNFT] = useState(mockNFTs[0]);
    const [selectedTokenId, setSelectedTokenId] = useState<bigint>(BigInt(0));
    const { data: held } = useReadPlanetTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.Planet })

  // const { data: stats } = useReadPlanetStatsSystemGetStats({ args: [selectedIndex], address: deploy.PlanetStatsSystem })

  return (
    <>
      <NFTGrid
        nfts={mockNFTs}
        selectedNFT={selectedNFT}
        setSelectedNFT={setSelectedNFT}
        heldTokenIds={held || []}
        setSelectedTokenId={setSelectedTokenId}
        selectedTokenId={selectedTokenId}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        {/* NFT Details Panel */}
        <div className="lg:col-span-2 order-2 lg:order-1">

          <PlanetCard
            selectedIndex={BigInt(selectedNFT.id)}
            selectedTokenId={BigInt(selectedNFT.id)}
            selectedNFT={selectedNFT}

          />
        </div>


        <div className="order-1 lg:order-2">
          <UpgradePanel />
        </div>



      </div>
    </>
  );
};

export default PlanetTab;

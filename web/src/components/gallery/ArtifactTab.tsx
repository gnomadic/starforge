"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Artifact, NFT } from '@/domain/types';
import { ArtifactCard } from '@/components/ArtifactCard';
import { useAccount } from "wagmi";
import useDeployment from "@/hooks/useDeployment";

interface ArtifactTabProps {

}

const ArtifactTab: React.FC<ArtifactTabProps> = ({ }) => {

  const mockArtifacts: Artifact[] = [
    {
      id: 'a1',
      name: 'Nebula Shard',
      description: 'A crystallized fragment of nebula gas that enhances energy regeneration.',
      rarity: 2,
      image: 'bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30',
      boost: {
        type: 'energy',
        amount: 15
      },
      equipped: false
    },
    {
      id: 'a2',
      name: 'Star Core',
      description: 'The compressed core of a dying star, radiating with immense power.',
      rarity: 1,
      image: 'bg-gradient-to-br from-yellow-500/30 via-orange-500/30 to-red-500/30',
      boost: {
        type: 'power',
        amount: 20
      },
      equipped: true
    },
    {
      id: 'a3',
      name: 'Singularity Crystal',
      description: 'A mysterious crystal formed at the edge of a black hole, bending the laws of physics to increase speed.',
      rarity: 0,
      image: 'bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-purple-900/30',
      boost: {
        type: 'speed',
        amount: 25
      },
      equipped: false
    }
  ];

  const { deploy } = useDeployment()
  const { address } = useAccount()

  const [artifacts, setArtifacts] = useState(mockArtifacts);

  const handleEquipArtifact = (id: string) => {
    setArtifacts(prev => prev.map(a => ({
      ...a,
      equipped: a.id === id ? true : a.equipped
    })));
  };

  const handleUnequipArtifact = (id: string) => {
    setArtifacts(prev => prev.map(a => ({
      ...a,
      equipped: a.id === id ? false : a.equipped
    })));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {artifacts.map(artifact => (
          <ArtifactCard
            key={artifact.id}
            artifact={artifact}
            onEquip={handleEquipArtifact}
            onUnequip={handleUnequipArtifact}
          />
        ))}
      </div>

      {artifacts.length === 0 && (
        <Card className="bg-black/30 border-white/10 p-8 text-center">
          <p className="text-white/70">You haven&apos;t found any artifacts yet.</p>
          <p className="mt-2 text-sm text-white/50">Complete quests to discover rare artifacts!</p>
        </Card>
      )}
    </>
  );
};

export default ArtifactTab;

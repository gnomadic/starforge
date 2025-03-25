"use client";
import React, { useState } from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { NFTGrid } from '@/components/NFTGrid';
import UpgradePanel from '@/components/play/UpgradePanel';
import { Artifact } from '@/domain/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArtifactCard } from '@/components/ArtifactCard';

// Mock NFT data - in a real app, this would come from blockchain/API
const mockNFTs = [
  {
    id: 1,
    name: "Cosmic Explorer #042",
    image: "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20",
    rarity: "Legendary",
    energy: 89,
    power: 95,
    speed: 76,

    temperature: 30,
    water : 40,
    biomass : 50,
    atmosphere : 33,
    density: 10,


    category: "Explorer",
    description: "A rare cosmic explorer with exceptional power capabilities and interstellar navigation abilities."
  },
  {
    id: 2,
    name: "Nebula Wanderer #108",
    image: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20",
    rarity: "Epic",
    energy: 72,
    power: 68,
    speed: 91,

    temperature: 30,
    water : 40,
    biomass : 50,
    atmosphere : 33,
    density: 10,

    category: "Wanderer",
    description: "This wanderer harnesses the energy of distant nebulas, granting it exceptional speed through cosmic terrain."
  },
  {
    id: 3,
    name: "Star Collector #217",
    image: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    rarity: "Rare",
    energy: 84,
    power: 63,
    speed: 79,

    temperature: 30,
    water : 40,
    biomass : 50,
    atmosphere : 33,
    density: 10,

    category: "Collector",
    description: "Specialized in collecting star fragments and cosmic dust, it converts these materials into pure energy."
  },
  {
    id: 4,
    name: "Void Traveler #355",
    image: "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    rarity: "Epic",
    energy: 78,
    power: 82,
    speed: 75,

    temperature: 30,
    water : 40,
    biomass : 50,
    atmosphere : 33,
    density: 10,

    category: "Traveler",
    description: "A master of void traversal, capable of opening pathways through the darkest regions of space."
  },
];

const mockArtifacts: Artifact[] = [
  {
    id: 'a1',
    name: 'Nebula Shard',
    description: 'A crystallized fragment of nebula gas that enhances energy regeneration.',
    rarity: 'rare',
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
    rarity: 'epic',
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
    rarity: 'legendary',
    image: 'bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-purple-900/30',
    boost: {
      type: 'speed',
      amount: 25
    },
    equipped: false
  }
];

const Gallery: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = useState(mockNFTs[0]);
  const [artifacts, setArtifacts] = useState(mockArtifacts);
  const [activeTab, setActiveTab] = useState("nfts");
  
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
    <div className="min-h-screen text-foreground overflow-x-hidden">

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Your Cosmic Collection</h1>
          <p className="text-white/70">View and interact with your collected cosmic entities and artifacts.</p>
        </div>

              
        <Tabs defaultValue="nfts" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="nfts">Cosmic NFTs</TabsTrigger>
            <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
          </TabsList>



          <TabsContent value="nfts" className="mt-6">
        {/* Tab One */}
        <NFTGrid
          nfts={mockNFTs}
          selectedNFT={selectedNFT}
          setSelectedNFT={setSelectedNFT}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          {/* NFT Details Panel */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span>{selectedNFT.name}</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                    {selectedNFT.rarity}
                  </span>
                </CardTitle>
                <CardDescription>
                  {selectedNFT.category} • ID #{selectedNFT.id.toString().padStart(4, '0')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/5 relative flex items-center justify-center">
                    <div className={cn("w-3/4 h-3/4 rounded-full animate-pulse-slow absolute", selectedNFT.image)}></div>
                    <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/80 via-primary/30 to-transparent animate-float absolute"></div>
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-primary/70 to-accent animate-glow absolute"></div>
                  </div>
                  <div>
                  <h3 className="text-lg font-medium mb-4">Entropy</h3>
                    <Table>
                      <TableBody>
                        <TableRow>
                          {/* <TableCell className="text-white/70">Energy</TableCell> */}
                          <TableCell>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${selectedNFT.energy}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/70">{selectedNFT.energy}/100</span>
                          </TableCell>
                        </TableRow>
               
                      </TableBody>
                    </Table>

                    <h3 className="text-lg font-medium mb-4 mt-4">Stats</h3>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-white/70">Energy</TableCell>
                          <TableCell>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${selectedNFT.energy}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/70">{selectedNFT.energy}/100</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white/70">Power</TableCell>
                          <TableCell>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-accent h-2 rounded-full"
                                style={{ width: `${selectedNFT.power}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/70">{selectedNFT.power}/100</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white/70">Speed</TableCell>
                          <TableCell>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-blue-400 h-2 rounded-full"
                                style={{ width: `${selectedNFT.speed}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/70">{selectedNFT.speed}/100</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white/70">Speed</TableCell>
                          <TableCell>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-blue-400 h-2 rounded-full"
                                style={{ width: `${selectedNFT.speed}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/70">{selectedNFT.speed}/100</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white/70">Speed</TableCell>
                          <TableCell>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-blue-400 h-2 rounded-full"
                                style={{ width: `${selectedNFT.speed}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/70">{selectedNFT.speed}/100</span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    {/* <div className="mt-6"> */}
                      {/* <h3 className="text-lg font-medium mb-2">Description</h3>
                      <p className="text-white/70 text-sm">
                        {selectedNFT.description}
                      </p> */}

                      
                    {/* </div> */}
                  </div>
                </div>

                {/* <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Entropy</h3>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                              <div
                                className="bg-blue-400 h-2 rounded-full"
                                style={{ width: `${selectedNFT.speed}%` }}
                              />
                            </div>
                </div> */}

                {/* <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Power Up</Button>
                    <Button size="sm" variant="outline">Transfer</Button>
                    <Button size="sm" variant="ghost">View on Blockchain</Button>
                  </div>
                </div> */}
              </CardContent>
            </Card>
          </div>


          <div className="order-1 lg:order-2">
            <UpgradePanel />
          </div>



        </div>
        {/* End Tab One */}
        </TabsContent>
        <TabsContent value="artifacts" className="mt-6">
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
          </TabsContent>
          </Tabs>


      </main>
    </div>
  );
};

export default Gallery;
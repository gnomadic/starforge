"use client"


import React from 'react';
import { useGameStore } from '@/lib/gameState';
import Header from '@/components/play/Header';
import ResourcePanel from '@/components/play/ResourcePanel';
import ArtifactCard from '@/components/play/ArtifactCard';
import { Gem } from 'lucide-react';

const Museum = () => {
  const artifacts = useGameStore(state => state.artifacts);
  
  // Count discovered artifacts
  const discoveredCount = artifacts.filter(a => a.discovered).length;
  
  // Group artifacts by rarity
  const groupedArtifacts = {
    legendary: artifacts.filter(a => a.rarity === 'legendary'),
    rare: artifacts.filter(a => a.rarity === 'rare'),
    uncommon: artifacts.filter(a => a.rarity === 'uncommon'),
    common: artifacts.filter(a => a.rarity === 'common'),
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cosmic-deep-blue to-background text-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-1 h-1 rounded-full bg-white opacity-30 animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-32 right-40 w-2 h-2 rounded-full bg-white opacity-20 animate-pulse-soft" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-white opacity-40 animate-pulse-soft" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 rounded-full bg-white opacity-30 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container px-4 py-6 max-w-6xl mx-auto relative z-10 flex flex-col h-full">
        <Header className="mb-5" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-grow">
          {/* Left column - Resources */}
          <div className="space-y-5">
            {/* <ResourcePanel /> */}
            
            <div className="cosmic-panel p-4">
              <h2 className="text-lg font-bold mb-2">Artifact Collection</h2>
              <p className="text-muted-foreground mb-1">Discovered: {discoveredCount} / {artifacts.length}</p>
              <p className="text-sm">Artifacts provide permanent bonuses to your cosmic empire.</p>
            </div>
          </div>

          {/* Right columns - Artifacts */}
          <div className="md:col-span-2">
            <div className="cosmic-panel p-4">
              <div className="flex items-center mb-4">
                <Gem className="h-5 w-5 mr-2 text-primary" />
                <h2 className="text-xl font-bold">Cosmic Museum</h2>
              </div>
              
              <div className="space-y-6">
                {Object.entries(groupedArtifacts).map(([rarity, items]) => items.length > 0 && (
                  <div key={rarity} className="space-y-3">
                    <h3 className="font-semibold capitalize">{rarity} Artifacts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {items.map(artifact => (
                        <ArtifactCard key={artifact.id} artifact={artifact} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="text-center py-4 text-xs text-muted-foreground">
        <p>Cosmic Collector v1.0 | Build with React and Tailwind</p>
      </div>
    </div>
  );
};

export default Museum;

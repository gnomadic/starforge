"use client"


import React from 'react';
import { useGameStore } from '@/lib/gameState';
import Header from '@/components/play/Header';
import ResourcePanel from '@/components/play/ResourcePanel';
import VentureCard from '@/components/play/VentureCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Ventures = () => {
  const ventures = useGameStore(state => state.ventures);
  const selectedPlanetId = useGameStore(state => state.selectedPlanetId);
  const planets = useGameStore(state => state.planets);
  
  // Group ventures by status
  const activeVentures = ventures.filter(v => v.status === 'active');
  const availableVentures = ventures.filter(v => v.status !== 'active');
  
  const selectedPlanet = planets.find(p => p.id === selectedPlanetId);
  
  return (
    <div className="cosmic-page">
 
 
        

            <div className="cosmic-panel p-4">
              <div className="flex items-center mb-4">
                <Rocket className="h-5 w-5 mr-2 text-primary" />
                <h2 className="text-xl font-bold">Planetary Ventures</h2>
              </div>
              
              <Tabs defaultValue="active">
                <TabsList className="mb-4">
                  <TabsTrigger value="active">Active Ventures ({activeVentures.length})</TabsTrigger>
                  <TabsTrigger value="available">Available Ventures ({availableVentures.length})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active" className="space-y-4">
                  {activeVentures.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No active ventures. Start one from the Available tab!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {activeVentures.map(venture => (
                        <VentureCard key={venture.id} venture={venture} />
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="available" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {availableVentures.map(venture => (
                      <VentureCard key={venture.id} venture={venture} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
      
    </div>
  );
};

export default Ventures;

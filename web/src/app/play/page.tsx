"use client"

import React, { useEffect } from 'react';
import { useGameStore } from '@/lib/gameState';
import Header from '@/components/play/Header';
import Planet from '@/components/play/Planet';
import ResourcePanel from '@/components/play/ResourcePanel';
import UpgradePanel from '@/components/play/UpgradePanel';
import PlanetDetails from '@/components/play/PlanetDetails';
import { GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  //   const navigate = useNavigate();
  const planets = useGameStore(state => state.planets);
  const selectedPlanetId = useGameStore(state => state.selectedPlanetId);
  const selectPlanet = useGameStore(state => state.selectPlanet);
  const updateGameLoop = useGameStore(state => state.updateGameLoop);

  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(() => {
      updateGameLoop();
    }, 100); // Update every 100ms

    return () => clearInterval(gameLoop);
  }, [updateGameLoop]);

  // Split planets into discovered and undiscovered
  const discoveredPlanets = planets.filter(planet => planet.discovered);

  return (
    <div className="cosmic-page">

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">

        <div className="flex justify-center items-center">
          <Image
            src={"/api/placeholder?height=500&width=500&text=Image+12"}
            alt={"placeholder"}
            width={500}
            height={500}
            className="object-cover" />
        </div>



        {/* <div className='max-w-lg min-w-lg justify-center items-center'> */}
        <div className="justify-center items-center">
          {/* <div className='max-w-lg min-w-lg'> */}
          <Tabs defaultValue="details" className="">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="upgrades">Upgrades</TabsTrigger>
            </TabsList>
            <TabsContent value="details" >
              <PlanetDetails />
            </TabsContent>
            <TabsContent value="upgrades">
              <UpgradePanel />
            </TabsContent>
          </Tabs>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Index;

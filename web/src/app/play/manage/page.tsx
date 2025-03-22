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
// import { useNavigate } from 'react-router-dom';

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
        
        {/* Navigation buttons */}
        {/* <div className="flex gap-2 mb-4">
          <Button variant="default" size="sm">
            Dashboard
          </Button>
          <Button onClick={() => navigate('/discover')} variant="outline" size="sm">
            Discover
          </Button>
          <Button onClick={() => navigate('/manage')} variant="outline" size="sm">
            Planet Management
          </Button>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-grow">
          {/* Left column - Resources and Upgrades */}
          <div className="space-y-5">
            {/* <ResourcePanel /> */}
            <UpgradePanel />
          </div>

          {/* Middle column - Planet Display */}
          <div className="relative cosmic-panel flex flex-col items-center justify-center p-8 min-h-[500px]">
            {/* Planet orbits */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="planet-orbit" style={{ width: '240px', height: '240px' }}></div>
              <div className="planet-orbit" style={{ width: '160px', height: '160px' }}></div>
            </div>

            {/* Discovered planets */}
            <div className="relative w-full h-full flex items-center justify-center">
              {discoveredPlanets.map((planet, index) => (
                <div 
                  key={planet.id}
                  className={`absolute animate-float`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    ...(index === 0 ? { 
                      // Center planet
                      transform: 'translate(-50%, -50%)',
                      left: '50%',
                      top: '50%' 
                    } : index % 2 === 0 ? { 
                      // Orbit 1
                      animation: 'orbit 20s linear infinite',
                      animationDelay: `${-index * 5}s`
                    } : { 
                      // Orbit 2
                      animation: 'orbit-reverse 15s linear infinite',
                      animationDelay: `${-index * 3}s`
                    })
                  }}
                >
                  <Planet 
                    planet={planet} 
                    selected={planet.id === selectedPlanetId}
                    onClick={() => selectPlanet(planet.id)}
                  />
                </div>
              ))}
            </div>
            
            {/* Prompt to discover planets if few are discovered */}
            {discoveredPlanets.length <= 2 && (
              <div className="absolute bottom-4 left-0 right-0">
                <Button 
                  variant="secondary"
                  size="sm"
                  className="mx-auto block"
                  onClick={() => navigate('/discover')}
                >
                  Discover More Planets
                </Button>
              </div>
            )}
          </div>

          {/* Right column - Planet Details */}
          <div>
            {selectedPlanetId ? (
              <PlanetDetails />
            ) : (
              <div className="cosmic-panel p-8 flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <GlobeIcon className="h-12 w-12 mb-4 opacity-50" />
                <h2 className="text-lg font-semibold">Select a Planet</h2>
                <p className="mt-2 text-sm max-w-xs">
                  Click on a planet to view details and manage regeneration
                </p>
              </div>
            )}
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

export default Index;

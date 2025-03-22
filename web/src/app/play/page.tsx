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
      <div className=" mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* Left column - Resources and Upgrades */}
          <div className="space-y-5">
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
          </div>
          <div>
            <PlanetDetails />
          </div>
        
      </div>
    </div>
  );
};

export default Index;

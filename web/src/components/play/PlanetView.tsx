"use client";


import React, { useState } from 'react';
// import { useResources } from '@/contexts/ResourceContext';
import { Button } from '@/components/ui/button';
import EnemySystem from './EnemySystem';
import { useSupplies } from '../supplies/SupplyContext';
import ProbeSystem from './ProbeSystem';

interface PlanetViewProps {
   onOpenModal: (modalType: string) => void;
}

const PlanetView: React.FC<PlanetViewProps> = ({onOpenModal}) => {
//   const { resources } = useResources();
const {supplies} = useSupplies();
  const [activeElements, setActiveElements] = useState<string[]>([]);
  
  // Planet position (center of screen)
  const planetX = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
  const planetY = typeof window !== 'undefined' ? window.innerHeight / 2 : 300;
  const planetRadius = 128; // Half of w-64 (256px / 2)
  
  const handleElementToggle = (elementType: string) => {
    setActiveElements(prev => 
      prev.includes(elementType) 
        ? prev.filter(el => el !== elementType)
        : [...prev, elementType]
    );
  };
  
  return (
   <div className="flex flex-col items-center justify-center h-full relative">
      {/* Probe System */}
      <ProbeSystem 
        planetX={planetX}
        planetY={planetY}
        onOpenModal={onOpenModal}

      />
      
      {/* Planet info */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Your Cosmic World</h2>
        <p className="text-white/70 text-sm">Launch probes to explore the galaxy!</p>
      </div>
       */}
      {/* Interactive resource buttons */}
      {/* <div className="absolute top-4 left-4 right-4 flex justify-between">
        {resources.map((resource, index) => {
          const elementTypes = ['triangles', 'crystals', 'satellites', 'energy'];
          const elementType = elementTypes[index];
          const isActive = activeElements.includes(elementType);
          
          return (
            <Button
              key={resource.type}
              variant="ghost"
              size="sm"
              className={`animate-float bg-black/40 backdrop-blur-sm rounded-full p-2 border transition-all duration-300 ${
                isActive 
                  ? 'border-white/60 bg-white/10 scale-110' 
                  : 'border-white/20 hover:border-white/40 hover:bg-white/5'
              }`}
              style={{ animationDelay: `${index * 0.5}s` }}
              onClick={() => handleElementToggle(elementType)}
            >
              {resource.icon}
            </Button>
          );
        })}
      </div> */}
    </div>
  );
};

export default PlanetView;
"use client";


import React, { useState } from 'react';
// import { useResources } from '@/contexts/ResourceContext';
import { Button } from '@/components/ui/button';
import EnemySystem from './EnemySystem';
import { useSupplies } from '../supplies/SupplyContext';

const PlanetView: React.FC = () => {
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
      {/* Enemy System */}
      <EnemySystem 
        planetX={planetX}
        planetY={planetY}
        planetRadius={planetRadius}
      />
      
      {/* Planet */}
      <div className="relative">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 animate-pulse-slow shadow-2xl shadow-purple-500/20">
          {/* Planet surface details */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/30 via-purple-700/30 to-pink-600/30 backdrop-blur-sm">
            <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-green-400/40 animate-pulse"></div>
            <div className="absolute bottom-12 right-12 w-8 h-8 rounded-full bg-yellow-400/40 animate-pulse"></div>
            <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-red-400/40 animate-pulse"></div>
            
            {/* Added triangular structures */}
            {activeElements.includes('triangles') && (
              <>
                <div className="absolute top-16 left-16 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-cyan-400/60 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-emerald-400/60 animate-pulse"></div>
                <div className="absolute top-32 right-16 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-pink-400/60 animate-pulse"></div>
              </>
            )}
            
            {/* Added crystal formations */}
            {activeElements.includes('crystals') && (
              <>
                <div className="absolute top-12 right-20 w-3 h-8 bg-gradient-to-t from-purple-400/70 to-purple-200/70 transform rotate-12 animate-pulse"></div>
                <div className="absolute bottom-16 left-12 w-4 h-6 bg-gradient-to-t from-blue-400/70 to-blue-200/70 transform -rotate-12 animate-pulse"></div>
                <div className="absolute top-24 left-24 w-2 h-6 bg-gradient-to-t from-green-400/70 to-green-200/70 transform rotate-45 animate-pulse"></div>
              </>
            )}
          </div>
        </div>
        
        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-2 right-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
        </div>
        <div className="absolute -inset-4 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '30s' }}>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-yellow-400/60 rounded-full"></div>
        </div>
        
        {/* Additional orbital satellites */}
        {activeElements.includes('satellites') && (
          <>
            <div className="absolute -inset-8 rounded-full border border-white/5 animate-spin" style={{ animationDuration: '40s' }}>
              <div className="absolute top-8 right-1/3 w-3 h-3 bg-purple-400/70 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-1/3 w-2 h-2 bg-cyan-400/70 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -inset-12 rounded-full border border-white/5 animate-spin" style={{ animationDuration: '50s' }}>
              <div className="absolute top-12 left-1/4 w-2.5 h-2.5 bg-emerald-400/70 rounded-full animate-pulse"></div>
            </div>
          </>
        )}
        
        {/* Energy field effect */}
        {activeElements.includes('energy') && (
          <div className="absolute -inset-2 rounded-full border-2 border-yellow-400/30 animate-pulse">
            <div className="absolute -inset-2 rounded-full border border-yellow-300/20 animate-ping"></div>
          </div>
        )}
      </div>
      
      {/* Planet info */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Your Cosmic World</h2>
        <p className="text-white/70 text-sm">Defend your planet! Tap enemies to shoot them</p>
      </div>
      
      {/* Interactive resource buttons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        {supplies.map((resource, index) => {
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
      </div>
    </div>
  );
};

export default PlanetView;
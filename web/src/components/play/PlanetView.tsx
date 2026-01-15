"use client";

import React, { useState } from 'react';
// import { useGame } from '@/contexts/GameContext';
import { Button } from '@/components/ui/button';
import { Plus, RotateCcw, AlertTriangle } from 'lucide-react';
import BuildingModal from '@/components/play/BuildingModal';
import PlayerStats from '@/components/play/PlayerStats';
import EventModal from '@/components/play/EventModal';
import { Planet } from '@/lib/planetData';

interface Building {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  cost: number;
  type: string;


}

interface PlanetViewProps {
  allModules: readonly {
    id:number;
    name: `0x${string}`;
    description: `0x${string}`;
    tags: readonly [number, number, number, number];
  }[] | undefined;
}

const PlanetView: React.FC<PlanetViewProps> = ({ allModules }) => {

  const [turnNumber, setTurnNumber] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const endTurn = () => {
    setTurnNumber(prev => prev + 1);
    // Simulate game over condition for demonstration
    if (turnNumber >= 10) { // Example condition
      setGameOver(true);
    }
  };

  // const { endTurn, turnNumber, gameOver, currentEvent } = useGame();
  const [buildings, setBuildings] = useState<(Building | null)[]>(Array(9).fill(null));
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [isBuildingModalOpen, setIsBuildingModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const handleSlotClick = (index: number) => {
    if (gameOver) return;
    if (buildings[index] === null) {
      setSelectedSlot(index);
      setIsBuildingModalOpen(true);
    }
  };

  const handleBuildingSelect = (building: Building) => {
    if (selectedSlot !== null) {
      const newBuildings = [...buildings];
      newBuildings[selectedSlot] = building;
      setBuildings(newBuildings);
      setSelectedSlot(null);
    }
  };

  const handleEndTurn = () => {
    if (gameOver) return;
    console.log('Ending turn and progressing simulation...');
    endTurn();
    setIsEventModalOpen(true);
  };

  const handleEventModalClose = () => {
    setIsEventModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative p-4 space-y-6">
      {/* Game Over Overlay */}
      {gameOver && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-red-900/90 border border-red-500 rounded-lg p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Base Destroyed!</h2>
            <p className="text-white/80 mb-4">Your base couldn&apos;t survive the harsh cosmic environment.</p>
            <p className="text-white/60 text-sm">Turn: {turnNumber - 1}</p>
          </div>
        </div>
      )}

      {/* Turn Counter and Stats */}
      <div className="text-center space-y-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
          <h2 className="text-xl font-bold text-white">Turn {turnNumber}</h2>
          <p className="text-white/70 text-sm">Survive the cosmic environment</p>
        </div>

        <PlayerStats />
      </div>

      {/* 3x3 Building Grid */}
      <div className="space-y-2">
        <h3 className="text-center text-white font-medium">Base Layout</h3>
        <div className="grid grid-cols-3 gap-3">
          {buildings.map((building, index) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-lg border-2 border-dashed border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-white/50 hover:bg-white/20 ${building ? 'border-solid border-blue-400/60 bg-blue-400/20' : ''
                } ${gameOver ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handleSlotClick(index)}
            >
              {building ? (
                <div className="text-center">
                  <div className="text-white mb-1">
                    {building.icon}
                  </div>
                  <span className="text-xs text-white/80 leading-tight">{building.name.split(' ')[0]}</span>
                </div>
              ) : (
                <Plus className="h-8 w-8 text-white/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* End Turn Button */}
      <Button
        onClick={handleEndTurn}
        disabled={gameOver}
        className={`font-bold py-3 px-8 rounded-lg shadow-lg ${gameOver
            ? 'bg-gray-600 cursor-not-allowed opacity-50'
            : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
          } text-white`}
      >
        <RotateCcw className="mr-2 h-5 w-5" />
        {gameOver ? 'Game Over' : 'End Turn'}
      </Button>

      {/* Building Selection Modal */}
      <BuildingModal
        isOpen={isBuildingModalOpen}
        onClose={() => {
          setIsBuildingModalOpen(false);
          setSelectedSlot(null);
        }}
        onSelectBuilding={handleBuildingSelect}
        slotIndex={selectedSlot || 0}
         allModules={allModules}

      />

      {/* Event Modal */}
      <EventModal
        isOpen={isEventModalOpen}
        onClose={handleEventModalClose}
      />
    </div>
  );
};

export default PlanetView;

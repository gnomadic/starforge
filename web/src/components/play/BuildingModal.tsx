"use client"    

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Factory, Zap, Shield, Home, TreePine, Wrench, Coins, Users, Cpu } from 'lucide-react';
import { str } from '@/lib/utils/utils';


interface BuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBuilding: (building: Building) => void;
  slotIndex: number;
  allModules?: readonly {
    id:number;
    name: `0x${string}`;
    description: `0x${string}`;
    tags: readonly [number, number, number, number];
  }[] | undefined;
}

interface Building {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  cost: number;
  type: string;
}

const BuildingModal: React.FC<BuildingModalProps> = ({ isOpen, onClose, onSelectBuilding, slotIndex, allModules }) => {
  const buildings: Building[] = [
    {
      id: 'factory',
      name: 'Resource Factory',
      icon: <Factory className="h-6 w-6" />,
      description: 'Generates resources over time',
      cost: 100,
      type: 'production'
    },
    {
      id: 'power-plant',
      name: 'Power Plant',
      icon: <Zap className="h-6 w-6" />,
      description: 'Provides energy to other buildings',
      cost: 150,
      type: 'utility'
    },
    {
      id: 'defense-tower',
      name: 'Defense Tower',
      icon: <Shield className="h-6 w-6" />,
      description: 'Protects your planet from attacks',
      cost: 200,
      type: 'defense'
    },
    {
      id: 'habitat',
      name: 'Habitat',
      icon: <Home className="h-6 w-6" />,
      description: 'Houses population and workers',
      cost: 80,
      type: 'residential'
    },
    {
      id: 'greenhouse',
      name: 'Greenhouse',
      icon: <TreePine className="h-6 w-6" />,
      description: 'Improves atmosphere and food production',
      cost: 120,
      type: 'environment'
    },
    {
      id: 'workshop',
      name: 'Workshop',
      icon: <Wrench className="h-6 w-6" />,
      description: 'Advances technology research',
      cost: 180,
      type: 'research'
    }
  ];

  const handleBuildingSelect = (building: Building) => {
    onSelectBuilding(building);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-b from-purple-900/95 via-blue-900/95 to-black/95 backdrop-blur-md border border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Cpu className="h-5 w-5 text-blue-400" />
            Select Building - Slot {slotIndex + 1} - {allModules ? allModules.length : 0} Modules
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 max-h-96 overflow-y-auto">


          {allModules?.map((module) => (
            <div
              key={module.id}
              className="bg-white/10 rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
              // onClick={() => handleBuildingSelect(building)}
            >
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">
                  {/* {building.icon} */}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{str(module.name)}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Coins className="h-3 w-3" />
                      {/* <span className="text-xs">{building.cost}</span> */}
                    </div>
                  </div>
                  <p className="text-xs text-white/70">{str(module.description)}</p>
                  {module.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-purple-300 capitalize">
                      {tag}
                      {/* {index < module.tags.length - 1 ? ', ' : ''} */}
                    </span>
                  ))}
                  {/* <span className="text-xs text-purple-300 capitalize">{module.tags}</span> */}
                </div>
              </div>
            </div>
          ))}



          {buildings.map((building) => (
            <div
              key={building.id}
              className="bg-white/10 rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => handleBuildingSelect(building)}
            >
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">
                  {building.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{building.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Coins className="h-3 w-3" />
                      <span className="text-xs">{building.cost}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/70">{building.description}</p>
                  <span className="text-xs text-purple-300 capitalize">{building.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={onClose}
          variant="outline"
          className="w-full mt-4 border-white/20 text-white hover:bg-white/10"
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BuildingModal;
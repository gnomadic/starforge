"use client";


import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Star, Zap, Cpu, Rocket, CheckCircle } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Upgrade {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  maxLevel: number;
  baseCost: number;
  costMultiplier: number;
  color: string;
  glowColor: string;
}

const AVAILABLE_UPGRADES: Upgrade[] = [
  {
    id: 'resource-multiplier',
    title: 'Resource Multiplier',
    description: 'Increases all resource generation',
    icon: Star,
    maxLevel: 10,
    baseCost: 100,
    costMultiplier: 1.5,
    color: 'bg-yellow-500',
    glowColor: 'shadow-yellow-500/50',
  },
  {
    id: 'energy-efficiency',
    title: 'Energy Efficiency',
    description: 'Reduces energy consumption for jobs',
    icon: Zap,
    maxLevel: 8,
    baseCost: 150,
    costMultiplier: 1.6,
    color: 'bg-blue-500',
    glowColor: 'shadow-blue-500/50',
  },
  {
    id: 'processing-speed',
    title: 'Processing Speed',
    description: 'Faster completion of all activities',
    icon: Cpu,
    maxLevel: 12,
    baseCost: 200,
    costMultiplier: 1.4,
    color: 'bg-green-500',
    glowColor: 'shadow-green-500/50',
  },
  {
    id: 'cosmic-boost',
    title: 'Cosmic Amplifier',
    description: 'Enhances all cosmic operations',
    icon: Rocket,
    maxLevel: 5,
    baseCost: 500,
    costMultiplier: 2.0,
    color: 'bg-purple-500',
    glowColor: 'shadow-purple-500/50',
  },
];

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
//   const { toast } = useToast();
  const [upgradeLevels, setUpgradeLevels] = useState<Record<string, number>>({
    'resource-multiplier': 0,
    'energy-efficiency': 0,
    'processing-speed': 0,
    'cosmic-boost': 0,
  });

  const calculateCost = (upgrade: Upgrade, currentLevel: number): number => {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, currentLevel));
  };

  const canAfford = (cost: number): boolean => {
    // Mock check - in real app, check against player's resources
    return true;
  };

  const handleUpgrade = (upgrade: Upgrade) => {
    const currentLevel = upgradeLevels[upgrade.id];
    
    if (currentLevel >= upgrade.maxLevel) {
    //   toast({
    //     title: "Max Level Reached",
    //     description: `${upgrade.title} is already at maximum level.`,
    //   });
      return;
    }

    const cost = calculateCost(upgrade, currentLevel);
    
    if (!canAfford(cost)) {
    //   toast({
    //     title: "Insufficient Resources",
    //     description: "You don't have enough resources for this upgrade.",
    //   });
      return;
    }

    setUpgradeLevels(prev => ({
      ...prev,
      [upgrade.id]: prev[upgrade.id] + 1
    }));

    // toast({
    //   title: "Upgrade Complete!",
    //   description: `${upgrade.title} upgraded to level ${currentLevel + 1}.`,
    // });
  };

  const getUpgradeVisuals = (upgrade: Upgrade, level: number) => {
    const intensity = Math.min(level / upgrade.maxLevel, 1);
    const glowIntensity = level > 0 ? 0.3 + (intensity * 0.7) : 0;
    
    return {
      opacity: level > 0 ? 0.8 + (intensity * 0.2) : 0.6,
      boxShadow: level > 0 ? `0 0 ${8 + intensity * 12}px rgba(255, 255, 255, ${glowIntensity})` : 'none',
      borderColor: level > 0 ? `rgba(255, 255, 255, ${0.2 + intensity * 0.3})` : 'rgba(255, 255, 255, 0.1)',
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="h-5 w-5" />
            Cosmic Upgrades
          </DialogTitle>
        </DialogHeader>
                
        <div className="mt-6 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <p className="text-xs text-blue-300 text-center">
            Temporarily upgrade your probe for the next exploration.
          </p>
        </div>
        
        <div className="mt-4 space-y-4">
          {AVAILABLE_UPGRADES.map((upgrade) => {
            const currentLevel = upgradeLevels[upgrade.id];
            const cost = calculateCost(upgrade, currentLevel);
            const isMaxed = currentLevel >= upgrade.maxLevel;
            const progressPercentage = (currentLevel / upgrade.maxLevel) * 100;
            const visuals = getUpgradeVisuals(upgrade, currentLevel);
            
            return (
              <div
                key={upgrade.id}
                className="p-4 rounded-lg border transition-all cursor-pointer hover:bg-gray-800/70"
                style={{
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  borderColor: visuals.borderColor,
                  boxShadow: visuals.boxShadow,
                  opacity: visuals.opacity,
                }}
                onClick={() => !isMaxed && handleUpgrade(upgrade)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${upgrade.color} flex items-center justify-center ${currentLevel > 0 ? upgrade.glowColor : ''}`}>
                      <upgrade.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white flex items-center gap-2">
                        {upgrade.title}
                        {isMaxed && <CheckCircle className="h-4 w-4 text-green-400" />}
                      </h3>
                      <p className="text-sm text-gray-300">{upgrade.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">
                      Level {currentLevel}/{upgrade.maxLevel}
                    </span>
                    {!isMaxed && (
                      <span className="text-yellow-400">
                        Cost: {cost} coins
                      </span>
                    )}
                    {isMaxed && (
                      <span className="text-green-400 font-medium">
                        MAX LEVEL
                      </span>
                    )}
                  </div>
                  
                  <Progress 
                    value={progressPercentage} 
                    className="h-2 bg-gray-700"
                  />
                  
                  {currentLevel > 0 && (
                    <div className="text-xs text-blue-400">
                      +{Math.round(currentLevel * 20)}% effectiveness
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default UpgradeModal;
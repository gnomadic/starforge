
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Shield, Zap } from 'lucide-react';
// import { useGame } from '@/contexts/GameContext';

const PlayerStats: React.FC = () => {
//   const { playerStats } = useGame();

const playerStats = {
    integrity: 75,
    maxIntegrity: 100,
    power: 50,
    maxPower: 100,
  };
  const getStatColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage > 60) return 'from-green-500 to-green-400';
    if (percentage > 30) return 'from-yellow-500 to-yellow-400';
    return 'from-red-500 to-red-400';
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <h3 className="text-white font-semibold mb-3 text-center">Base Status</h3>
      
      <div className="space-y-3">
        {/* Integrity */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-white text-sm">Integrity</span>
            </div>
            <span className="text-white text-sm font-mono">
              {playerStats.integrity}/{playerStats.maxIntegrity}
            </span>
          </div>
          <Progress 
            value={(playerStats.integrity / playerStats.maxIntegrity) * 100}
            className={`h-2 bg-white/20 [&>div]:bg-gradient-to-r [&>div]:${getStatColor(playerStats.integrity, playerStats.maxIntegrity)}`}
          />
        </div>
        
        {/* Power */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm">Power</span>
            </div>
            <span className="text-white text-sm font-mono">
              {playerStats.power}/{playerStats.maxPower}
            </span>
          </div>
          <Progress 
            value={(playerStats.power / playerStats.maxPower) * 100}
            className={`h-2 bg-white/20 [&>div]:bg-gradient-to-r [&>div]:${getStatColor(playerStats.power, playerStats.maxPower)}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
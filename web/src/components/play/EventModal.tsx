"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Zap, Shield, CheckCircle } from 'lucide-react';
// import { useGame } from '@/contexts/GameContext';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentEvent?: {
    name: string;
    description: string;
    severity: string;
    effects: {
      integrity?: number;
      power?: number;
    };
  };
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, currentEvent  }) => {
//   const { currentEvent } = useGame();
  
  if (!currentEvent) return null;
  
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'catastrophic':
        return <AlertTriangle className="h-6 w-6 text-red-500" />;
      case 'severe':
        return <AlertTriangle className="h-6 w-6 text-orange-500" />;
      case 'moderate':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'minor':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      default:
        return <AlertTriangle className="h-6 w-6 text-gray-500" />;
    }
  };
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'catastrophic':
        return 'from-red-600 to-red-800';
      case 'severe':
        return 'from-orange-600 to-red-600';
      case 'moderate':
        return 'from-yellow-600 to-orange-600';
      case 'minor':
        return 'from-green-600 to-blue-600';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-b from-purple-900/95 via-blue-900/95 to-black/95 backdrop-blur-md border border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            {getSeverityIcon(currentEvent.severity)}
            Natural Event
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className={`bg-gradient-to-r ${getSeverityColor(currentEvent.severity)} p-4 rounded-lg`}>
            <h3 className="text-lg font-bold text-white mb-2">{currentEvent.name}</h3>
            <p className="text-white/90 text-sm">{currentEvent.description}</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <h4 className="text-white font-semibold mb-2">Effects:</h4>
            <div className="space-y-1">
              {currentEvent.effects.integrity && (
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-white text-sm">
                    Integrity: {currentEvent.effects.integrity > 0 ? '+' : ''}{currentEvent.effects.integrity}
                  </span>
                </div>
              )}
              {currentEvent.effects.power && (
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-white text-sm">
                    Power: {currentEvent.effects.power > 0 ? '+' : ''}{currentEvent.effects.power}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
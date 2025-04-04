"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Artifact } from '@/domain/types';
import { Shield, Axe, Heart, Power } from 'lucide-react';

interface ProbeEquipmentProps {
  availableArtifacts: Artifact[];
  equippedArtifacts: Artifact[];
  onEquip: (artifactId: string) => void;
  onUnequip: (artifactId: string) => void;
}

const ProbeEquipment: React.FC<ProbeEquipmentProps> = ({ 
  availableArtifacts, 
  equippedArtifacts, 
  onEquip, 
  onUnequip 
}) => {
  const getBoostIcon = (type: string) => {
    switch (type) {
      case 'health': return <Heart className="w-3 h-3 text-red-400" />;
      case 'defense': return <Shield className="w-3 h-3 text-blue-400" />;
      case 'attack': return <Axe className="w-3 h-3 text-orange-400" />;
      default: return <Power className="w-3 h-3 text-purple-400" />;
    }
  };
  
  const getRarityColor = (rarity: number) => {
    switch (rarity) {
      case 4: return 'border-white/10 bg-white/5';
      case 3: return 'border-green-500/30 bg-green-500/10';
      case 2: return 'border-blue-500/30 bg-blue-500/10';
      case 1: return 'border-purple-500/30 bg-purple-500/10';
      case 0: return 'border-yellow-500/30 bg-yellow-500/10';
      default: return 'border-white/10 bg-white/5';
    }
  };

  return (
    <Card className="bg-black/30 border-white/10">
      <CardHeader>
        <CardTitle>Probe Equipment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Equipped Artifacts */}
        <div>
          <h3 className="text-sm font-medium mb-2">Equipped Artifacts</h3>
          <div className="space-y-2">
            {equippedArtifacts.length === 0 ? (
              <p className="text-white/50 text-sm">No artifacts equipped</p>
            ) : (
              equippedArtifacts.map((artifact) => (
                <div 
                  key={artifact.id} 
                  className={`p-2 border rounded-md flex justify-between items-center ${getRarityColor(artifact.rarity)}`}
                >
                  <div>
                    <h4 className="font-medium">{artifact.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {getBoostIcon(artifact.boost.type)}
                      <span className="text-xs">
                        +{artifact.boost.amount} {artifact.boost.type}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onUnequip(artifact.id)}
                    className="h-8 px-2"
                  >
                    Unequip
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Available Artifacts */}
        <div>
          <h3 className="text-sm font-medium mb-2">Available Artifacts</h3>
          <div className="space-y-2">
            {availableArtifacts.length === 0 ? (
              <p className="text-white/50 text-sm">No artifacts available</p>
            ) : (
              availableArtifacts.map((artifact) => (
                <div 
                  key={artifact.id} 
                  className={`p-2 border rounded-md flex justify-between items-center ${getRarityColor(artifact.rarity)}`}
                >
                  <div>
                    <h4 className="font-medium">{artifact.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {getBoostIcon(artifact.boost.type)}
                      <span className="text-xs">
                        +{artifact.boost.amount} {artifact.boost.type}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onEquip(artifact.id)}
                    className="h-8 px-2"
                  >
                    Equip
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProbeEquipment;

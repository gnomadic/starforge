"use client"

import { Artifact } from "@/domain/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { RarityBadge } from "./gallery/RarityBadge";



export const ArtifactCard: React.FC<{ 
    artifact: Artifact; 
    onEquip: (id: string) => void; 
    onUnequip: (id: string) => void; 
  }> = ({ artifact, onEquip, onUnequip }) => {
    const rarityColors = {
      4: "bg-gray-500/20 text-gray-400",     //common
      3: "bg-green-500/20 text-green-400",     //uncommon
      2: "bg-blue-500/20 text-blue-400",     //rare
      1: "bg-purple-500/20 text-purple-400",     //epic
      0: "bg-orange-500/20 text-orange-400"     //legendary
    };
  
    return (
      <Card className="bg-black/30 border-white/10 overflow-hidden h-full flex flex-col">
        <div className={cn("h-24 flex items-center justify-center", artifact.image)}>
          <div className="w-16 h-16 rounded-full animate-pulse-slow bg-white/10"></div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg">{artifact.name}</CardTitle>
            {/* <span className={cn("px-2 py-1 text-xs font-medium rounded-full", rarityColors[artifact.rarity])}>
              {artifact.rarity.charAt(0).toUpperCase() + artifact.rarity.slice(1)}
            </span> */}
            <RarityBadge rarity={artifact.rarity} />
          </div>
          <CardDescription className="text-xs">{artifact.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-sm">
            <span className="text-white/70">Boost: </span>
            <span className="font-medium">+{artifact.boost.amount}% {artifact.boost.type}</span>
          </div>
        </CardContent>
        <CardFooter>
          {artifact.equipped ? (
            <Button 
              onClick={() => onUnequip(artifact.id)} 
              variant="outline" 
              size="sm" 
              className="w-full text-xs bg-primary/10 hover:bg-primary/20"
            >
              Unequip
            </Button>
          ) : (
            <Button 
              onClick={() => onEquip(artifact.id)} 
              variant="outline" 
              size="sm" 
              className="w-full text-xs"
            >
              Equip
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };
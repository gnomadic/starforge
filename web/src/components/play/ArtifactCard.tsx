
import React from 'react';
import { Artifact } from '@/lib/planetData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Box, Leaf, Cpu, ShieldCheck, Compass, ArrowUpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const getRarityColor = (rarity: Artifact['rarity']) => {
  switch (rarity) {
    case 'common': return 'bg-slate-500/10 text-slate-500 hover:bg-slate-500/20';
    case 'uncommon': return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
    case 'rare': return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
    case 'legendary': return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20';
    default: return '';
  }
};

interface ArtifactCardProps {
  artifact: Artifact;
}

const ArtifactCard: React.FC<ArtifactCardProps> = ({ artifact }) => {
  if (!artifact.discovered) {
    return (
      <Card className="bg-muted/50 border-dashed">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-muted-foreground">??? Unknown Artifact</CardTitle>
          <CardDescription>This artifact has not been discovered yet.</CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{artifact.name}</CardTitle>
          <Badge variant="outline" className={cn("ml-2", getRarityColor(artifact.rarity))}>
            {artifact.rarity}
          </Badge>
        </div>
        <CardDescription>{artifact.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <p className="text-sm font-medium">Bonuses:</p>
          <div className="space-y-1">
            {artifact.bonuses.resourceMultiplier && Object.entries(artifact.bonuses.resourceMultiplier).map(([resource, multiplier]) => (
              <div key={resource} className="flex items-center text-sm">
                {resource === 'energy' && <Zap className="h-4 w-4 mr-2 text-yellow-500" />}
                {resource === 'matter' && <Box className="h-4 w-4 mr-2 text-slate-500" />}
                {resource === 'life' && <Leaf className="h-4 w-4 mr-2 text-green-500" />}
                {resource === 'technology' && <Cpu className="h-4 w-4 mr-2 text-blue-500" />}
                <span>+{Math.round((multiplier - 1) * 100)}% {resource.charAt(0).toUpperCase() + resource.slice(1)} production</span>
              </div>
            ))}
            
            {artifact.bonuses.ventureSuccessBonus && (
              <div className="flex items-center text-sm">
                <Compass className="h-4 w-4 mr-2 text-indigo-500" />
                <span>+{Math.round(artifact.bonuses.ventureSuccessBonus * 100)}% venture success rate</span>
              </div>
            )}
            
            {artifact.bonuses.regenerationDiscount && (
              <div className="flex items-center text-sm">
                <ArrowUpCircle className="h-4 w-4 mr-2 text-emerald-500" />
                <span>-{Math.round(artifact.bonuses.regenerationDiscount * 100)}% planet regeneration cost</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtifactCard;

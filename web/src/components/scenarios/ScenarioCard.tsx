import React from 'react';
import { Scenario, ScenarioMetadata } from '@/domain/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Address } from 'viem';
import { useIPFS } from '@/hooks/useIPFS';

interface ScenarioCardProps {
  ipfs?: string | undefined;
  admin?: Address;
  active?: boolean;
}


const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  ipfs,
  admin,
  active,
}) => {

  const { data, error } = useIPFS<ScenarioMetadata>(ipfs);

  // Calculate which content types are included
  const contentTypes = ['Stats', 'Quests', 'Artifacts', 'Enemies', 'Resources', 'Jobs']
  
  return (
    <Card className={`transition-all hover:border-primary/50 ${active ? 'border-primary ring-2 ring-primary/20' : 'border-white/10'}`}>
      <div className="h-36 overflow-hidden bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20 relative">
   
          <div className="flex items-center justify-center h-full">
            <div className="text-4xl font-bold text-white/10">{data?.name.substring(0, 1)}</div>
          </div>
   
        {active && (
          <div className="absolute top-2 right-2">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Active
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{data?.name}</CardTitle>
        <CardDescription className="flex items-center text-xs">
          <Calendar className="h-3 w-3 mr-1" />
          {/* Created {formatDistanceToNow(scenario.createdAt, { addSuffix: true })} */}
          Created --- 
          <span className="mx-2">•</span>
          <Users className="h-3 w-3 mr-1" />
          --- activations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/70 line-clamp-5">{data?.description}</p>
        
        <div className="mt-4">
          <p className="text-xs text-white/50 mb-2">Includes:</p>
          <div className="flex flex-wrap gap-1">
            {contentTypes.map(type => (
              <Badge key={type} variant="outline" className="text-xs">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center text-xs text-white/50 mr-auto">
          by ---
        </div>
        <Button 
          size="sm" 
          onClick={() => {}}
          variant={active ? "secondary" : "default"}
          disabled={active}
        >
          <Play className="h-4 w-4 mr-1" />
          {active ? 'Active' : 'Activate'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScenarioCard;
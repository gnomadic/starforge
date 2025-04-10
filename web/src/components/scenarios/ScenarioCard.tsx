import React from 'react';
import { Scenario } from '@/domain/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ScenarioCardProps {
  scenario: Scenario;
  onActivate: (scenarioId: string) => void;
  isActive?: boolean;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  scenario, 
  onActivate,
  isActive = false
}) => {
  // Calculate which content types are included
  const contentTypes = [];
  if (scenario.quests && scenario.quests.length > 0) contentTypes.push('Quests');
  if (scenario.artifacts && scenario.artifacts.length > 0) contentTypes.push('Artifacts');
  if (scenario.enemies && scenario.enemies.length > 0) contentTypes.push('Enemies');
  if (scenario.resources && scenario.resources.length > 0) contentTypes.push('Resources');
  if (scenario.jobs && scenario.jobs.length > 0) contentTypes.push('Jobs');

  return (
    <Card className={`transition-all hover:border-primary/50 ${isActive ? 'border-primary ring-2 ring-primary/20' : 'border-white/10'}`}>
      <div className="h-36 overflow-hidden bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20 relative">
        {scenario.thumbnail ? (
          <img 
            src={scenario.thumbnail} 
            alt={scenario.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-4xl font-bold text-white/10">{scenario.title.substring(0, 1)}</div>
          </div>
        )}
        {isActive && (
          <div className="absolute top-2 right-2">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Active
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{scenario.title}</CardTitle>
        <CardDescription className="flex items-center text-xs">
          <Calendar className="h-3 w-3 mr-1" />
          Created {formatDistanceToNow(scenario.createdAt, { addSuffix: true })}
          <span className="mx-2">•</span>
          <Users className="h-3 w-3 mr-1" />
          {scenario.activations} activations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/70 line-clamp-3">{scenario.description}</p>
        
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
          by {scenario.author}
        </div>
        <Button 
          size="sm" 
          onClick={() => onActivate(scenario.id)}
          variant={isActive ? "secondary" : "default"}
          disabled={isActive}
        >
          <Play className="h-4 w-4 mr-1" />
          {isActive ? 'Active' : 'Activate'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScenarioCard;
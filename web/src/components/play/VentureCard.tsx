
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Venture } from '@/lib/types/ventureTypes';
import { useGameStore } from '@/lib/gameState';
import { formatDistanceToNow } from 'date-fns';
import { ChevronDown, ChevronUp, Clock, Rocket, AlertTriangle, Check, X } from 'lucide-react';

interface VentureCardProps {
  venture: Venture;
}

const VentureCard: React.FC<VentureCardProps> = ({ venture }) => {
  const { startVenture, planets, selectedPlanetId } = useGameStore();
  const [expanded, setExpanded] = useState(false);
  
  // Calculate completion percentage
  const getCompletionPercentage = () => {
    if (venture.status !== 'active' || !venture.startTime) return 0;
    
    const elapsed = (Date.now() - venture.startTime) / 1000;
    return Math.min(100, (elapsed / venture.duration) * 100);
  };
  
  // Get remaining time as string
  const getRemainingTime = () => {
    if (venture.status !== 'active' || !venture.startTime) return 'Not started';
    
    const elapsed = (Date.now() - venture.startTime) / 1000;
    const remaining = venture.duration - elapsed;
    
    if (remaining <= 0) return 'Complete';
    
    // Format seconds into minutes:seconds
    const minutes = Math.floor(remaining / 60);
    const seconds = Math.floor(remaining % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Get time since completion
  const getTimeSinceCompletion = () => {
    if (!venture.startTime) return '';
    const completionTime = venture.startTime + (venture.duration * 1000);
    return formatDistanceToNow(completionTime, { addSuffix: true });
  };
  
  // Risk color mapping
  const getRiskColor = () => {
    switch (venture.risk) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  // Get status styling
  const getStatusInfo = () => {
    switch (venture.status) {
      case 'active':
        return {
          color: 'text-blue-500',
          icon: <Clock className="h-4 w-4" />,
          label: 'Active'
        };
      case 'completed':
        return {
          color: 'text-green-500',
          icon: <Check className="h-4 w-4" />,
          label: 'Completed'
        };
      case 'failed':
        return {
          color: 'text-red-500',
          icon: <X className="h-4 w-4" />,
          label: 'Failed'
        };
      default:
        return {
          color: 'text-gray-500',
          icon: null,
          label: 'Idle'
        };
    }
  };
  
  const statusInfo = getStatusInfo();
  
  const handleStartVenture = () => {
    if (selectedPlanetId) {
      startVenture(venture.id, selectedPlanetId);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{venture.name}</CardTitle>
            <CardDescription>{venture.description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`${statusInfo.color} flex items-center gap-1`}>
              {statusInfo.icon}
              {statusInfo.label}
            </Badge>
            <div
              className={`w-3 h-3 rounded-full ${getRiskColor()}`}
              title={`Risk: ${venture.risk}`}
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        {venture.status === 'active' && (
          <div className="mb-4 space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{getRemainingTime()}</span>
            </div>
            <Progress value={getCompletionPercentage()} />
          </div>
        )}
        
        {(venture.status === 'completed' || venture.status === 'failed') && (
          <div className="mb-4 flex items-center text-sm">
            <span className="text-muted-foreground">Completed: </span>
            <span className="ml-1">{getTimeSinceCompletion()}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Success Rate:</span>
            <span className="text-sm font-medium">{Math.round(venture.successRate * 100)}%</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-8 w-8"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Target Planet</h4>
              <div className="text-sm text-muted-foreground mb-2">
                {venture.status !== 'idle' ? (
                  <span>{planets.find(p => p.id === venture.targetPlanetId)?.name || 'Unknown'}</span>
                ) : (
                  <span>No planet selected</span>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Resource Requirements</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(venture.resourceRequirements).map(([resourceId, amount]) => (
                  <div key={resourceId} className="flex justify-between text-sm">
                    <span className="text-muted-foreground capitalize">{resourceId}:</span>
                    <span>{amount}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <h4 className="text-sm font-medium">Risk Level: {venture.risk}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {venture.risk === 'low' && 'This venture has a high chance of success with minimal resource investment.'}
                {venture.risk === 'medium' && 'This venture has a moderate chance of success with reasonable resource investment.'}
                {venture.risk === 'high' && 'This venture has a lower chance of success but potentially higher rewards.'}
              </p>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        {venture.status === 'idle' ? (
          <Button 
            className="w-full" 
            onClick={handleStartVenture}
            disabled={!selectedPlanetId}
          >
            <Rocket className="mr-2 h-4 w-4" />
            Launch Venture
          </Button>
        ) : (
          <Button 
            className="w-full" 
            variant="secondary"
            disabled={true}
          >
            {venture.status !== 'active' ? (
              <>
                <Rocket className="mr-2 h-4 w-4" />
                Reset Venture
              </>
            ) : (
              <>
                <Clock className="mr-2 h-4 w-4" />
                Venture in Progress
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default VentureCard;

"use client"


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Vote, ThumbsUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { VoteOption } from '@/domain/types';

interface VotingCardProps {
  option: VoteOption;
  totalVotes: number;
  onVote: (optionId: string) => void;
  hasVoted: boolean;
  isSelected: boolean;
}

const VotingCard: React.FC<VotingCardProps> = ({ 
  option, 
  totalVotes, 
  onVote, 
  hasVoted,
  isSelected
}) => {
  const votePercentage = totalVotes > 0 
    ? Math.round((option.voteCount / totalVotes) * 100) 
    : 0;
    
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'quest': return 'bg-blue-500/20 text-blue-400';
      case 'artifact': return 'bg-purple-500/20 text-purple-400';
      case 'enemy': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Card className={cn(
      "bg-black/30 border-white/10 h-full overflow-hidden transition-all",
      isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-black"
    )}>
      <div className="h-32 flex items-center justify-center bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20">
        {option.image ? (
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${option.image})` }} />
        ) : (
          <div className="w-20 h-20 rounded-full animate-pulse-slow bg-white/10"></div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{option.title}</CardTitle>
          <Badge variant="outline" className={getCategoryColor(option.category)}>
            {option.category.charAt(0).toUpperCase() + option.category.slice(1)}
          </Badge>
        </div>
        <CardDescription>{option.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/70">{votePercentage}% of votes</span>
            <span className="text-white/70">{option.voteCount} votes</span>
          </div>
          <Progress value={votePercentage} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => onVote(option.id)}
          disabled={hasVoted && !isSelected}
          variant={isSelected ? "default" : "outline"}
          className="w-full"
        >
          {isSelected ? (
            <>
              <ThumbsUp className="w-4 h-4 mr-2" />
              Voted
            </>
          ) : hasVoted ? (
            <span>Already Voted</span>
          ) : (
            <>
              <Vote className="w-4 h-4 mr-2" />
              Vote
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VotingCard;
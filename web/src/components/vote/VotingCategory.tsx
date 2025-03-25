"use client";

import React, { useState } from 'react';
// import { VoteCategory, VoteOption } from '@/types/quests';
import VotingCard from './VotingCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { VoteCategory, VoteOption } from '@/domain/types';

interface VotingCategoryProps {
  category: VoteCategory;
  onVote: (categoryId: string, optionId: string) => void;
  votedOptionId: string | null;
}

const VotingCategory: React.FC<VotingCategoryProps> = ({ 
  category, 
  onVote,
  votedOptionId
}) => {
  const [isOpen, setIsOpen] = useState(false);
const totalVotes: number = category.options.reduce((sum: number, option: VoteOption) => sum + option.voteCount, 0);
  
  const timeRemaining = formatDistanceToNow(new Date(category.endsAt), { addSuffix: true });

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <div>
          <h2 className="text-2xl font-display font-bold">{category.title}</h2>
          <p className="text-white/70">{category.description}</p>
          <p className="text-sm text-white/50">Voting ends {timeRemaining}</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {category.options.map((option) => (
            <VotingCard
              key={option.id}
              option={option}
              totalVotes={totalVotes}
              onVote={(optionId) => onVote(category.id, optionId)}
              hasVoted={votedOptionId !== null}
              isSelected={option.id === votedOptionId}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default VotingCategory;
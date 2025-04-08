"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
// import { VoteCategory } from '@/types/quests';
// import VotingCategory from '@/components/VotingCategory';
import { addDays } from 'date-fns';
import { toast } from 'react-toastify';
import { VoteCategory } from '@/domain/types';
import VotingCategory from '@/components/vote/VotingCategory';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, GraduationCap, Users, FileText, Dice6 } from 'lucide-react';
import ProposalForm from '@/components/vote/ProposalForm';
import NFTMinter from '@/components/vote/NFTMinter';

// Mock data for voting categories
const mockVoteCategories: VoteCategory[] = [
  {
    id: 'cat1',
    title: 'Next Quest Location',
    description: 'Vote on where our explorers should venture next',
    options: [
      {
        id: 'q1',
        title: 'Dark Matter Mines',
        description: 'A dangerous expedition to harvest rare dark matter from abandoned cosmic mines.',
        voteCount: 24,
        category: 'quest',
      },
      {
        id: 'q2',
        title: 'Neutron Star Salvage',
        description: 'Salvage valuable technology from a derelict station orbiting a neutron star.',
        voteCount: 18,
        category: 'quest',
      },
      {
        id: 'q3',
        title: 'Wormhole Expedition',
        description: 'Venture through an unstable wormhole to an unexplored sector of space.',
        voteCount: 32,
        category: 'quest',
      }
    ],
    endsAt: addDays(new Date(), 2),
  },
  {
    id: 'cat2',
    title: 'Artifact Unleashing',
    description: 'Vote on which legendary artifact should be introduced to the cosmos',
    options: [
      {
        id: 'a1',
        title: 'Chrono Stabilizer',
        description: 'An ancient device that can manipulate time itself, allowing multiple actions in a single turn.',
        voteCount: 42,
        category: 'artifact',
      },
      {
        id: 'a2',
        title: 'Void Shield',
        description: 'A powerful defensive relic that absorbs energy attacks and converts them to shield strength.',
        voteCount: 29,
        category: 'artifact',
      },
      {
        id: 'a3',
        title: 'Quantum Disruptor',
        description: 'A weapon of immense power that can temporarily disable enemy systems and defenses.',
        voteCount: 36,
        category: 'artifact',
      }
    ],
    endsAt: addDays(new Date(), 3),
  },
  {
    id: 'cat3',
    title: 'Enemy Invasion',
    description: 'Vote on which enemy faction will launch the next major attack',
    options: [
      {
        id: 'e1',
        title: 'Void Corrupted',
        description: 'Creatures twisted by exposure to the void between realities, hungry for energy and life.',
        voteCount: 15,
        category: 'enemy',
      },
      {
        id: 'e2',
        title: 'Machine Collective',
        description: 'A hive mind of self-replicating machines seeking to convert all matter into more of themselves.',
        voteCount: 28,
        category: 'enemy',
      },
      {
        id: 'e3',
        title: 'Stellar Devourers',
        description: 'Ancient entities that feed on the energy of stars, leaving dead systems in their wake.',
        voteCount: 22,
        category: 'enemy',
      }
    ],
    endsAt: addDays(new Date(), 4),
  }
];

const Voting = () => {
  // State to track voted options per category
  const [userVotes, setUserVotes] = useState<Record<string, string>>({});

  const handleVote = (categoryId: string, optionId: string) => {
    // Check if user already voted in this category
    if (userVotes[categoryId] === optionId) {
      // User is trying to unvote
      const { [categoryId]: _, ...restVotes } = userVotes;
      setUserVotes(restVotes);
      toast.info("Vote removed");
      return;
    }

    // If user already voted for a different option in this category
    if (userVotes[categoryId]) {
      toast.info("Changed your vote");
    } else {
      toast.success("Vote recorded!");
    }

    // Update user votes
    setUserVotes(prev => ({
      ...prev,
      [categoryId]: optionId
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-4 grid grid-cols-3 w-full">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Active Initiatives</span>
              {/* {activeProjects.length > 0 && (
              <span className="ml-1 bg-primary/20 text-primary rounded-full px-2 py-0.5 text-xs">
                {activeProjects.length}
              </span>
            )} */}
            </TabsTrigger>
            <TabsTrigger value="propose" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Submit Proposal</span>
            </TabsTrigger>
            <TabsTrigger value="mint" className="flex items-center gap-2">
              <Dice6 className="h-4 w-4" />
              <span>Mint D6 NFT</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">

            <div className="mb-8">
              <h1 className="text-4xl font-display font-bold mb-2">Cosmic Democracy</h1>
              <p className="text-white/70">
                Shape the future of the cosmos by voting on upcoming quests, artifacts, and enemies.
                The community&apos;s collective will determines what challenges appear next.
              </p>
            </div>

            <div className="space-y-10">
              {mockVoteCategories.map((category) => (
                <VotingCategory
                  key={category.id}
                  category={category}
                  onVote={handleVote}
                  votedOptionId={userVotes[category.id] || null}
                />
              ))}
            </div>
          </TabsContent>


          <TabsContent value="propose">
            <ProposalForm />
          </TabsContent>

          <TabsContent value="mint">
            <NFTMinter />
          </TabsContent>
        </Tabs>




      </main>
    </div>
  );
};

export default Voting;
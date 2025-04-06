"use client";


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Gem, AlertTriangle, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Quest } from '@/domain/types';
import { toast } from 'react-toastify';

// Mock quests data
const mockQuests: Quest[] = [
  {
    id: '1',
    title: 'Nebula Exploration',
    description: 'Venture into the outer reaches of the Orion Nebula to collect rare cosmic gases and encounter unknown entities.',
    timeRequired: 180, // 3 minutes
    riskLevel: 'medium',
    supplies: [
      { id: '1', type: 'energy', amount: 40, icon: '⚡', color: 'bg-yellow-500/20', emissionRate: 0.5, address: '0x123' },
      { id: '1', type: 'technology', amount: 25, icon: '✨', color: 'bg-blue-500/20' , emissionRate: 0.5, address: '0x123' },
    ],
    rewards: [
      { type: 'xp', amount: 150, name: 'Experience', icon: '📊' },
      { type: 'gold', amount: 75, name: 'Gold', icon: '💰' },
      { type: 'artifact', amount: 1, name: 'Nebula Shard', artifactId: 'a1', icon: '🔮' }
    ],
    image: 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20'
  },
  {
    id: '2',
    title: 'Star Fragment Collection',
    description: 'Harvest fragments from a dying star. Be quick and careful, as the star is unstable and could emit dangerous radiation.',
    timeRequired: 120, // 2 minutes
    riskLevel: 'high',
    supplies: [
      { id: '1', type: 'energy', amount: 60, icon: '⚡', color: 'bg-red-500/20' , emissionRate: 0.5, address: '0x123' },
      { id: '1', type: 'matter', amount: 35, icon: '💫', color: 'bg-yellow-500/20', emissionRate: 0.5, address: '0x123' },
    ],
    rewards: [
      { type: 'xp', amount: 200, name: 'Experience', icon: '📊' },
      { type: 'gold', amount: 120, name: 'Gold', icon: '💰' },
      { type: 'artifact', amount: 1, name: 'Star Core', artifactId: 'a2', icon: '🌟' }
    ],
    image: 'bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20'
  },
  {
    id: '3',
    title: 'Asteroid Mining',
    description: 'Mine precious metals and minerals from the asteroid belt. A relatively safe mission with moderate rewards.',
    timeRequired: 90, // 1.5 minutes
    riskLevel: 'low',
    supplies: [
      { id: '1', type: 'life', amount: 25, icon: '⚡', color: 'bg-green-500/20' , emissionRate: 0.5, address: '0x123' },
      { id: '1', type: 'technology', amount: 30, icon: '💰', color: 'bg-yellow-500/20', emissionRate: 0.5, address: '0x123' },
    ],
    rewards: [
      { type: 'xp', amount: 80, name: 'Experience', icon: '📊' },
      { type: 'gold', amount: 100, name: 'Gold', icon: '💰' },
      { type: 'cosmic-dust', amount: 45, name: 'Cosmic Dust', icon: '✨' }
    ],
    image: 'bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20'
  },
  {
    id: '4',
    title: 'Black Hole Proximity Research',
    description: 'Conduct research near the event horizon of a black hole. Extremely dangerous but potentially groundbreaking discoveries await.',
    timeRequired: 300, // 5 minutes
    riskLevel: 'extreme',
    supplies: [
      { id: '1', type: 'matter', amount: 85, icon: '⚡', color: 'bg-purple-500/20' , emissionRate: 0.5, address: '0x123' },
      { id: '1', type: 'life', amount: 60, icon: '✨', color: 'bg-red-500/20' , emissionRate: 0.5, address: '0x123' },
      { id: '1', type: 'technology', amount: 50, icon: '💫', color: 'bg-blue-500/20', emissionRate: 0.5, address: '0x123' },
    ],
    rewards: [
      { type: 'xp', amount: 500, name: 'Experience', icon: '📊' },
      { type: 'gold', amount: 300, name: 'Gold', icon: '💰' },
      { type: 'artifact', amount: 1, name: 'Singularity Crystal', artifactId: 'a3', icon: '💎' }
    ],
    image: 'bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-900/20'
  },
];

const QuestCard: React.FC<{ 
  quest: Quest; 
  onStart: (quest: Quest) => void; 
  inProgress: boolean; 
  progress: number; 
}> = ({ quest, onStart, inProgress, progress }) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const getRiskColor = (risk: string): string => {
    switch (risk) {
      case 'low': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'extreme': return 'bg-red-500/20 text-red-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  return (
    <Card className="bg-black/30 border-white/10 overflow-hidden h-full flex flex-col">
      <div className={cn("h-32 flex items-center justify-center", quest.image)}>
        <div className="w-20 h-20 rounded-full animate-pulse-slow bg-white/10"></div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl">{quest.title}</CardTitle>
          <Badge variant="outline" className={cn("ml-auto", getRiskColor(quest.riskLevel))}>
            {quest.riskLevel.charAt(0).toUpperCase() + quest.riskLevel.slice(1)} Risk
          </Badge>
        </div>
        <CardDescription>{quest.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Clock className="w-4 h-4" />
          <span>{formatTime(quest.timeRequired)}</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Required Resources:</h4>
          <div className="flex flex-wrap gap-2">
            {quest.supplies.map((resource, idx) => (
              <Badge key={idx} variant="secondary" className="bg-primary/10">
                {resource.icon} {resource.amount} {resource.type}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Rewards:</h4>
          <div className="flex flex-wrap gap-2">
            {quest.rewards.map((reward, idx) => (
              <Badge key={idx} variant="outline" className="bg-white/5 border-white/10">
                {reward.icon} {reward.amount} {reward.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {inProgress ? (
          <div className="w-full space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-center text-white/70">Quest in progress: {Math.round(progress)}%</p>
          </div>
        ) : (
          <Button 
            onClick={() => onStart(quest)} 
            className="w-full"
            variant="outline"
          >
            <Gem className="w-4 h-4 mr-2" />
            Start Quest
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Quests: React.FC = () => {
  const [activeQuests, setActiveQuests] = useState<Record<string, { progress: number; timer: number }>>({});
  
  const startQuest = (quest: Quest) => {
    // Check if player has enough resources (mock implementation)
    const hasEnoughResources = true; // In a real app, check against player's inventory
    
    if (!hasEnoughResources) {
      toast.error("Not enough resources to start this quest!");
      return;
    }
    
    // Set up quest progress tracking
    setActiveQuests(prev => ({
      ...prev,
      [quest.id]: { progress: 0, timer: quest.timeRequired }
    }));
    
    // Start quest timer
    const intervalId = setInterval(() => {
      setActiveQuests(prev => {
        const current = prev[quest.id];
        if (!current) return prev;
        
        const newProgress = current.progress + (100 / quest.timeRequired);
        const newTimer = current.timer - 1;
        
        // Quest completed
        if (newProgress >= 100) {
          clearInterval(intervalId);
          
          // Determine success based on risk level (mock implementation)
          const successRates: Record<string, number> = {
            'low': 0.9,
            'medium': 0.7,
            'high': 0.5,
            'extreme': 0.3
          };
          
          const isSuccessful = Math.random() < (successRates[quest.riskLevel] || 0.5);
          
          if (isSuccessful) {
            toast.success(`Quest completed! You earned rewards`, {
            //   description: quest.rewards.map(r => `${r.icon} ${r.amount} ${r.name}`).join(', ')
            });
          } else {
            toast.error(`Quest failed! The risks were too great`, {
            //   description: "You lost some resources but gained experience"
            });
          }
          
          // Remove from active quests
          const { [quest.id]: _, ...restQuests } = prev;
          return restQuests;
        }
        
        return {
          ...prev,
          [quest.id]: { progress: newProgress, timer: newTimer }
        };
      });
    }, 1000);
    
    toast.info(`Started quest: ${quest.title}`, {
    //   description: `Time remaining: ${Math.floor(quest.timeRequired / 60)}:${(quest.timeRequired % 60).toString().padStart(2, '0')}`
    });
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Cosmic Quests</h1>
          <p className="text-white/70">Embark on dangerous missions throughout the cosmos to earn rewards and rare artifacts.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockQuests.map(quest => (
            <QuestCard 
              key={quest.id} 
              quest={quest} 
              onStart={startQuest}
              inProgress={quest.id in activeQuests}
              progress={activeQuests[quest.id]?.progress || 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Quests;
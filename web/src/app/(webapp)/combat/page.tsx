"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/global/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shield, Axe, Heart, Star, AlertCircle } from 'lucide-react';
import { Enemy, Artifact, CombatStats, CombatLogData } from '@/domain/types';
import CombatLog from '@/components/CombatLog';
// import {ProbeEquipment} from '@/components/ProbeEquipment';
import { toast } from 'react-toastify';
import ProbeEquipment from '@/components/ProbeEquipment';
import ComingSoon from '@/components/ComingSoon';

// Mock data for artifacts that can be equipped
const mockArtifacts: Artifact[] = [
  {
    id: 'a1',
    name: 'Power Shield',
    description: 'A shield that enhances defense capabilities.',
    rarity: 4,
    image: 'bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-green-500/20',
    boost: { type: 'defense', amount: 15 },
    equipped: false
  },
  {
    id: 'a2',
    name: 'Plasma Blaster',
    description: 'A weapon that fires concentrated energy blasts.',
    rarity: 2,
    image: 'bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20',
    boost: { type: 'attack', amount: 25 },
    equipped: false
  },
  {
    id: 'a3',
    name: 'Bionic Core',
    description: 'Enhances the overall vitality of the probe.',
    rarity: 3,
    image: 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20',
    boost: { type: 'health', amount: 50 },
    equipped: false
  }
];

// Mock data for enemies
const mockEnemies: Enemy[] = [
  {
    id: 'e1',
    name: 'Space Drone',
    health: 50,
    attack: 5,
    defense: 3,
    image: 'bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20',
    description: 'A small automated drone patrolling this sector.',
    rewards: [
      { type: 'gold', amount: 50, name: 'Gold', icon: '💰' },
      { type: 'cosmic-dust', amount: 10, name: 'Cosmic Dust', icon: '✨' }
    ]
  },
  {
    id: 'e2',
    name: 'Void Stalker',
    health: 75,
    attack: 8,
    defense: 5,
    image: 'bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-violet-500/20',
    description: 'A predatory alien species that hunts in the asteroid fields.',
    rewards: [
      { type: 'gold', amount: 75, name: 'Gold', icon: '💰' },
      { type: 'cosmic-dust', amount: 15, name: 'Cosmic Dust', icon: '✨' },
      { type: 'artifact', amount: 1, name: 'Void Crystal', artifactId: 'a4', icon: '🔮' }
    ]
  },
  {
    id: 'e3',
    name: 'Cosmic Devourer',
    health: 150,
    attack: 15,
    defense: 10,
    image: 'bg-gradient-to-br from-red-900/20 via-red-700/20 to-red-500/20',
    description: 'A massive entity that consumes all matter in its path.',
    rewards: [
      { type: 'gold', amount: 200, name: 'Gold', icon: '💰' },
      { type: 'cosmic-dust', amount: 50, name: 'Cosmic Dust', icon: '✨' },
      { type: 'artifact', amount: 1, name: 'Devourer Core', artifactId: 'a5', icon: '💎' }
    ]
  }
];

const Combat: React.FC = () => {
  const [playerStats, setPlayerStats] = useState<CombatStats>({
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 5
  });

  const [currentEnemy, setCurrentEnemy] = useState<Enemy | null>(null);
  const [inCombat, setInCombat] = useState(false);
  const [combatLogs, setCombatLogs] = useState<CombatLogData[]>([]);
  const [equippedArtifacts, setEquippedArtifacts] = useState<Artifact[]>([]);
  const [availableArtifacts, setAvailableArtifacts] = useState(mockArtifacts);
  const [enemyHealth, setEnemyHealth] = useState(0);

  // Initialize the player stats based on equipped artifacts
  useEffect(() => {
    calculatePlayerStats();
  }, [equippedArtifacts]);

  const calculatePlayerStats = () => {
    let baseStats = {
      health: 100,
      maxHealth: 100,
      attack: 10,
      defense: 5
    };

    equippedArtifacts.forEach(artifact => {
      switch (artifact.boost.type) {
        case 'health':
          baseStats.health += artifact.boost.amount;
          baseStats.maxHealth += artifact.boost.amount;
          break;
        case 'attack':
          baseStats.attack += artifact.boost.amount;
          break;
        case 'defense':
          baseStats.defense += artifact.boost.amount;
          break;
        default:
          break;
      }
    });

    setPlayerStats(baseStats);
  };

  const equipArtifact = (artifactId: string) => {
    // Find the artifact
    const artifact = availableArtifacts.find(a => a.id === artifactId);
    if (!artifact) return;

    // Update available artifacts
    const newAvailableArtifacts = availableArtifacts.map(a =>
      a.id === artifactId ? { ...a, equipped: true } : a
    );

    // Add to equipped artifacts
    setEquippedArtifacts([...equippedArtifacts, { ...artifact, equipped: true }]);
    setAvailableArtifacts(newAvailableArtifacts);

    addCombatLog({
      id: Date.now().toString(),
      message: `Equipped ${artifact.name}`,
      type: 'system',
      timestamp: Date.now()
    });
  };

  const unequipArtifact = (artifactId: string) => {
    // Find the artifact
    const artifact = equippedArtifacts.find(a => a.id === artifactId);
    if (!artifact) return;

    // Remove from equipped artifacts
    const newEquippedArtifacts = equippedArtifacts.filter(a => a.id !== artifactId);
    setEquippedArtifacts(newEquippedArtifacts);

    // Update available artifacts
    const newAvailableArtifacts = availableArtifacts.map(a =>
      a.id === artifactId ? { ...a, equipped: false } : a
    );
    setAvailableArtifacts(newAvailableArtifacts);

    addCombatLog({
      id: Date.now().toString(),
      message: `Unequipped ${artifact.name}`,
      type: 'system',
      timestamp: Date.now()
    });
  };

  const startCombat = () => {
    if (inCombat) return;

    // Reset combat logs
    setCombatLogs([]);

    // Select a random enemy
    const randomEnemy = mockEnemies[Math.floor(Math.random() * mockEnemies.length)];
    setCurrentEnemy(randomEnemy);
    setEnemyHealth(randomEnemy.health);

    addCombatLog({
      id: Date.now().toString(),
      message: `Encountered a ${randomEnemy.name}!`,
      type: 'system',
      timestamp: Date.now()
    });

    setInCombat(true);

    // Start combat rounds
    setTimeout(combatRound, 1500);
  };

  const combatRound = () => {
    if (!currentEnemy || !inCombat) return;

    // Player attacks first
    const playerDamage = Math.max(1, playerStats.attack - currentEnemy.defense / 2);
    const newEnemyHealth = Math.max(0, enemyHealth - playerDamage);

    addCombatLog({
      id: Date.now().toString(),
      message: `Your probe attacks for ${playerDamage} damage!`,
      type: 'player',
      timestamp: Date.now()
    });

    setEnemyHealth(newEnemyHealth);

    // Check if enemy is defeated
    if (newEnemyHealth <= 0) {
      enemyDefeated();
      return;
    }

    // Enemy attacks
    setTimeout(() => {
      if (!currentEnemy || !inCombat) return;

      const enemyDamage = Math.max(1, currentEnemy.attack - playerStats.defense / 2);
      const newPlayerHealth = Math.max(0, playerStats.health - enemyDamage);

      addCombatLog({
        id: Date.now().toString(),
        message: `${currentEnemy.name} attacks for ${enemyDamage} damage!`,
        type: 'enemy',
        timestamp: Date.now()
      });

      setPlayerStats((prev: CombatStats) => ({ ...prev, health: newPlayerHealth }));

      // Check if player is defeated
      if (newPlayerHealth <= 0) {
        playerDefeated();
        return;
      }

      // Continue combat
      setTimeout(combatRound, 1500);
    }, 1500);
  };

  const enemyDefeated = () => {
    if (!currentEnemy) return;

    addCombatLog({
      id: Date.now().toString(),
      message: `You've defeated the ${currentEnemy.name}!`,
      type: 'system',
      timestamp: Date.now()
    });

    // Award rewards
    currentEnemy.rewards.forEach(reward => {
      addCombatLog({
        id: Date.now().toString(),
        message: `Received ${reward.amount} ${reward.name}`,
        type: 'reward',
        timestamp: Date.now()
      });
    });

    toast.success(`Defeated ${currentEnemy.name}!`, {
      //   description: `You received rewards: ${currentEnemy.rewards.map(r => `${r.amount} ${r.name}`).join(', ')}`
    });

    setInCombat(false);

    // 50% chance to encounter a new enemy
    if (Math.random() > 0.5) {
      setTimeout(startCombat, 3000);
    }
  };

  const playerDefeated = () => {
    if (!currentEnemy) return;

    addCombatLog({
      id: Date.now().toString(),
      message: `Your probe has been destroyed by the ${currentEnemy.name}!`,
      type: 'system',
      timestamp: Date.now()
    });

    toast.error(`Probe destroyed by ${currentEnemy.name}!`, {
      //   description: "Your probe has been lost in combat. Equip another probe to continue."
    });

    setInCombat(false);

    // Reset player health
    setTimeout(() => {
      setPlayerStats((prev: CombatStats) => ({ ...prev, health: prev.maxHealth }));
    }, 3000);
  };

  const addCombatLog = (log: CombatLogData) => {
    setCombatLogs(prev => [...prev, log]);
  };

  const getEnemyHealthPercentage = () => {
    if (!currentEnemy) return 0;
    return (enemyHealth / currentEnemy.health) * 100;
  };

  const getPlayerHealthPercentage = () => {
    return (playerStats.health / playerStats.maxHealth) * 100;
  };

  return (

    !process.env.NEXT_PUBLIC_ENABLE_TESTNETS ? (
      <div className="min-h-screen text-foreground overflow-x-hidden md:pt-24">
        <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
          <ComingSoon />
        </main>
      </div>
    ) : (

      <div className="min-h-screen text-foreground overflow-x-hidden">
        <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold mb-2">Cosmic Combat</h1>
            <p className="text-white/70">Equip your probe with artifacts and send it into battle against cosmic enemies.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Probe Equipment Section */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-black/30 border-white/10">
                <CardHeader>
                  <CardTitle>Probe Stats</CardTitle>
                  <CardDescription>Equip artifacts to improve your probe&apos;s stats</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span>Health</span>
                      </div>
                      <span>{playerStats.health} / {playerStats.maxHealth}</span>
                    </div>
                    <Progress value={getPlayerHealthPercentage()} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Axe className="w-4 h-4 text-orange-400" />
                      <span>Attack</span>
                    </div>
                    <span>{playerStats.attack}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span>Defense</span>
                    </div>
                    <span>{playerStats.defense}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={startCombat}
                    disabled={inCombat}
                    className="w-full"
                  >
                    {inCombat ? "Combat in Progress" : "Send Probe"}
                  </Button>
                </CardFooter>
              </Card>

              <ProbeEquipment
                availableArtifacts={availableArtifacts.filter(a => !a.equipped)}
                equippedArtifacts={equippedArtifacts}
                onEquip={equipArtifact}
                onUnequip={unequipArtifact}
              />
            </div>

            {/* Combat Section */}
            <div className="lg:col-span-8 space-y-6">
              {currentEnemy && inCombat ? (
                <Card className="bg-black/30 border-white/10">
                  <CardHeader className="flex flex-row items-center space-y-0 gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentEnemy.image}`}>
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle>{currentEnemy.name}</CardTitle>
                      <CardDescription>{currentEnemy.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-400" />
                          <span>Health</span>
                        </div>
                        <span>{enemyHealth} / {currentEnemy.health}</span>
                      </div>
                      <Progress value={getEnemyHealthPercentage()} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Axe className="w-4 h-4 text-orange-400" />
                        <span>Attack: {currentEnemy.attack}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span>Defense: {currentEnemy.defense}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Possible Rewards:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentEnemy.rewards.map((reward: { type: string; amount: number; name: string; icon: string; artifactId?: string }, idx: number) => (
                          <Badge key={idx} variant="outline" className="bg-white/5 border-white/10">
                            {reward.icon} {reward.amount} {reward.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-black/30 border-white/10 h-64 flex items-center justify-center">
                  <CardContent className="text-center">
                    <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400 opacity-50" />
                    <h3 className="text-xl font-medium mb-2">No Active Combat</h3>
                    <p className="text-white/70">Equip your probe and send it into battle</p>
                  </CardContent>
                </Card>
              )}

              <CombatLog logs={combatLogs} />
            </div>
          </div>
        </main>
      </div>

    )
  )
}


export default Combat;

"use client";

import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, Coins, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDeployment } from '@/hooks/useDeployment';
import { useAccount } from 'wagmi';
import { zeroAddress } from 'viem';
import { useReadPlanetVAlphaTokensOfOwner, useReadScenarioGetEntity, useReadStatsEntityGetStatSet, useReadStatsEntityGetStatSetNames } from '@/generated';
import WalletButton from '../WalletButton';
import { useScenarios } from '../ScenarioContext';
import { safeb32 } from '@/lib/utils/utils';
import PlanetStats from '../codex/PlanetStats';
import MintSection from '../home/MintSection';

interface PlanetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Planet {
  id: string;
  name: string;
  discovered: string;
  gradient: string;
  stats: {
    name: string;
    value: number;
    color: string;
  }[];
}

const PlanetModal: React.FC<PlanetModalProps> = ({ isOpen, onClose }) => {


  const { deploy } = useDeployment()
  const { address } = useAccount()

  const [selectedTokenId, setSelectedTokenId] = useState<bigint>(BigInt(0));
  const { data: held } = useReadPlanetVAlphaTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.Planet })




  useEffect(() => {
    if (held && held.length > 0) {
      setSelectedTokenId(held[0]);
    }
  }
    , [held, setSelectedTokenId]);

  // Mock planets data - you can connect this to your resource context later
  const planets: Planet[] = [
    {
      id: '#7834',
      name: 'Cosmic Genesis',
      discovered: 'Aug 2024',
      gradient: 'from-blue-500 via-purple-600 to-pink-500',
      stats: [
        { name: 'Atmosphere', value: 75, color: 'from-blue-400 to-cyan-400' },
        { name: 'Resources', value: 60, color: 'from-green-400 to-emerald-400' },
        { name: 'Technology', value: 45, color: 'from-purple-400 to-violet-400' },
        { name: 'Population', value: 30, color: 'from-orange-400 to-red-400' },
        { name: 'Defense', value: 85, color: 'from-red-400 to-pink-400' },
      ]
    },
    {
      id: '#9241',
      name: 'Nova Citadel',
      discovered: 'Sep 2024',
      gradient: 'from-green-500 via-teal-600 to-blue-500',
      stats: [
        { name: 'Atmosphere', value: 90, color: 'from-blue-400 to-cyan-400' },
        { name: 'Resources', value: 85, color: 'from-green-400 to-emerald-400' },
        { name: 'Technology', value: 70, color: 'from-purple-400 to-violet-400' },
        { name: 'Population', value: 55, color: 'from-orange-400 to-red-400' },
        { name: 'Defense', value: 40, color: 'from-red-400 to-pink-400' },
      ]
    },
    {
      id: '#5672',
      name: 'Stellar Outpost',
      discovered: 'Oct 2024',
      gradient: 'from-orange-500 via-red-600 to-purple-500',
      stats: [
        { name: 'Atmosphere', value: 35, color: 'from-blue-400 to-cyan-400' },
        { name: 'Resources', value: 95, color: 'from-green-400 to-emerald-400' },
        { name: 'Technology', value: 80, color: 'from-purple-400 to-violet-400' },
        { name: 'Population', value: 15, color: 'from-orange-400 to-red-400' },
        { name: 'Defense', value: 60, color: 'from-red-400 to-pink-400' },
      ]
    }
  ];

  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);
  const currentPlanet = planets[selectedPlanetIndex];

  const handlePreviousPlanet = () => {
    setSelectedPlanetIndex((prev) => (prev === 0 ? planets.length - 1 : prev - 1));
  };

  const handleNextPlanet = () => {
    setSelectedPlanetIndex((prev) => (prev === planets.length - 1 ? 0 : prev + 1));
  };

  const handlePlanetSelect = (planetId: string) => {
    const index = planets.findIndex(planet => planet.id === planetId);
    if (index !== -1) {
      setSelectedPlanetIndex(index);
    }
  };

  const { scenarios } = useScenarios();


  const { data: whichEntity, error: whichError } = useReadScenarioGetEntity({ args: [deploy.PlanetStats], address: scenarios ? scenarios[0] : "0x0" })
  const { data: statSets } = useReadStatsEntityGetStatSetNames({ args: [], address: whichEntity })
  const { data: rarity, error: rarityError } = useReadStatsEntityGetStatSet({ args: [selectedTokenId, safeb32("RARITY")], address: whichEntity })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>

      <DialogContent className="max-w-sm mx-auto max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">

        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Home className="h-5 w-5 text-blue-400" />
            CODEX {' // '} PLANETARY BODY
          </DialogTitle>
        </DialogHeader>
        {held && held.length > 0 && (
          <div className="space-y-6">

            <div className="flex items-center justify-between">



              <Button
                variant="ghost"
                size="sm"
                onClick={handlePreviousPlanet}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Select value={currentPlanet.id} onValueChange={handlePlanetSelect}>
                <SelectTrigger className="bg-white/10  text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/20">
                  {held.map((planet) => (
                    <SelectItem key={planet} value={"#" + planet.toString()} className="text-white hover:bg-white/10">
                      {planet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>


              <Button
                variant="ghost"
                size="sm"
                onClick={handleNextPlanet}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>


            </div>


            {/* Planet Image */}
            <div className="flex justify-center">
              <div className={`w-32 h-32 rounded-lg bg-gradient-to-br ${currentPlanet.gradient} animate-pulse-slow shadow-lg shadow-purple-500/20 relative overflow-hidden`}>
                <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-blue-600/30 via-purple-700/30 to-pink-600/30 backdrop-blur-sm">
                  <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-green-400/40 animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-yellow-400/40 animate-pulse"></div>
                  <div className="absolute top-10 right-4 w-3 h-3 rounded-full bg-red-400/40 animate-pulse"></div>
                </div>
              </div>
            </div>

            {whichEntity && statSets?.map((statSet, index) => (

              <PlanetStats
                key={index}
                // stats={entityData}
                statSetName={statSet}
                selectedTokenId={selectedTokenId}
                whichEntity={whichEntity}
              />
            )
            )}

            {/* Planet Stats - Made Smaller */}
            <div className="space-y-2">
              {/* <h3 className="text-base font-semibold text-center">Planet Statistics</h3> */}
              {currentPlanet.stats.map((stat, index) => (
                <div key={stat.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/80">{stat.name}</span>
                    <span className="text-white font-medium">{stat.value}%</span>
                  </div>
                  <Progress
                    value={stat.value}
                    className={`h-1.5 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:${stat.color}`}
                  />
                </div>
              ))}
            </div>



            <div className=" pt-2">

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3"
              >
                <Coins className="mr-2 h-4 w-4" />
                Mint Planet NFT
              </Button>
            </div>

          </div>
        )}
        {held && held.length == 0 && (

          <div className="mt-4 text-center text-white/60 text-sm">
            <div className=" pt-2">
              {/* <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3"
              >
                <Coins className="mr-2 h-4 w-4" />
                Mint Planet NFT
              </Button> */}
            </div>
            <MintSection
              forceMobile={true}
            />
          </div>


        )}
      </DialogContent>
    </Dialog >
  );
};

export default PlanetModal;

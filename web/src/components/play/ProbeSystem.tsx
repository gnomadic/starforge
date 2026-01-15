"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Rocket, Zap, Shield, Target, Home, Heart, Backpack, ArrowBigDownDashIcon } from 'lucide-react';
import VerticalProgress from './VerticalProgress';

interface ProbeSystemProps {
    planetX: number;
    planetY: number;
    onOpenModal: (modalType: string) => void;

}

const ProbeSystem: React.FC<ProbeSystemProps> = ({ planetX, planetY, onOpenModal }) => {

    const maxMiles = 100;
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
    // const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 300;

    // const {centerX, centerY} = dynamic(() => import("@/hooks/useWindowSize") useWindowCenter, { ssr: false });



    const [isLaunched, setIsLaunched] = useState(false);
    // const [probePosition, setProbePosition] = useState({ x: centerX, y: planetY });
    // const [planetPosition, setPlanetPosition] = useState({ x: planetX, y: planetY });
    const [miles, setMiles] = useState(0);
    const [progress, setProgress] = useState(0);
    const [showEnemy, setShowEnemy] = useState(false);
    const [enemyPosition, setEnemyPosition] = useState({ x: 0, y: 0 });
    const [showActionButtons, setShowActionButtons] = useState(false);
    const [inCombat, setInCombat] = useState(false);
    const [probeHealth, setProbeHealth] = useState(20);
    const [enemyHealth, setEnemyHealth] = useState(10);
    const [isProbesTurn, setIsProbesTurn] = useState(true);
    const [combatLog, setCombatLog] = useState<string[]>([]);



    // Launch probe
    const launchProbe = () => {
        setIsLaunched(true);
        setMiles(0);
        setProgress(0);
        setShowEnemy(false);
        setShowActionButtons(false);
        setInCombat(false);
        setProbeHealth(20);
        setCombatLog([]);
    };

    // Miles counter - 1 mile per second (only when not in combat)
    useEffect(() => {
        if (!isLaunched || inCombat) return;

        const interval = setInterval(() => {
            setMiles(prev => {
                const newMiles = prev + 1;
                setProgress((newMiles / maxMiles) * 100);
                return newMiles;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isLaunched, inCombat]);

    // Enemy encounter every 5 seconds (only when not in combat)
    useEffect(() => {
        if (!isLaunched || inCombat) return;

        const interval = setInterval(() => {
            setShowEnemy(true);
            setShowActionButtons(true);
            setEnemyHealth(10);
            setEnemyPosition({
                x: centerX + (Math.random() - 0.5) * 100,
                y: 140
            });
            setInCombat(true);
        }, 5000);

        return () => clearInterval(interval);
    }, [isLaunched, inCombat, centerX]);

    // Animate probe and planet positions (only when not in combat)
    // useEffect(() => {
    //     if (!isLaunched || inCombat) return;

    //     // const animationInterval = setInterval(() => {
    //     //     // Move probe towards center
    //     //     // setProbePosition(prev => ({
    //     //     //     x: prev.x + (centerX - prev.x) * 0.02,
    //     //     //     y: prev.y + (centerY - prev.y) * 0.02
    //     //     // }));

    //     //     // Move planet down and off screen
    //     //     // setPlanetPosition(prev => ({
    //     //     //     x: prev.x,
    //     //     //     y: prev.y + 6
    //     //     // }));
    //     // }, 50);

    //     return () => clearInterval(animationInterval);
    // }, [isLaunched, inCombat, centerX, centerY]);

    const startCombat = () => {
        setInCombat(true);
        setIsProbesTurn(true);
        setCombatLog(['Combat started!']);
    };

    const attack = () => {
        if (!isProbesTurn) return;

        const newEnemyHealth = Math.max(0, enemyHealth - 5);
        setEnemyHealth(newEnemyHealth);
        setCombatLog(prev => [...prev, 'Probe attacks for 5 damage!']);

        if (newEnemyHealth <= 0) {
            // Enemy defeated
            setCombatLog(prev => [...prev, 'Enemy defeated!']);
            setTimeout(() => {
                setShowEnemy(false);
                setShowActionButtons(false);
                setInCombat(false);
                setCombatLog([]);
            }, 2000);
        } else {
            // Enemy's turn
            setIsProbesTurn(false);
            setTimeout(() => {
                const newProbeHealth = Math.max(0, probeHealth - 5);
                setProbeHealth(newProbeHealth);
                setCombatLog(prev => [...prev, 'Enemy attacks for 5 damage!']);

                if (newProbeHealth <= 0) {
                    // Probe defeated - game over
                    setCombatLog(prev => [...prev, 'Probe destroyed! Returning home...']);
                    setTimeout(() => {
                        returnHome();
                    }, 2000);
                } else {
                    setIsProbesTurn(true);
                }
            }, 1500);
        }
    };

    const returnHome = () => {
        setIsLaunched(false);
        // setProbePosition({ x: planetX, y: planetY });
        // setPlanetPosition({ x: planetX, y: planetY });
        setMiles(0);
        setProgress(0);
        setShowEnemy(false);
        setShowActionButtons(false);
        setInCombat(false);
        setProbeHealth(20);
        setCombatLog([]);
    };

    return (
        <div className="relative w-full h-full">
            {/* Miles Progress Bar */}
            {isLaunched && (
                <div className="fixed right-4 top-60 bottom-32 w-8 flex flex-col items-center">
                    <VerticalProgress
                        currentNumber={miles}
                    />
                    {/* <div className="text-white text-xs mb-2 whitespace-nowrap">
                        {miles} AU
                    </div>
                    <div className="flex-1 w-full">
                        <Progress
                            value={progress}
                            className="h-full w-full [&>div]:bg-gradient-to-t [&>div]:from-blue-500 [&>div]:to-cyan-400"
                            style={{ writingMode: 'vertical-lr' }}
                        />
                    </div>
                    <div className="text-white text-xs mt-2">
                        {maxMiles}
                    </div> */}
                </div>
            )}

            {/* Combat Status */}
            {inCombat && (
                <div className="fixed top-20 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-green-400" />
                            <span>Probe: {probeHealth}/20</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-red-400" />
                            <span>Enemy: {enemyHealth}/10</span>
                        </div>
                    </div>
                    <div className="text-xs text-center">
                        {isProbesTurn ? "Your turn!" : "Enemy's turn..."}
                    </div>
                    {combatLog.length > 0 && (
                        <div className="mt-2 text-xs text-gray-300">
                            {combatLog[combatLog.length - 1]}
                        </div>
                    )}
                </div>
            )}

            {/* Planet */}
            <div
                className="absolute w-64 h-64 transition-all duration-1000 ease-out left-1/4 top-1/3"
                style={{
                    // left: planetPosition.x - 128,
                    // top: planetPosition.y - 128,
                    top: isLaunched ? "100%" : '33%',
                    transform: isLaunched ? 'scale(0)' : 'scale(1)'
                }}
            >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 animate-pulse-slow shadow-2xl shadow-purple-500/20">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/30 via-purple-700/30 to-pink-600/30 backdrop-blur-sm">
                        <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-green-400/40 animate-pulse"></div>
                        <div className="absolute bottom-12 right-12 w-8 h-8 rounded-full bg-yellow-400/40 animate-pulse"></div>
                        <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-red-400/40 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Probe */}
            {isLaunched && (
                <div
                    className="absolute w-8 h-8 transition-all duration-100 ease-linear left-1/2 top-2/3"
                // style={{
                //     left: probePosition.x - 16,
                //     top: probePosition.y - 16
                // }}
                >
                    <div className="w-full h-full bg-gradient-to-t from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50">
                        <div className="absolute inset-1 bg-white/30 rounded-full"></div>
                    </div>
                </div>
            )}

            {/* Enemy */}
            {showEnemy && (
                <div
                    className="absolute w-12 h-12 transition-all duration-1000 ease-out animate-pulse left-1/2 top-1/3"
                // style={{
                //     left: enemyPosition.x - 24,
                //     top: enemyPosition.y 
                // }}
                >
                    <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 transform rotate-45 shadow-lg shadow-red-500/50">
                        <div className="absolute inset-2 bg-red-300/50 transform rotate-45"></div>
                    </div>
                </div>
            )}

            {/* Launch Button */}
            {!isLaunched && (
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <Button
                        onClick={() =>{onOpenModal('upgrades')}}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/25 animate-pulse mb-12"
                    >
                        <Rocket className="mr-2 h-6 w-6" />
                        Prepare Probe
                    </Button>
                    <Button
                        onClick={launchProbe}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/25 animate-pulse"
                    >
                        <Rocket className="mr-2 h-6 w-6" />
                        Launch Probe
                    </Button>
                </div>
            )}

            {/* Action Buttons */}
            {/* {showActionButtons && !inCombat && (
                <div className="fixed bottom-20 left-0 right-0 flex justify-around px-4 py-2 bg-black/50 backdrop-blur-sm">
                    <Button
                        onClick={startCombat}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        <Target className="h-6 w-6" />
                        <span className="text-xs">Attack</span>
                    </Button>
                    <Button
                        onClick={() => {
                            setShowEnemy(false);
                            setShowActionButtons(false);
                        }}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    >
                        <Shield className="h-6 w-6" />
                        <span className="text-xs">Defend</span>
                    </Button>
                    <Button
                        onClick={() => {
                            setShowEnemy(false);
                            setShowActionButtons(false);
                        }}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10"
                    >
                        <Zap className="h-6 w-6" />
                        <span className="text-xs">Boost</span>
                    </Button>
                    <Button
                        onClick={returnHome}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-green-400 hover:text-green-300 hover:bg-green-500/10"
                    >
                        <Home className="h-6 w-6" />
                        <span className="text-xs">Return</span>
                    </Button>
                </div>
            )} */}

            {/* Combat Actions */}
            {inCombat && isProbesTurn && (
                <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4 py-2 bg-black/50 backdrop-blur-sm">

                    {/* <Button
            onClick={attack}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full"
          >
            <Target className="mr-2 h-4 w-4" />
            Attack (5 damage)
          </Button> */}
                    <Button
                        onClick={attack}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        <Target className="h-6 w-6" />
                        <span className="text-xs">Signal</span>
                    </Button>
                    <Button
                        onClick={attack}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        {/* <Target className="h-6 w-6" /> */}
                        <Shield className="h-6 w-6" />
                        <span className="text-xs">Shield</span>
                    </Button>
                    <Button
                        onClick={attack}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        <Backpack className="h-6 w-6" />
                        <span className="text-xs">Scan</span>
                    </Button>
                    <Button
                        onClick={returnHome}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        <ArrowBigDownDashIcon className="h-6 w-6" />
                        <span className="text-xs">Extract</span>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProbeSystem;
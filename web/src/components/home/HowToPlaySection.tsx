"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface FeaturePoint {
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'right' | 'bottom-right' | 'bottom-left' | 'left';
}

const HowToPlaySection: React.FC = () => {
  const features: FeaturePoint[] = [
    {
      title: "Your Planet is Your Hero",
      description: "Every game needs a hero. Yours is your planet. It grows, evolves, and remembers everything you do.",
      position: "top-left"
    },
    {
      title: "Composable Gameplay",
      description: "Craft your story through Scenarios.  These are modular adventures with custom stats, supplies, jobs, quests, and more.",
      position: "left"
    },
    {
      title: "Idle, Not Passive",
      description: "Assign jobs, earn resources in real time, and shape your world — even when you're not online.",
      position: "top-right"
    },
    {
      title: "Fully Onchain, Forever",
      description: "Everything is all onchain. Transparent, persistent, and open for anyone to extend.",
      position: "right"
    },
    {
      title: "Built for Roleplay & Community",
      description: "Create immersive Scenarios and shape shared worlds together.",
      position: "bottom-right"
    },
    {
      title: "Explore Player-Created Worlds",
      description: "Bring your planet on a journey. Discover new worlds — or make your own.",
      position: "bottom-left"
    }
  ];


  return (
    <section id="how-to-play" className="py-24 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto font-mono">
        <div className="text-center mb-20 reveal-on-scroll">
          <Badge variant="info" className="">
            The Plan
          </Badge>
          <h2 className="mt-6 text-4xl font-mono font-bold">
            We will <span className="text-gradient">build</span> the machine to stop this.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto font-mono">
            We can&apos;t do it without you.
          </p>
          <p className='pt-6'>
            <Link href="https://t.me/+Js2_GaKRbkBkZGE5" target="_blank" rel="noopener noreferrer">
              <Button>
                Join our Telegram
              </Button>
            </Link>
          </p>
        </div>

        <div className="reveal-on-scroll">
          {/* Mobile Grid View */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-mono font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm font-signika">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Large Screen Cool Circle View */}
          <div className="hidden lg:block relative h-[600px] md:h-[700px]">
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full flex items-center justify-center z-10">
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <radialGradient id="dope" fy="0.5" fx="0.5">
                  <stop stopColor="hsl(0deg, 0%, 0%)" offset="00%" />
                  <stop stopColor="hsl(219deg, 56%, 31%)" offset="70%" />
                  <stop stopColor="hsl(219deg, 56%, 53%)" offset="90%" />
                  <stop stopColor="hsl(219deg, 56%, 63%)" offset="95%" />
                  <stop stopColor="hsl(219deg, 56%, 83%)" offset="100%" />
                </radialGradient>
                <circle cx="128" cy="128" r="103" fill="url(#dope)" />
              </svg>
            </div>
            {/* Connection Lines and Feature Points */}
            {features.map((feature, index) => {
              let positionClasses = "";
              switch (feature.position) {
                case "top-left":
                  positionClasses = "lg:left-[10%] lg:top-[10%]";
                  break;
                case "top-right":
                  positionClasses = "lg:right-[10%] lg:top-[10%]";
                  break;
                case "right":
                  positionClasses = "lg:right-[5%] lg:top-1/2 lg:-translate-y-1/2";
                  break;
                case "bottom-right":
                  positionClasses = "lg:right-[10%] lg:bottom-[10%]";
                  break;
                case "bottom-left":
                  positionClasses = "lg:left-[10%] lg:bottom-[10%]";
                  break;
                case "left":
                  positionClasses = "lg:left-[5%] lg:top-1/2 lg:-translate-y-1/2";
                  break;
              }
              return (
                <div key={index} className={cn("absolute max-w-[250px] z-20", positionClasses)}>
                  <div className="glass rounded-xl p-5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-medium mb-2 font-mono">{feature.title}</h3>
                    <p className="text-white/70 text-sm font-signika">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
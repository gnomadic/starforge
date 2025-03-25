"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface FeaturePoint {
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'right' | 'bottom-right' | 'bottom-left' | 'left';
}

const HowToPlaySection: React.FC = () => {
  const features: FeaturePoint[] = [
    {
      title: "Scan and discover planets",
      description: "discover your planet",
      position: "top-left"
    },
    {
      title: "Terraform and establish life",
      description: "discover your planet",
      position: "top-right"
    },
    {
      title: "Special Operations for the council",
      description: "discover your planet",
      position: "right"
    },
    {
      title: "Go on Ventures into the unknown",
      description: "discover your planet",
      position: "bottom-right"
    },
    {
      title: "Send Probes to clear up the unknown",
      description: "discover your planet",
      position: "bottom-left"
    },
    {
      title: "Collect artifacts in your museum, and trade them on the market",
      description: "discover your planet",
      position: "left"
    }
  ];

  return (
    <section id="how-to-play" className="py-24 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/30 text-primary rounded-full font-signika">The Plan</span>
          <h2 className="mt-6 text-4xl font-mono font-bold">
            We will <span className="text-gradient">build</span> the machine to stop this.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto font-mono">
            We can&apos;t do it without you.
          </p>
        </div>

        <div className="relative h-[600px] md:h-[700px] reveal-on-scroll">
          {/* Center Circle */}


          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full  flex items-center justify-center z-10 ">
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <radialGradient id="dope" fy='0.5' fx='0.5'>
                <stop stopColor="hsl(0deg, 0%, 0%)" offset="00%" />
                <stop stopColor="hsl(219deg, 56%, 31%)" offset="70%" />
                <stop stopColor="hsl(219deg, 56%, 53%)" offset="90%" />
                <stop stopColor="hsl(219deg, 56%, 63%)" offset="95%" />
                <stop stopColor="hsl(219deg, 56%, 83%)" offset="100%" />
              </radialGradient>

              <circle cx="128" cy="128" r="103" fill="url(#dope)" />


            </svg>
            {/* 
            <div className="w-40 h-40 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
     
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/20"></div>
                </div>
                
              </div>
            </div> */}
          </div>

          {/* Connection Lines and Feature Points */}
          {features.map((feature, index) => {
            // Calculate positions based on feature.position
            let positionClasses = "";
            let lineStyle = {};

            switch (feature.position) {
              case "top-left":
                positionClasses = "left-[10%] top-[15%]";
                break;
              case "top-right":
                positionClasses = "right-[10%] top-[15%]";
                break;
              case "right":
                positionClasses = "right-[5%] top-1/2 -translate-y-1/2";
                break;
              case "bottom-right":
                positionClasses = "right-[10%] bottom-[15%]";
                break;
              case "bottom-left":
                positionClasses = "left-[10%] bottom-[15%]";
                break;
              case "left":
                positionClasses = "left-[5%] top-1/2 -translate-y-1/2";
                break;
            }

            return (
              <div key={index} className={cn("absolute max-w-[250px] z-20", positionClasses)}>
                {/* Feature Box */}
                <div className="glass rounded-xl p-5 border border-white/10 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}>
                  <h3 className="text-xl font-medium mb-2 font-mono">{feature.title}</h3>
                  <p className="text-white/70 text-sm font-signika">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
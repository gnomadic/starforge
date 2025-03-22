"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Box, 
  Leaf, 
  Cpu, 
  ArrowUpCircle,
  Thermometer,
  Droplets,
  TreeDeciduous, // Changed from Tree to TreeDeciduous
  Wind,
  Circle
} from 'lucide-react';
import { describe } from "node:test"
import { energy } from "viem/chains"
import { cn } from "@/lib/utils"

interface ProgressItem {
  id: number
  title: string
  description: string
  value: number
  maxValue: number
  color: string
}

export default function PlanetInfo() {
  const [progressItems, setProgressItems] = useState<ProgressItem[]>([
    {
      id: 1,
      title: "Project Completion",
      description: "Overall progress of the current project",
      value: 0,
      maxValue: 100,
      color: "bg-primary",
    },
    {
      id: 2,
      title: "Budget Utilization",
      description: "Percentage of allocated budget used",
      value: 0,
      maxValue: 100,
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Team Performance",
      description: "Efficiency rating based on completed tasks",
      value: 0,
      maxValue: 100,
      color: "bg-green-500",
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Percentage of tests passed successfully",
      value: 0,
      maxValue: 100,
      color: "bg-yellow-500",
    },
    {
      id: 5,
      title: "Customer Satisfaction",
      description: "Based on recent feedback surveys",
      value: 0,
      maxValue: 100,
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Timeline Adherence",
      description: "How well we're sticking to deadlines",
      value: 0,
      maxValue: 100,
      color: "bg-rose-500",
    },
  ])

  // Animate progress bars on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressItems([
        { ...progressItems[0], value: 75 },
        { ...progressItems[1], value: 65 },
        { ...progressItems[2], value: 90 },
        { ...progressItems[3], value: 82 },
        { ...progressItems[4], value: 78 },
        { ...progressItems[5], value: 60 },
      ])
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const planet = {

    name: "Terra",
    description: "Your home planet, a perfect cradle for life.",
    stats: [{name: "Temperature", value: 0.2, description: "The average temperature of the planet."},
            {name: "Water", value: 0.5, description: "The amount of water on the planet."},
            {name: "Biomass", value: 0.4, description: "The amount of life on the planet."},
            {name: "Atmosphere", value: 0.6, description: "The composition of the planet's atmosphere."},
            {name: "Density", value: 0.78, description: "The density of the planet."},


            
          ],
    resourceMultiplier: {
      energy: 1,
      matter: 1,
      life: 1,
      technology: 1
    }
  }

  return (
    <div className="cosmic-panel p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">{planet.name}</h2>
        <p className="text-muted-foreground">{planet.description}</p>

      </div>

      {/* Planet Stats */}
      {planet.stats && (
        <div className="space-y-4">
          <h3 className="font-semibold">Planet Stats</h3>
          <div className="space-y-3">
            {Object.entries(planet.stats).map(([key, stat]) => (
              <div key={key} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {key === 'temperature' && <Thermometer className="h-4 w-4" />}
                    {key === 'water' && <Droplets className="h-4 w-4" />}
                    {key === 'biomass' && <TreeDeciduous className="h-4 w-4" />} {/* Changed Tree to TreeDeciduous */}
                    {key === 'atmosphere' && <Wind className="h-4 w-4" />}
                    {key === 'density' && <Circle className="h-4 w-4" />}
                    <span className="text-sm font-medium">{stat.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(stat.value * 100)}%
                  </span>
                </div>
                <Progress value={stat.value * 100} className="h-2" />
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resource Multipliers */}
      <div className="space-y-4">
        <h3 className="font-semibold">Resource Generation</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.energy > 1 ? "text-yellow-500" : "text-muted-foreground"
          )}>
            <Zap className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.energy}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.matter > 1 ? "text-slate-500" : "text-muted-foreground"
          )}>
            <Box className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.matter}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.life > 1 ? "text-green-500" : "text-muted-foreground"
          )}>
            <Leaf className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.life}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2",
            planet.resourceMultiplier.technology > 1 ? "text-blue-500" : "text-muted-foreground"
          )}>
            <Cpu className="h-4 w-4" />
            <span>×{planet.resourceMultiplier.technology}</span>
          </div>
        </div>
      </div>

      {/* Regeneration Level */}
      {/* <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Regeneration Level</h3>
          <span className="text-sm text-muted-foreground">
            {planet.regenerationLevel} / {planet.maxRegenerationLevel}
          </span>
        </div>
        <Progress 
          value={(planet.regenerationLevel / planet.maxRegenerationLevel) * 100} 
          className="h-2" 
        />
        {planet.regenerationLevel < planet.maxRegenerationLevel && (
          <Button
            onClick={() => regeneratePlanet(planet.id)}
            className="w-full"
            variant="default"
          >
            <ArrowUpCircle className="h-4 w-4 mr-2" />
            Regenerate Planet
          </But>
        )}
      </div> */}
    </div>
  );
};

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">Project Dashboard</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-6 md:grid-cols-2">
//           {progressItems.map((item) => (
//             <div key={item.id} className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-medium">{item.title}</h3>
//                 <span className="text-sm text-muted-foreground">{item.value}%</span>
//               </div>
//               <p className="text-sm text-muted-foreground">{item.description}</p>
//               <Progress
//                 value={item.value}
//                 max={item.maxValue}
//                 className="h-2 transition-all duration-500"
//                 // indicatorClassName={item.color}
//               />
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }







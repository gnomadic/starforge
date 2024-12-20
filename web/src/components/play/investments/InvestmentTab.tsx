"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Investment {
  name: string
  level: number
  description: string
}

const initialInvestments: Investment[] = [
  { name: "Infrastructure", level: 1, description: "Improve your city's roads and utilities" },
  { name: "Manufacturing", level: 1, description: "Increase production capacity" },
  { name: "Research", level: 1, description: "Develop new technologies" },
  { name: "Military", level: 1, description: "Strengthen your defenses" },
  { name: "Factories", level: 1, description: "Build more production facilities" },
]

type InvestmentTabProps = {
  planetName: string;
  // state: readonly [bigint, bigint, bigint, bigint] | undefined;
  // simulatedState: GameState;
}

export default function InvestmentTab({ planetName }: InvestmentTabProps) {
  const [day, setDay] = useState(1)
  const [investments, setInvestments] = useState<Investment[]>(initialInvestments)
  const [investedToday, setInvestedToday] = useState(false)

  const handleInvestment = (index: number) => {
    if (investedToday) return

    const updatedInvestments = [...investments]
    updatedInvestments[index].level += 1
    setInvestments(updatedInvestments)
    setInvestedToday(true)
  }

  const nextDay = () => {
    setDay(day + 1)
    setInvestedToday(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{planetName} Investments</CardTitle>
        <CardDescription className="flex justify-between items-center">
          <div>
            Welcome back.  Information is <span className="italic text-red">simulated</span> and must be synced with your client regularly.
          </div>
          <Button>Sync Data</Button>
        </CardDescription>
      </CardHeader>
      
      <CardContent >
        
        <p className="text-xl mb-4">Day: {day}</p>
        <div className="grid grid-cols-1 grid-cols-1 gap-4">
          {investments.map((investment, index) => (
            <Card key={investment.name}>
              <CardHeader>
                <CardTitle>{investment.name}</CardTitle>
                <CardDescription>Level: {investment.level}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div>
                  <p>{investment.description}</p>
                </div>
                <Button
                  onClick={() => handleInvestment(index)}
                  disabled={investedToday}
                  className="ml-4"
                >
                  Invest
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="mt-4" onClick={nextDay}>Next Day</Button>
      </CardContent>
    </Card>
  )
}
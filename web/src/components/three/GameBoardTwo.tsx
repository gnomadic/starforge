"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export interface Station {
  id: string;
  x: number;
  y: number;
  position: number;
  modifier: string;
  processingTime: number;

}

export interface Belt {
  id: string;
  stations: Station[];
  segments: number[]; // Lengths of each segment

}

export interface Item {
  id: string;
  type: string;
  timestamp: number;
  value: number;
}

export interface GameState {
  gold: number;
  pendingGold: number;
  processingItems: Item[];
  items: Item[];

}

const stationPositions = [
  { x: 80, y: 275 },  // Center of 1 vertical segment
  { x: 275, y: 450 }, // Center of 2 horizontal segment
  { x: 480, y: 300 }, // Center of 3 vertical segment
  { x: 300, y: 150 },  // Center of 4 horizontal segment
  { x: 155, y: 275 }, // Center of 5 horizontal segment
  { x: 275, y: 375 }, // Center of 6 horizontal segment
  { x: 405, y: 300 },  // Center of 7 horizontal segment
  { x: 300, y: 225 } // Center of 8 horizontal segment
];



const belt: Belt =
{
  id: "belt1",
  stations: [
    { id: "station1", position: 0, x: 100, y: 20, modifier: "Fire", processingTime: 5000 },
    { id: "station2", position: 1, x: 200, y: 20, modifier: "Water", processingTime: 5000 },
    { id: "station3", position: 2, x: 200, y: 20, modifier: "Water", processingTime: 5000 },
    { id: "station4", position: 3, x: 200, y: 20, modifier: "Water", processingTime: 5000 },
    { id: "station5", position: 4, x: 200, y: 20, modifier: "Water", processingTime: 5000 },
    { id: "station6", position: 5, x: 200, y: 20, modifier: "Water", processingTime: 5000 },
    { id: "station7", position: 6, x: 200, y: 20, modifier: "Water", processingTime: 5000 },
    { id: "station8", position: 7, x: 200, y: 20, modifier: "Water", processingTime: 5000 },

  ],
  // isMoving: false,
  segments: [400, 400, 300, 325, 225, 250, 150, 175, 75],
  // segments: [75, 175, 150, 250, 225, 325, 300, 400, 400],

};


const belt_duration = 5;

const GameBoardTwo: React.FC = () => {

  // const [items, setItems] = useState<Item[]>([]);


  const calculateTotalLength = (belt: Belt) => {
    return belt.segments.reduce((total, length) => total + length, 0);
  };

  const handleAddItem = (itemType: string) => {
    setGameState((prev) => ({
      ...prev,
      items: [...prev.items, {
        id: `item${prev.items.length + 1}`,
        type: itemType,
        timestamp: Date.now(),
        value: 10
      }]
    }));
    
  }

  const calculatePosition = (item: Item, belt: Belt) => {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - item.timestamp) / 1000; // Convert to seconds
    const totalLength = calculateTotalLength(belt);
    const speed = totalLength / belt_duration; // Speed in units per second
    const distanceTraveled = elapsedTime * speed;

    let remainingDistance = distanceTraveled;
    let x = 80, y = 50; // Starting coordinates

    for (let i = 0; i < belt.segments.length; i++) {
      const segmentLength = belt.segments[i];
      if (remainingDistance <= segmentLength) {
        if (i % 2 === 0) { // Vertical segment
          y += remainingDistance * (i % 4 === 0 ? 1 : -1);
        } else { // Horizontal segment
          x += remainingDistance * (i % 4 === 1 ? 1 : -1);
        }
        return { x, y };
      }
      if (i % 2 === 0) { // Vertical segment
        y += segmentLength * (i % 4 === 0 ? 1 : -1);
      } else { // Horizontal segment
        x += segmentLength * (i % 4 === 1 ? 1 : -1);
      }
      remainingDistance -= segmentLength;
    }

    // If the item has traveled the entire path, return the end position
    return { x, y, distanceTraveled, totalLength };
  };


  const [svgContent, setSvgContent] = useState<JSX.Element | null>(null);

  const updateGameState = (belt: Belt, gameState: GameState) => {
    const newItems: Item[] = [];
    let pendingGold = gameState.pendingGold;
    console.log("items length: ", gameState.items.length);
    gameState.items.forEach(item => {
      const position = calculatePosition(item, belt);
      if (position.distanceTraveled >= position.totalLength) {
        // Item has reached the end of the conveyor belt
        pendingGold += item.value;
      } else {
        belt.stations.forEach(station => {
          if (Math.abs(position.x - station.x) < 10 && Math.abs(position.y - station.y) < 10) {
            item.value += 10; // Example modifier effect
          }
        });
        newItems.push(item);
      }
    });

    return {
      ...gameState,
      items: newItems,
      pendingGold: pendingGold
    };
  };

  // Function to generate the SVG content
  const generateSvgContent = (belt: Belt, gameState: GameState) => {
    return (
      <section>
        <svg width="512" height="512" style={{ border: "1px solid black" }}>
          <path stroke="blue" strokeWidth="40" d="M 80 50 v 400 h 400 v -300 h -325 v 225 h 250 v -150 h -175 v 75" fill="none" strokeLinecap="round"></path>
          <circle cx="80" cy="50" r="15" fill="black" />
          {/* Render each conveyor belt */}

          <g key={belt.id}>

            {/* Stations on the conveyor belt */}
            {belt.stations.map((station) => (
              <g key={station.id}>
                <circle
                  cx={stationPositions[station.position].x}
                  cy={stationPositions[station.position].y}
                  r={15}
                  fill="red"
                  stroke="black"
                  strokeWidth="2"
                />
                <text
                  x={stationPositions[station.position].x}
                  y={stationPositions[station.position].y}
                  textAnchor="middle"
                  fontSize="10"
                  dy=".3em"
                >
                  {station.modifier}
                </text>
              </g>
            ))}

            {/* Items on the conveyor belt */}
            {gameState.items
              .map((item: Item) => {
                const position = calculatePosition(item, belt);
                return (
                  <circle
                    key={item.id}
                    cx={position.x}
                    cy={position.y}
                    r={10}
                    fill={
                      item.type === "potion"
                        ? "purple"
                        : item.type === "scroll"
                          ? "orange"
                          : "green"
                    }
                    stroke="black"
                    strokeWidth="2"
                  />
                );
              })}

          </g>


        </svg>
        <div>      
          <Button onClick={() => handleAddItem("potion")}>Add Potion</Button>
          <Button onClick={() => handleAddItem("scroll")}>Add Scroll</Button>
          <Button onClick={() => handleAddItem("gem")}>Add Gem</Button>
        </div>

        <div>
          {JSON.stringify(gameState, null, 2)}
        </div>
      </section>
    );
  };

  const [gameState, setGameState] = useState<GameState>({
    gold: 0,
    pendingGold: 0,
    processingItems: [],
    items: []
  });

  const claimPendingGold = () => {
    setGameState((prev) => ({
      ...prev,
      gold: prev.gold + prev.pendingGold,
      pendingGold: 0
    }));
  }

  // Update the SVG content periodically
  useEffect(() => {
    console.log("running effect")
    const interval = setInterval(() => {
      // setGameState(prevState => {
      //   const newState = updateGameState(belt, items, prevState);
      //   setSvgContent(generateSvgContent(belt, newState));
      //   return newState;
      // });



      const newState = updateGameState(belt, gameState);
      setSvgContent(generateSvgContent(belt, newState));
      setGameState(newState)
    }, 100); // Update every 100 milliseconds

    return () => clearInterval(interval);
  }, [gameState.items]);

  return <div className="mx-auto">{svgContent}</div>;
};


export default GameBoardTwo;
"use client";

import React, { useEffect, useState } from "react";

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


export interface GameBoardProps {
  belt: Belt;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}


const belt_duration = 5;

const GameBoardTwo: React.FC<GameBoardProps> = ({ belt, items, setItems }) => {

  const calculateTotalLength = (belt: Belt) => {
    return belt.segments.reduce((total, length) => total + length, 0);
  };

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

  const updateGameState = (belt: Belt, items: Item[], gameState: GameState) => {
    const newItems = items.map(item => {
      const position = calculatePosition(item, belt);

      belt.stations.forEach(station => {
        if (Math.abs(position.x - station.x) < 10 && Math.abs(position.y - station.y) < 10) {
          // item.value += 10; // Example modifier effect
        }
      });
      return item;
    });

    return {
      ...gameState,
      items: newItems,
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

        {JSON.stringify(gameState, null, 2)}
      </div>
      </section>
    );
  };

  const [gameState, setGameState] = useState<GameState>({
    gold: 0,
    pendingGold: 0,
    processingItems: [],
    items: items
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
    
    const interval = setInterval(() => {
      setGameState(prevState => updateGameState(belt, items, prevState));
      setSvgContent(generateSvgContent(belt, gameState));
    }, 10); // Update every 100 milliseconds

    return () => clearInterval(interval);
  
  }, [belt, items]);

  return <div className="mx-auto">{svgContent}</div>;
};


export default GameBoardTwo;
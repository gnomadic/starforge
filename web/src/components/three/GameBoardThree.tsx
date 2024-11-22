"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

// Define types
export interface Station {
  id: string;
  x: number;
  y: number;
  modifier: string;
  processingTime: number;
}

export interface Belt {
  id: string;
  stations: Station[];
  segments: number[];
}

export interface Item {
  id: string;
  type: string;
  timestamp: number; // When the item was added
  value: number;
}

export interface GameState {
  gold: number;
  pendingGold: number;
  items: Item[];
}

// Define belt and station configuration
const belt: Belt = {
  id: "belt1",
  stations: [
    { id: "station1", x: 80, y: 275, modifier: "Fire", processingTime: 5000 },
    { id: "station2", x: 275, y: 450, modifier: "Water", processingTime: 5000 },
    { id: "station3", x: 480, y: 300, modifier: "Earth", processingTime: 5000 },
  ],
  segments: [400, 400, 300],
};

// Total duration for the belt loop
const beltDuration = 10;

const GameBoardRefactored: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    gold: 0,
    pendingGold: 0,
    items: [],
  });

  const calculateTotalLength = (belt: Belt) =>
    belt.segments.reduce((total, length) => total + length, 0);

  const calculatePosition = (item: Item, belt: Belt): { x: number; y: number } => {
    const totalLength = calculateTotalLength(belt);
    const elapsedTime = (Date.now() - item.timestamp) / 1000; // Time in seconds
    const speed = totalLength / beltDuration; // Units per second
    const distanceTraveled = elapsedTime * speed;

    let remainingDistance = distanceTraveled;
    let x = 80, y = 50; // Starting point

    for (let i = 0; i < belt.segments.length; i++) {
      const segmentLength = belt.segments[i];
      if (remainingDistance <= segmentLength) {
        if (i % 2 === 0) {
          y += remainingDistance; // Vertical movement
        } else {
          x += remainingDistance; // Horizontal movement
        }
        break;
      }
      remainingDistance -= segmentLength;
      if (i % 2 === 0) y += segmentLength;
      else x += segmentLength;
    }

    return { x, y };
  };

  const handleAddItem = (type: string) => {
    setGameState((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: `item${Date.now()}`,
          type,
          timestamp: Date.now(),
          value: 10,
        },
      ],
    }));
  };

  const updateGameState = () => {
    const totalLength = calculateTotalLength(belt);
    const now = Date.now();
    const speed = totalLength / beltDuration;

    const newItems: Item[] = [];
    let pendingGold = gameState.pendingGold;

    gameState.items.forEach((item) => {
      const elapsedTime = (now - item.timestamp) / 1000;
      const distanceTraveled = elapsedTime * speed;

      if (distanceTraveled >= totalLength) {
        // Item reached the end of the belt
        pendingGold += item.value;
      } else {
        newItems.push(item);
      }
    });

    setGameState({
      ...gameState,
      items: newItems,
      pendingGold,
    });
  };

  // Generate SVG content based on state
  const renderSvg = () => (
    <svg width="512" height="512" style={{ border: "1px solid black" }}>
      <path
        stroke="lightgray"
        strokeWidth="40"
        d="M 80 50 v 400 h 400"
        fill="none"
        strokeLinecap="round"
      />
      {gameState.items.map((item) => {
        const position = calculatePosition(item, belt);
        return (
          <circle
            key={item.id}
            cx={position.x}
            cy={position.y}
            r={10}
            fill={item.type === "potion" ? "purple" : "orange"}
            stroke="black"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );

  // Update state on interval
  useEffect(() => {
    const interval = setInterval(() => {
      updateGameState();
    }, 100); // Update every second

    return () => clearInterval(interval);
  }, [gameState]);

  return (
    <div>
      <div>{renderSvg()}</div>
      <div>
        <Button onClick={() => handleAddItem("potion")}>Add Potion</Button>
        <Button onClick={() => handleAddItem("scroll")}>Add Scroll</Button>
      </div>
      <div>
        <p>Gold: {gameState.gold}</p>
        <p>Pending Gold: {gameState.pendingGold}</p>
      </div>
    </div>
  );
};

export default GameBoardRefactored;

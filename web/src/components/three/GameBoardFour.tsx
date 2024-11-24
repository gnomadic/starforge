"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { UseData } from "./UseData";
import { Belt, GameState, Item } from "@/domain/types";

const belt: Belt = {
  id: "belt1",
  stations: [
    { id: "station1", x: 80, y: 275, modifier: "Fire", processingTime: 5000 },
    { id: "station2", x: 275, y: 450, modifier: "Water", processingTime: 5000 },
    { id: "station3", x: 480, y: 300, modifier: "Earth", processingTime: 5000 },
  ],
  segments: [400, 400, 300, 325, 225, 250, 150, 175, 75],

};

// Total duration for the belt loop
const beltDuration = 10;


const GameBoardFour: React.FC = () => {

  const [items, setItems] = useState<Item[]>([]);
  const [time, setTime] = useState(Date.now());
  const { state } = UseData(time, belt, items, setItems);


  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval")
      // console.log("new items: " + items.length);
      // console.log("state items: " + state.items.length);
      setTime(Date.now())
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  const handleAddItem = (type: string) => {

    let newItems = items;
    newItems.push({
      id: `item${Date.now()}`,
      type: type,
      timestamp: Date.now(),
      value: 10,
      x: 80,
      y: 50,
      distanceTraveled: 0,

    });
    setItems(newItems);
  };

  const renderSvg = () => (
    <svg width="512" height="512" style={{ border: "1px solid black" }}>
      <path
        stroke="lightgray"
        strokeWidth="40"
        d="M 80 50 v 400 h 400 v -300 h -325 v 225 h 250 v -150 h -175 v 75"
        fill="none"
        strokeLinecap="round"
      />

      {state.items.map((item) => {
        return (
          <circle
            key={item.id}
            cx={item.x}
            cy={item.y}
            r={10}
            fill={item.type === "potion" ? "purple" : "orange"}
            stroke="black"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );


  return (
    <div>
      <div>{renderSvg()}</div>
      <div>
        <Button onClick={() => handleAddItem("potion")}>Add Potion</Button>
        <Button onClick={() => handleAddItem("scroll")}>Add Scroll</Button>
      </div>
      <div>
        <p>Gold: {state.gold}</p>
        <p>Pending Gold: {state.pendingGold}</p>
      </div>
      <div>
        {/* <Button onClick={saveGame}>Save Game</Button> */}
        {/* <Button onClick={loadGame}>Load Game</Button> */}
      </div>
    </div>
  );
};

export default GameBoardFour;

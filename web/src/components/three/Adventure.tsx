"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import  { Belt, Item } from "./GameBoardTwo";


import dynamic from 'next/dynamic'
const GameBoardTwo = dynamic(() => import('./GameBoardTwo'), { ssr: false })


const Adventure: React.FC = () => {

  const oneItem : Item[] = [
    { id: "item1", type: "potion", beltId: "belt1", position: 0, timestamp: Date.now(), processing: false, value: 10 },
    // { id: "item2", type: "scroll", beltId: "belt1", position: 0.2 },
  ];


  const [gold, setGold] = useState(0);
  const [items, setItems] = useState(oneItem);

  const handleAddItem = (itemType: string) => {
    setItems((prevItems) => [...prevItems, {
      id: `item${prevItems.length + 1}`,
      type: itemType,
      beltId: "belt1",
      position: 0,
      timestamp: Date.now(),
      processing: false,
      value: 10,
    }]);
    
  };

  const handleItemProcessed = (goldEarned: number) => {
    setGold((prevGold) => prevGold + goldEarned);
  };



  const belt : Belt = 
    {
      id: "belt1",
      stations: [
        { id: "station1", position: 1, x: 100, y: 20, modifier: "Fire", processingTime: 5000 },
        { id: "station2", position: 2, x: 200, y: 20, modifier: "Water" , processingTime: 5000 },
      ],
      // isMoving: false,
      segments: [400, 400, 300, 325, 225, 250, 150, 175, 75],
      // segments: [75, 175, 150, 250, 225, 325, 300, 400, 400],

    };

  
  


  return (
    <div>
      <h1>Alchemist&apos;s Armory</h1>
      <p>Gold: {gold}</p>
      <Button onClick={() => handleAddItem("potion")}>Add Potion</Button>
      <Button onClick={() => handleAddItem("scroll")}>Add Scroll</Button>
      <Button onClick={() => handleAddItem("gem")}>Add Gem</Button>

      <div>added {items.length}</div>


      <GameBoardTwo belt={belt} items={items} setItems={setItems} />       

    </div>
  );
};

export default Adventure;
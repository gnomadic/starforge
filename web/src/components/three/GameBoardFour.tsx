"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { UseData } from "./UseData";
import { Belt, Item, ItemType, Station, StationModifier } from "@/domain/types";

const belt: Belt = {
  id: "belt1",
  segments: [400, 400, 300, 325, 225, 250, 150, 175, 75],
  stationSlots: [
    { x: 80, y: 275, distance: 200 },
    { x: 275, y: 450, distance: 600 },
    { x: 480, y: 300, distance: 950 },
    { x: 300, y: 150, distance: 5000 },
    { x: 155, y: 275, distance: 5000 },
    { x: 275, y: 375, distance: 5000 },
    { x: 405, y: 300, distance: 5000 },
    { x: 300, y: 225, distance: 5000 }

  ],
};

const starterPotion: Item = {

  id: `item${Date.now()}`,
  type: ItemType.Potion,
  timestamp: Date.now(),
  value: 10,
  x: 80,
  y: 50,
  distanceTraveled: 0,
  enhancements: [],
  appliedStations: 0,
};

const GameBoardFour: React.FC = () => {

  // const [items, setItems] = useState<Item[]>([]);
  const [stations, setStations] = useState<Station[]>(Array.from({ length: belt.stationSlots.length }));
  const [selectedItem, setSelectedItem] = useState<Item>(starterPotion);

  const [time, setTime] = useState(Date.now());
  const { state } = UseData(time, belt, stations, selectedItem);


  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval")
      // console.log("new items: " + items.length);
      // console.log("state items: " + state.items.length);
      setTime(Date.now())
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);


  // const handleAddItem = (type: ItemType) => {

  //   const newItems = items;
  //   newItems.push({
  //     id: `item${Date.now()}`,
  //     type: type,
  //     timestamp: Date.now(),
  //     value: 10,
  //     x: 80,
  //     y: 50,
  //     distanceTraveled: 0,
  //     enhancements: [],
  //     appliedStations: 0,
  //   });
  //   setItems(newItems);
  // };

  const setStation = (slotIndex: number, modifier: StationModifier) => {
    const newStations = stations;
    newStations[slotIndex] = {
      id: `station${slotIndex}`,
      modifier: modifier,
      valueMultiplier: 1,
      valueAddition: 5,
    };
    setStations(newStations);
  }

  // const setStationModifier = (stationId: string, newModifier: string) => {
  //   const station = state.stations.find((s) => s.id === stationId);
  //   if (station) {
  //     station.modifier = newModifier;
  //     // setBelt({ ...belt }); // Trigger state update
  //   }
  // };

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
            fill={item.type === ItemType.Potion ? "purple" : "orange"}
            stroke="black"
            strokeWidth="2"
          />
        );
      })}

      {belt.stationSlots.map((station, index) => {
        return (
          <g key={index}>
            <rect
              x={station.x - 15}
              y={station.y - 15}
              width={30}
              height={30}
              fill="red"
              opacity={0.1}
            />

            {(state.stations[index] !== undefined) ? (
              <rect
                x={station.x - 15}
                y={station.y - 15}
                width={15}
                height={15}
                fill="blue"
              />


            ) : (<></>)}
          </g>

        );

      })};
    </svg>
  );


  return (
    <div>
      <div>{renderSvg()}</div>
      <div>
        <Button onClick={() => setSelectedItem({

          id: `item${Date.now()}`,
          type: ItemType.Potion,
          timestamp: Date.now(),
          value: 10,
          x: 80,
          y: 50,
          distanceTraveled: 0,
          enhancements: [],
          appliedStations: 0,
        })}>Add Potion</Button>
        <Button onClick={() => setSelectedItem({

          id: `item${Date.now()}`,
          type: ItemType.Scroll,
          timestamp: Date.now(),
          value: 10,
          x: 80,
          y: 50,
          distanceTraveled: 0,
          enhancements: [],
          appliedStations: 0,
        })}>Add Scroll</Button>
      </div>
      <div>
        <p>Gold: {state.gold}</p>
        <p>Pending Gold: {state.pendingGold}</p>
      </div>
      <div>
        <Button onClick={() => setStation(0, StationModifier.Fire)}>Station One</Button>

        {/* <Button onClick={saveGame}>Save Game</Button> */}
        {/* <Button onClick={loadGame}>Load Game</Button> */}
      </div>
      <div>{JSON.stringify(stations)}</div>
      <div>{JSON.stringify(state.stations)}</div>

    </div>
  );
};

export default GameBoardFour;

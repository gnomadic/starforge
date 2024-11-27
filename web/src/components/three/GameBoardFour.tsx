"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { UseData } from "./UseData";
import { Belt, Item, ItemType, Station, StationModifier } from "@/domain/types";
import { StationCard } from "../StationCard";
import { ItemCard } from "../ItemCard";
import { ControlTabs } from "../ControlTabs";

const belt: Belt = {
  segments: [400, 400, 300, 325, 225, 250, 150, 175, 75],
  stationSlots: [
    { x: 80, y: 275, distance: 200 },
    // { x: 275, y: 450, distance: 600 },
    { x: 480, y: 300, distance: 950 },
    // { x: 300, y: 150, distance: 5000 },
    { x: 155, y: 275, distance: 5000 },
    // { x: 275, y: 375, distance: 5000 },
    { x: 405, y: 300, distance: 5000 },
    // { x: 300, y: 225, distance: 5000 }

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

  const [stations, setStations] = useState<Station[]>(Array.from({ length: belt.stationSlots.length }));
  const [selectedItem, setSelectedItem] = useState<Item>(starterPotion);

  const [time, setTime] = useState(Date.now());
  const { state } = UseData(time, belt, stations, selectedItem);


  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("interval")
      setTime(Date.now())
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const setStation = (slotIndex: number, modifier: StationModifier) => {
    const newStations = stations;
    newStations[slotIndex] = {
      id: slotIndex,
      modifier: modifier,
      valueMultiplier: 1,
      valueAddition: 5,
    };
    setStations(newStations);
  }

  const renderSvg = () => (
    <svg width="512" height="512" style={{ border: "1px solid black" }}>
      <defs>
        <marker id="arrow" viewBox="0 0 60 50" refX="20" refY="10" markerUnits="userSpaceOnUse" markerWidth="40"
          markerHeight="40" orient="auto" fill="#32a93e">
          <path d="M0 0 10 0 20 10 10 20 0 20 10 10 0 0M16 0 26 10 16 20H26L36 10 26 0H16M32 0 42 10 32 20H42L52 10 42 0H32"></path>
        </marker>
        <pattern id="evenrow" x="0" y="0" width=".098" height=".078">
            <rect x="0" y="0" width="50" height="20" fill="#d39716" stroke="black" />
            <rect x="-25" y="20" width="50" height="20" fill="#d39716" stroke="black" />
            <rect x="25" y="20" width="50" height="20" fill="#d39716" stroke="black" />
        </pattern>
      </defs>
      <rect fill="url(#evenrow)" width="512" height="512" />

      <path
        strokeWidth="40"
        d="M 80 50 v 400 h 400 v -300 h -325 v 225 h 250 v -150 h -175 v 75"
        fill="none"
        strokeLinecap="round"
        stroke="#565656"
      />


      {/* <path stroke-width="40"
        d="M80 50q0 50 0 100 16 50 0 100-18 51 0 100v100h100 100 100 100v-100-100-100h-115-105-105v112 113h125 125v-75-75h-87-88v75"
        fill="none" stroke-linecap="round" marker-start="url(#arrow)" marker-end="url(#arrow)" marker-mid="url(#arrow)"
        stroke="#eee" /> */}

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
    <section className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>{renderSvg()}</div>
        <ControlTabs state={state} setStation={setStation} />

      </div>
      {/* <div className="grid grid-cols-3">
        {state.stations?.map((station, index) => {
          return <StationCard
            key={index}
            index={index}
            station={station}
            onStationClick={(mod) => { setStation(index, mod) }} />
        })}
      </div> */}
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
        {/* <Button onClick={() => setStation(0, StationModifier.Fire)}>Station One</Button> */}
      </div>



      <div className="grid grid-cols-1">
        {state.items?.map((item, index) => {
          return (
            <ItemCard key={item.id} item={item} onStationClick={() => { }} />
          );
        })}
      </div>
    </section>
  );
};

export default GameBoardFour;

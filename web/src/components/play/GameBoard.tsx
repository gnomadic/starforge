"use client";

import React, { useState, useEffect } from "react";
import { ControlTabs } from "@/components/play/ControlTabs";
import { Belt, Item, ItemType, Station, StationModifier } from "@/domain/types";
import { useData } from "@/hooks/UseData";
import useDeployment from "@/hooks/useDeployment";
import { useReadCraftSystemGameStates, useReadCraftSystemSimulateTick, useReadLabBalanceOf, useReadLabGenerateSvg, useReadLabTokensOfOwner } from "@/generated";
import PlayPreview from "./PlayPreview";
import { svg } from "@/domain/TestingData";


const belt: Belt = {
  segments: [400, 400, 300, 325, 225, 250, 150, 175, 75],
  stationSlots: [
    { x: 80, y: 275, distance: 200 },
    // { x: 275, y: 450, distance: 600 },
    // { x: 480, y: 300, distance: 950 },
    // { x: 300, y: 150, distance: 5000 },
    // { x: 155, y: 275, distance: 5000 },
    // { x: 275, y: 375, distance: 5000 },
    // { x: 405, y: 300, distance: 5000 },
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
}

interface GameBoardProps {
  tokenId: bigint;
}

const GameBoard = (props: GameBoardProps) => {

  const [stations, setStations] = useState<Station[]>(Array.from({ length: belt.stationSlots.length }));
  const [selectedItem, setSelectedItem] = useState<Item>(starterPotion);

  const [time, setTime] = useState(Date.now());
  const { state: simulatedState } = useData(time, belt, stations, selectedItem);


  const { deploy } = useDeployment();
  const { data: image, isLoading: loadingImage } = useReadLabGenerateSvg({ address: deploy.lab, args: [props.tokenId] });
  const { data: gameState, status, error } = useReadCraftSystemGameStates({ address: deploy.craftSystem, args: [props.tokenId] })


  // const image = svg;

  const planetName = "DG-429";


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

  const [preview, setPreview] = useState<string>("");


  useEffect(() => {
    if (image == undefined) {
      return;
    }

    setPreview(window.btoa(String(image)));

  }, [image]);


  return (
    <section className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className='mx-auto'>
          <PlayPreview preview={preview} />
        </div>
        <div className='max-w-lg min-w-lg'>
          {/* <div> information is simulated, sync to apply  </div> */}
          <ControlTabs state={gameState}
            setStation={setStation}
            simulatedState={simulatedState}
            planetName={planetName} />
        </div>

      </div>

    </section>
  );
};

export default GameBoard;

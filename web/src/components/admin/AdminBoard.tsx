"use client";

import React, { useState, useEffect } from "react";
import { ControlTabs } from "@/components/play/ControlTabs";
import { Belt, Item, ItemType, Station, StationModifier } from "@/domain/types";
import { useData } from "@/hooks/UseData";
import useDeployment from "@/hooks/useDeployment";
import { useReadPlanetGenerateSvg } from "@/generated";
import { AdminTabs } from "./AdminTabs";
import PlayPreview from "../play/PlayPreview";




interface AdminBoardProps {
  tokenId: bigint;
}

const AdminBoard = (props: AdminBoardProps) => {


  const [time, setTime] = useState(Date.now());


  const { deploy } = useDeployment();
  const { data: image, isLoading: loadingImage } = useReadPlanetGenerateSvg({ address: deploy.Planet, args: [props.tokenId] });
  // const { data: gameState, status, error } = useReadCraftSystemGameStates({ address: deploy.craftSystem, args: [props.tokenId] })


  // const image = svg;

  const planetName = "KEZ-1280";


  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("interval")
      setTime(Date.now())
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);


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
          {/* <ControlTabs state={gameState}
            setStation={setStation}
            simulatedState={simulatedState}
            planetName={planetName} /> */}
            <AdminTabs />
        </div>

      </div>

    </section>
  );
};

export default AdminBoard;

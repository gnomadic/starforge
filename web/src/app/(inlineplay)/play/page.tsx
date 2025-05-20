"use client";
import PlayActionSet from "@/components/play/PlayActionSet";
import PlayMenu from "@/components/play/PlayMenu";
import React, { useEffect, useRef } from "react";

const Play: React.FC = () => {


  return (
    <section className="md:pt-48 pt-36">
      <div>
        <div className="min-w-screen min-h-screen md:min-w-96 md:min-h-32  bg-black max-w-96 mx-auto ">

          <PlayActionSet />
          <PlayMenu />
        </div>
      </div>
    </section>
  );
};

export default Play;
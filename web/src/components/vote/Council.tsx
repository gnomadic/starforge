"use client";

import React from "react";
import { useReadPlanetBalanceOf, useReadPlanetTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import useDeployment from "@/hooks/useDeployment";
import { zeroAddress } from "viem";
import CouncilBoard from "./CouncilBoard";


const Council: React.FC = () => {

  const { address } = useAccount()
  const { deploy } = useDeployment()

  const { data: balance } = useReadPlanetBalanceOf({ args: [address ? address : zeroAddress], address: deploy.Planet })
  const { data: held } = useReadPlanetTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.Planet })

  return (
    <div>

      <div>balance: {balance?.toString()}</div>
      <div>holding: {held?.toString()}</div>

      <CouncilBoard tokenId={held && held.length > 0 ? held[0] : BigInt(0)} />
    </div>
  );
};

export default Council;
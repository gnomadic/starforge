"use client";

import React from "react";
import { useReadLabBalanceOf, useReadLabTokensOfOwner } from "@/generated";
import { useAccount } from "wagmi";
import useDeployment from "@/hooks/useDeployment";
import { zeroAddress } from "viem";
import GameBoard from "./GameBoard";


const Adventure: React.FC = () => {

  const { address } = useAccount()
  const { deploy } = useDeployment()

  const { data: balance } = useReadLabBalanceOf({ args: [address ? address : zeroAddress], address: deploy.lab })
  const { data: held } = useReadLabTokensOfOwner({ args: [address ? address : zeroAddress], address: deploy.lab })

  return (
    <div>

      <div>balance: {balance?.toString()}</div>
      <div>holding: {held?.toString()}</div>

      <GameBoard tokenId={held && held.length > 0 ? held[0] : BigInt(0)} />
    </div>
  );
};

export default Adventure;
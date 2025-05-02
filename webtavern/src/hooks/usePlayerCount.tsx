import { useEffect, useState } from "react";
import { useContractRead, useReadContract } from "wagmi";
import { Address, ReadContractErrorType } from "viem";
import { Deployment } from "@/domain/Domain";
import { QueryObserverResult } from "@tanstack/react-query";
import { type UseReadContractParameters } from 'wagmi'

const abi = [
  {
    "type": "function",
    "name": "getPlayerCount",
    "inputs": [
        {
            "name": "game",
            "type": "address",
            "internalType": "contract IGame"
        }
    ],
    "outputs": [
        {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
        }
    ],
    "stateMutability": "view"
},
];

const usePlayerCount = ({
  moduleAddress,
  gameAddress
  
  // enabled,
}: {
  moduleAddress: Address;
  gameAddress: Address;
  
  // enabled?: boolean | undefined;
}) => {
  // const {
  //   data: playerCount,
  //   isError: playerCountError,
  //   isLoading: isPlayerCountLoading,
  // } = useContractRead({
  //   address: moduleAddress,
  //   abi: abi,
  //   functionName: "getPlayerCount",
  //   args: [gameAddress],
  //   // enabled: enabled != undefined ? enabled : true,
  // });

  
  const res = useReadContract({
    address: moduleAddress,
    abi: abi,
    functionName: "getPlayerCount",
    args: [gameAddress],
  });

  

  const [result, setResult] = useState<string>("0");
  const [error, setError] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   console.log("PC request to: ", moduleAddress, gameAddress)
  //   // console.log("playerCount", playerCount, playerCountError, isPlayerCountLoading)

  //   if (res.error){
  //     setError(res.error.message);
    
  //   }
  //   if (res.data) {
  //     setResult(BigInt(res.data as string).toString());
  //   }

  // }, [res]);

  return { result: BigInt(res?.data as string ?? "0").toString(), error: res.error, refetch: () => {res.refetch()}};
};

export default usePlayerCount;

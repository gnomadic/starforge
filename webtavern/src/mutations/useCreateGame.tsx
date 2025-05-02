// {
//     "type": "function",
//     "name": "createGame",
//     "inputs": [],
//     "outputs": [],
//     "stateMutability": "nonpayable"
// },

import { useEffect, useState } from "react";
import { Address, WriteContractErrorType } from "viem";
import { BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { GameFactoryABI } from "@/domain/abi/GameABI";

const useCreateGame = ({
  contractAddress,

  // enabled,
}: {
  contractAddress: Address;

  // enabled?: boolean | undefined;
}) => {
  const [createGameHash, setCreateGameHash] = useState<`0x${string}` | undefined>();
  const [createGameError, setCreateGameError] = useState<Error>();
  const [createGameisPending, setCreateGameisPending] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()


  useEffect(() => {
    if (data) {
      setCreateGameHash(data);
    }
    if (err) {
      console.log(err)
      setCreateGameError(err);
    }
    if (pending) {
      setCreateGameisPending(pending);
    }
  }, [data, err, pending]);

  // const { writeContract } = useWriteContract()

  const writeCreateGameToChain = async (gm: Address, displayName: string) => {

    writeContract({
      abi: GameFactoryABI,
      address: contractAddress,
      functionName: 'createGame',
      args: [
        gm,
        displayName,
      ],
    })
  };

  return { createGameHash, createGameError, createGameisPending, writeCreateGameToChain };



  // const result = useReadContract({
  //     abi,
  //     address: contractAddress,
  //     functionName: 'createGame',
  //   }) 
  // const {
  //   data: supply,
  //   isError: isCurSupplyError,
  //   isLoading: isCurSupplyLoading,
  // } = useContractRead({
  //   address: contractAddress,
  //   abi: abi,
  //   functionName: "currentSupply",
  //   // enabled: enabled != undefined ? enabled : true,
  // });

  // const [curSupply, setCurSupply] = useState(BigInt(0));

  // useEffect(() => {
  //   if (supply) {
  //     setCurSupply(BigInt(supply as number));
  //   }
  // }, [supply]);

  // return { curSupply, isCurSupplyError };
};

export default useCreateGame;
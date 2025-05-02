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
import { GameABI } from "@/domain/abi/GameABI";


const useRegisterEntity = ({
  contractAddress,

  // enabled,
}: {
  contractAddress: Address;

  // enabled?: boolean | undefined;
}) => {

  const [registerEntityHash, setRegisterEntityHash] = useState<`0x${string}` | undefined>();
  const [registerEntityGameError, setRegisterEntityGameError] = useState<Error>();
  const [registerEntityisPending, setregisterEntityisPending] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()


  useEffect(() => {
    if (data) {
      setRegisterEntityHash(data);
    }
    if (err) {
      setRegisterEntityGameError(err);
    }
    if (pending) {
      setregisterEntityisPending(pending);
    }
  }, [data, err, pending]);

  // const { writeContract } = useWriteContract()

  const writeRegisterEntity = async (entityAddress: Address) => {

    writeContract({
      abi: GameABI,
      address: contractAddress,
      functionName: 'addEntity',
      args: [
        entityAddress
      ],
    })
  };

  return { registerEntityHash, registerEntityGameError, registerEntityisPending, writeRegisterEntity };



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

export default useRegisterEntity;
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
// import { GameFactoryABI } from "@/domain/abi/GameFactory";
import { GameABI } from "@/domain/abi/GameABI";


const useRegisterModule = ({
  contractAddress,

  // enabled,
}: {
  contractAddress: Address;

  // enabled?: boolean | undefined;
}) => {

  const [registerModuleHash, setRegisterModuleHash] = useState<`0x${string}` | undefined>();
  const [registerModuleGameError, setRegisterModuleGameError] = useState<Error>();
  const [registerModuleisPending, setregisterModuleisPending] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()


  useEffect(() => {
    if (data) {
      setRegisterModuleHash(data);
    }
    if (err) {
      setRegisterModuleGameError(err);
    }
    if (pending) {
      setregisterModuleisPending(pending);
    }
  }, [data, err, pending]);

  // const { writeContract } = useWriteContract()

  const writeRegisterModule = async (moduleAddress: Address) => {

    writeContract({
      abi: GameABI,
      address: contractAddress,
      functionName: 'addModule',
      args: [
        moduleAddress
      ],
    })
  };

  return { registerModuleHash, registerModuleGameError, registerModuleisPending, writeRegisterModule };



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

export default useRegisterModule;
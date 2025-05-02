

import { useEffect, useState } from "react";
import { Address, WriteContractErrorType } from "viem";
import { BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

import type { Abi } from 'viem'



const useArbitraryFunction = ({
  contractAddress,
  abi,
  functionName,
  args,
}: {
  contractAddress: Address;
  abi: Abi;
  functionName: string;
  args: any[];
}) => {

  const [arbitraryHash, setArbitraryHash] = useState<`0x${string}` | undefined>();
  const [arbitraryHashError, setArbitraryHashError] = useState<Error>();
  const [arbitraryHashPending, setArbitraryHashPending] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()


  useEffect(() => {
    if (data) {
      setArbitraryHash(data);
    }
    if (err) {
      setArbitraryHashError(err);
    }
    if (pending) {
      setArbitraryHashPending(pending);
    }
  }, [data, err, pending]);


  const writeArbitraryFunction = async () => {

    writeContract({
      abi: abi,
      address: contractAddress,
      functionName: functionName,
      args: args,
    })
  };

  return { arbitraryHash, arbitraryHashError, arbitraryHashPending, writeArbitraryFunction };

};

export default useArbitraryFunction;
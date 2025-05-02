

import { useEffect, useState } from "react";
import { Address, WriteContractErrorType } from "viem";
import { BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

// import type { Abi } from 'viem'

const abi = [
  {
    "type": "function",
    "name": "throwBall",
    "inputs": [
        {
            "name": "game",
            "type": "address",
            "internalType": "contract IGame"
        },
        {
            "name": "giver",
            "type": "address",
            "internalType": "address"
        },
        {
            "name": "distance",
            "type": "uint256",
            "internalType": "uint256"
        }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
},
]



const useThrowBall = ({
  moduleAddress,
  game,
  player,
}: {
  moduleAddress: Address;
  game: Address;
  player: Address;
}) => {

  const [throwHash, setThrowHash] = useState<`0x${string}` | undefined>();
  const [throwError, setThrowError] = useState<Error>();
  const [throwPending, setThrowPending] = useState<boolean>();
  const [throwSuccess, setThrowSuccess] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash: data });


  useEffect(() => {
    // console.log("is success: ", isSuccess);
    // console.log("is loading: ", isLoading);
    if (data) {
      setThrowHash(data);
    }
    if (err) {
      setThrowError(err);
    }
    if (pending) {
      setThrowPending(pending);
    }
    if (isSuccess) {
      setThrowSuccess(isSuccess)
    }
  }, [data, err, pending, isSuccess]);


  const writeThrow = async () => {

    writeContract({
      abi: abi,
      address: moduleAddress,
      functionName: "throwBall",
      args: [game, player, 4],
    })
  };

  return { throwHash, throwError, throwPending, throwSuccess,  writeThrow };

};

export default useThrowBall;
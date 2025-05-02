

import { useEffect, useState } from "react";
import { Address, WriteContractErrorType } from "viem";
import { BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

const abi = [
  {
    "type": "function",
    "name": "joinSession",
    "inputs": [
        {
            "name": "game",
            "type": "address",
            "internalType": "contract IGame"
        },
        {
            "name": "player",
            "type": "address",
            "internalType": "address"
        }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
},

]



const useJoinGame = ({
  moduleAddress,
  game,
  player,
}: {
  moduleAddress: Address;
  game: Address;
  player: Address;
}) => {

  const [joinHash, setJoinHash] = useState<`0x${string}` | undefined>();
  const [joinError, setJoinError] = useState<Error>();
  const [joinPending, setJoinPending] = useState<boolean>();
  const [joinSuccess, setJoinSuccess] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash: data });



  useEffect(() => {
    if (data) {
      setJoinHash(data);
    }
    if (err) {
      setJoinError(err);
    }
    if (pending) {
      setJoinPending(pending);
    }
    if (isSuccess) {
      setJoinSuccess(isSuccess);
    }
  }, [data, err, pending, isSuccess]);


  const writeJoin = async () => {

    writeContract({
      abi: abi,
      address: moduleAddress,
      functionName: "joinSession",
      args: [game, player],
    })
  };

  return { joinHash, joinError, joinPending, joinSuccess, writeJoin };

};

export default useJoinGame;
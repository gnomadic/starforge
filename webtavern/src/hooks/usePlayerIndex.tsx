import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { Address } from "viem";
import { Deployment } from "@/domain/Domain";

const abi = [
  {
    "type": "function",
    "name": "getPlayerIndex",
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

const usePlayerIndex = ({
  moduleAddress,
  gameAddress,
  playerAddress
  
  // enabled,
}: {
  moduleAddress: Address;
  gameAddress: Address;
  playerAddress: Address;
  
  // enabled?: boolean | undefined;
}) => {
  const {
    data: playerIndex,
    isError: playerIndexError,
    isLoading: isPlayerIndexLoading,
  } = useContractRead({
    address: moduleAddress,
    abi: abi,
    functionName: "getPlayerIndex",
    args: [gameAddress, playerAddress],
    // enabled: enabled != undefined ? enabled : true,
  });

  const [player, setPlayer] = useState<string>("0");

  useEffect(() => {
    console.log("PI request to: ", moduleAddress, gameAddress)
    console.log("playerIndex", playerIndex, playerIndexError, isPlayerIndexLoading)
    if (playerIndex) {
      setPlayer(BigInt(playerIndex as string).toString());
    }
  }, [playerIndex, playerIndexError, isPlayerIndexLoading, gameAddress, moduleAddress]);

  return { player, playerIndexError };
};

export default usePlayerIndex;

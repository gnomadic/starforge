import { useEffect, useState } from "react";
import { Address } from "viem";
import { useWriteContract } from 'wagmi'
import { EntityFactoryABI } from "@/domain/abi/GameABI";

const useCreateEntity = ({
  contractAddress,
}: {
  contractAddress: Address;
}) => {

  const [createEntityHash, setCreateEntityHash] = useState<`0x${string}` | undefined>();
  const [createEntityError, setCreateEntityError] = useState<Error>();
  const [createEntityisPending, setCreateEntityisPending] = useState<boolean>();

  const { data, error: err, isPending: pending, writeContract } = useWriteContract()


  useEffect(() => {
    if (data) {
      setCreateEntityHash(data);
    }
    if (err) {
      setCreateEntityError(err);
    }
    if (pending) {
      setCreateEntityisPending(pending);
    }
  }, [data, err, pending]);



  const writeCreateEntityToChain = async (game: Address, displayName: string, nft: Address) => {
    writeContract({
      abi: EntityFactoryABI,
      address: contractAddress,
      functionName: 'createEntity',
      args: [
        game,
        displayName,
        nft,
        ["dailyActions", "lastActionAt"]
      ],
    })
  };

  return { createEntityHash, createEntityError, createEntityisPending, writeCreateEntityToChain };
};

export default useCreateEntity;
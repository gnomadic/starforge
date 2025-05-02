import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { Address } from "viem";
import { INumberEntityABI } from "@/domain/abi/GameABI";



const useArbitraryData = ({
  contractAddress,
  tokenid,
  key
}: {
  contractAddress: Address;
  tokenid: number;
  key: string;
}) => {
  const {
    data: supply,
    isError: isDataError,
    isLoading: isCurSupplyLoading,
  } = useContractRead({
    address: contractAddress,
    abi: INumberEntityABI,
    functionName: "getNumber",
    args:[
      tokenid, key
    ]
    // enabled: enabled != undefined ? enabled : true,
  });

  const [data, setData] = useState(BigInt(0));

  useEffect(() => {
    if (supply) {
      setData(BigInt(supply as number));
    }
  }, [supply]);

  return { data, isDataError };
};

export default useArbitraryData;

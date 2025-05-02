import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { Address } from "viem";
import { INumberEntityABI } from "@/domain/abi/GameABI";

const useReadConfig = ({

    contractAddress,
    tokenid,
    key,
    active

}: {
    contractAddress: Address;
    tokenid: number;
    key: string;
    active: boolean;

}) => {
    const {
        data: supply,
        isError: isDataError,
        isLoading: isCurSupplyLoading,
    } = useContractRead({
        address: contractAddress,
        abi: INumberEntityABI,
        functionName: "getNumber",
        args: [
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

export default useReadConfig;

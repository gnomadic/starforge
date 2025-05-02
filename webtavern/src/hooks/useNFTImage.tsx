import { useEffect, useState } from "react";
import { Address } from "viem";
import { useContractRead } from "wagmi";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const useNFTImage = ({
  contractAddress,
  tokenId,
}: {
  contractAddress: Address;
  tokenId: number;
}) => {
  const {
    data: meta,
    isError: isMetaError,
    isLoading: isMetaLoading,
  } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: "tokenURI",
    // enabled: contractAddress !== "0x0" && tokenId != undefined,
    args: [tokenId],
    // onError: (error: any) => {
    //   console.log("error getting metadata: " + error);
    // },
  });

  const [svg, setSVG] = useState("");
  const [imageURl, setImageURL] = useState("");
  const [imageError, setImageError] = useState();

  useEffect(() => {
    if (meta) {
      console.log("metadata: ", meta);
      fetch(meta as string)
      .then(response => response.json())
      .then(json => setImageURL(json.image))
      .catch(error => setImageError(error));
      // setSVG(
      //   JSON.parse(
      //     window.atob(String(meta).replace("data:application/json;base64,", ""))
      //   ).image
      // );
    }
  }, [meta]);

  return { imageURl, isMetaError };
};

export default useNFTImage;

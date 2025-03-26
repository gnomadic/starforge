"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import useDeployment from '@/hooks/useDeployment';
import { useReadPlanetGenerateSvg } from '@/generated';
import { useEffect, useState } from 'react';


type MintPreviewProps = {
    preview: string | undefined;
    size: number;
    tokenId: bigint;
}

export default function MintPreview({ preview, size, tokenId }: MintPreviewProps) {

    const [rendered, setRendered] = useState<string>("");
    const { deploy } = useDeployment();
    const { data: image, isLoading: loadingImage } = useReadPlanetGenerateSvg({ address: deploy.Planet, args: [tokenId] });

    useEffect(() => {
        if (preview != undefined && preview != "") {
            setRendered(preview);
            return;
        }
        if (image == undefined || image == "") {
            return;
        }
        console.log("image: " + image);
        setRendered(window.btoa(String(image)))
    }, [image]);

    return (

        <Image
            alt="minting"
            src={
                rendered == undefined || rendered == ""
                    ? placeholder
                    : "data:image/svg+xml;base64," + rendered!
            }
            className="mx-auto rounded-lg shadow-2xl"
            width={size}
            height={size}
        />

    );
}

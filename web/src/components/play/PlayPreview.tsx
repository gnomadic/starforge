"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";

type MintPreviewProps = {
    preview: string | undefined;
}

export default function PlayPreview({ preview }: MintPreviewProps) {



    return (

        <Image
            alt="minting"
            src={
                preview == undefined || preview == ""
                    ? placeholder
                    : "data:image/svg+xml;base64," + preview!
            }
            className="mx-auto rounded-lg shadow-2xl"
            width={512}
            height={512}
        />

    );
}

"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import { useReadLabGenerateSvg, useWriteLabMint } from '@/generated';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useDeployment from '@/hooks/useDeployment';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type MintPreviewProps = {
    preview: string;
}

export default function MintPreview({ preview }: MintPreviewProps) {



    return (

        <Image
            alt="minting"
            src={
                preview == ""
                    ? placeholder
                    : "data:image/svg+xml;base64," + preview!
            }
            className="mx-auto rounded-lg shadow-2xl"
            width={512}
            height={512}
        />

    );
}

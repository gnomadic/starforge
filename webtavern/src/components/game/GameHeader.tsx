"use client"

import { censor, pretty } from "@/domain/utils";
import { Address } from "viem";
import useDeployment from '@/hooks/useDeployment';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { useReadGameGetSummary } from "@/generated";
import { useMetadata } from "@/hooks/useMetadata";
import { GameMetadata } from "@/domain/Domain";
import { toast } from 'react-toastify';
import { useEffect } from "react";
import ChainTitle from "../base/ChainTitle";

type HeaderProps = {
  gameAddress: Address
}

export default function GameHeader(props: HeaderProps) {

  const { deploy } = useDeployment();

  // const { gameSummary, gameSummaryError } = useGameSummary({ address: props.gameAddress });
  const { data: summary, error: summaryError } = useReadGameGetSummary({ address: props.gameAddress });
  const { data, error: metaError } = useMetadata<GameMetadata>(summary?.metadata);


  useEffect(() => {
    if (summaryError) {
      toast.error(summaryError.message);
    }
    if (metaError) {
      toast.error(metaError.message);
    }
  }
    , [summaryError, metaError]);


  return (
    <section className=''>
      <div>

        <div className='p-4 text-2xl'>
          {data ? censor(data.name) : "loading"}
        </div>
        <div className="px-6 py-2 text-lightgrey">
          {data ? data.description : "loading"}
        </div>
      

      </div>


    </section>
  );
}

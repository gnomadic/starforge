"use client"

import { ComponentMetadata, ComponentSummary } from "@/domain/Domain";
import { censor, pretty } from "@/domain/utils";
import useDeployment from "@/hooks/useDeployment";
import { Address } from "viem";
import { useReadIComponentGetSummary } from '@/generated';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { useMetadata } from "@/hooks/useMetadata";

type HeaderProps = {
  moduleAddress: Address
}

export default function ComponentHeader(props: HeaderProps) {

  const { deploy } = useDeployment();
  const { data: summary } = useReadIComponentGetSummary({ address: props.moduleAddress })
  const { data } = useMetadata<ComponentMetadata>(summary?.metadata);

  return (
    <section className=''>
      <div className=''>

        <div className='p-4 text-2xl'>

        <a target="_blank"
                rel="noopener noreferrer"
                href={deploy.scan + props.moduleAddress} >
                {data ? censor(data.name) : "loading"}
                <span>
                  <ArrowUpRightIcon
                    className="w-4 h-4 mb-3"
                    style={{ display: "inline" }} />
                </span>
              </a>

          
        </div>
        <div className="px-6 py-2 text-lightgrey">
          {data ? data.description : "loading"}
        </div>
        {/* {!summary || !data ? "loading" :
          <div>
      
            <div className='text-right pb-2 pl-4 text-xs'>
              <a target="_blank"
                rel="noopener noreferrer"
                href={deploy.scan + props.moduleAddress} >
                {pretty(props.moduleAddress)}
                <span>
                  <ArrowUpRightIcon
                    className="w-4 h-4 mb-1"
                    style={{ display: "inline" }} />
                </span>
              </a>
            </div>

            <div className="text-base pt-6">
              {data.description}
            </div>

          </div>
        } */}
      </div>
    </section>
  );
}

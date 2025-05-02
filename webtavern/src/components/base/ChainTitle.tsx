'use client';

import useDeployment from "@/hooks/useDeployment";
import BigTitle from "./BigTitle";

type TitleProps = {
    title: string;
}

export default function ChainTitle(props: TitleProps) {
    const { deploy } = useDeployment();

    return (
        <>
            <div className="text-xs pl-4">
                {deploy.chain}
            </div>
            <BigTitle title={props.title} />
        </>
    );
}


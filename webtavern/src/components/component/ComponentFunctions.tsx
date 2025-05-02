"use client"

import { ComponentMetadataFunction } from "@/domain/Domain";

type FunctionProps = {
    functions: ComponentMetadataFunction[]
}

export default function ComponentFunctions(props: FunctionProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pt-8">
            {Array.from({ length: props.functions.length as number }).map((object, i) => {
                return (
                    <div key={i} className='justify-center border rounded-md border-lightgrey'>
                        {/* <div className='pt-5 pl-5 text-lg border-b-2 border-white'>
                            {i+1}{'/'}{props.functions[i].name}{' '}
                        </div> */}

                        <div className='p-4 text-2xl'>
                            {props.functions[i].name}
                        </div>
                        <div className='pt-2 px-6 text-sm text-lightgrey'>
                            {props.functions[i].description}
                        </div>

                        <div className="grid md:grid-cols-2 py-8 gap-2">
                            <div className="mx-2">
                                <div className='p-4 text-2xl'>
                                    input
                                </div>

                                {Array.from({ length: props.functions[i].requires.length as number }).map((object, j) => {
                                    return (
                                        <div className="text-lightgrey px-4"
                                        key={j}>
                                        {props.functions[i].requires[j]} {''}
                                    </div>
                                    );
                                })}
                            </div>
                            <div className="mx-2">
                                <div className='p-4 text-2xl'>
                                    output
                                </div>

                                {Array.from({ length: props.functions[i].creates.length as number }).map((object, j) => {
                                    return (
                                        <div className="text-lightgrey px-4"
                                            key={j}>
                                            {props.functions[i].creates[j]} {''}
                                        </div>
                                    );
                                })}
                                {props.functions[i].creates.length === 0 ?  <div className="text-lightgrey px-4">none</div> : <></>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );

}

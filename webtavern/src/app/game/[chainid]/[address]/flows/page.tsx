import CreateFlow from "@/components/create/flows/CreateFlow";
import { Address } from "viem";

  export default function Create({ params }: { params: { address: string, chainid: string } }) {

  return (

    <main className=' font-signika'>
      <CreateFlow
        address={params.address as Address}
        chainid={params.chainid}
        />
    </main>

  );
}

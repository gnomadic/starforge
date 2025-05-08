import { match, P } from "ts-pattern";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "../ui/pagination";
import { cn } from "@/lib/utils";
import MintPreview from "../mint/MintPreview";
import { useEffect } from "react";



interface NFTGridProps {
  selectedTokenId: bigint;
  setSelectedTokenId: (tokenId: bigint) => void;
  heldTokenIds: readonly bigint[] | undefined;
}


export function NFTGrid(props: NFTGridProps) {


  useEffect(() => {
    if (props.heldTokenIds && props.heldTokenIds.length > 0) {
      props.setSelectedTokenId(props.heldTokenIds[0]);
    }
  }
    , [props.heldTokenIds, props.setSelectedTokenId]);

  return match(props.heldTokenIds)
    .with([], () => <EmptyNFTs />)
    .otherwise(() => (
      <ManyNFTs
        selectedTokenId={props.selectedTokenId}
        setSelectedTokenId={props.setSelectedTokenId}
        heldTokenIds={props.heldTokenIds}
      />
    ));
}


export function EmptyNFTs() {
  return (
    <></>
  );
}




export function ManyNFTs({ selectedTokenId, setSelectedTokenId, heldTokenIds }: NFTGridProps) {
  return (
    <div className="backdrop-blur-sm">
      <Card className="bg-black/30 border-white/10">
        <div className="flex justify-between p-6">

          <div className="text-2xl font-semibold leading-none tracking-tight">
            <CardTitle>Your NFTs</CardTitle>
            <CardDescription>Select an NFT to view details</CardDescription>
          </div>
          {/* <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div> */}
        </div>
        <CardContent>
          <div className="grid grid-cols-12 gap-3">
            {heldTokenIds?.map((tokenId) => (
              <div
                key={tokenId}
                onClick={() => setSelectedTokenId(tokenId)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden bg-black/30 border border-white/5 cursor-pointer hover:border-primary/50 transition-all relative flex items-center justify-center",
                  BigInt(selectedTokenId) === tokenId ? "border-primary" : "",
                  "max-w-24"
                )}
              >
                <MintPreview
                  preview={""}
                  size={128}
                  tokenId={tokenId} />
                {BigInt(selectedTokenId) === tokenId && (
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary z-10"></div>
                )}
                <div className="absolute bottom-2 left-2 text-xs font-medium z-10 text-white/80">
                  #{tokenId.toString().padStart(4, '0')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

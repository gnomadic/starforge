import { Item, NFT, Station } from "@/domain/types";
import { match, P } from "ts-pattern";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "../ui/pagination";
import { cn } from "@/lib/utils";
import MintPreview from "../mint/MintPreview";


interface ItemCardProps {
  item: Item | undefined;
  onStationClick: (station: Station) => void;
}

interface NFTGridProps {
  nfts: NFT[]
  selectedNFT: NFT;
  setSelectedNFT: (nft: NFT) => void;
  selectedTokenId: bigint;
  setSelectedTokenId: (tokenId: bigint) => void;
  heldTokenIds: readonly bigint[] | undefined;
}




export function ItemCard(props: ItemCardProps) {
  return match(props)
    .with({ item: P.nullish }, (item) => <EmptyStations></EmptyStations>)
    //   .with({ item: P.nonNullable}, (item) => <PresentItemCard item={item}/>)
    .otherwise(() => <EmptyStations></EmptyStations>);

}


export function EmptyStations() {
  return (
    <Card className="block max-w-sm overflow-hidden">
      <CardHeader>
        <h2 className="text-2xl font-bold">Empty Station</h2>
        <h2 className="mb-2 font-sans text-2xl font-bold">nothing</h2>
      </CardHeader>
      <CardContent className="pt-12">

        <p className="text-grey-400 line-clamp-4 font-sans">really nothing</p>
      </CardContent>
    </Card>
  );
}


export function NFTGrid({ nfts, selectedNFT, setSelectedNFT, selectedTokenId, setSelectedTokenId, heldTokenIds }: NFTGridProps) {

  return (
    <div className="backdrop-blur-sm">
      <Card className="bg-black/30 border-white/10">
        <div className="flex justify-between p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            <CardTitle>Your NFTs</CardTitle>
            <CardDescription>Select an NFT to view details</CardDescription>
          </div>
          <div>
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
          </div>
        </div>
        <CardContent>
          <div className="grid grid-cols-12 gap-3">
            {nfts.map((nft) => (
              <div
                key={nft.id}
                onClick={() => setSelectedNFT(nft)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden bg-black/30 border border-white/5 cursor-pointer hover:border-primary/50 transition-all relative flex items-center justify-center",
                  selectedNFT.id === nft.id ? "border-primary" : "",
                  "max-w-24"
                )}
              >
                <div className={cn("w-3/4 h-3/4 rounded-full animate-pulse-slow absolute", nft.image)}></div>
                <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-transparent animate-float absolute"></div>
                {selectedNFT.id === nft.id && (
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary z-10"></div>
                )}
                <div className="absolute bottom-2 left-2 text-xs font-medium z-10 text-white/80">
                  #{nft.id.toString().padStart(4, '0')}
                </div>
              </div>
            ))}
            {heldTokenIds?.map((tokenId) => (
              <div
                key={tokenId}
                onClick={() => setSelectedTokenId(tokenId)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden bg-black/30 border border-white/5 cursor-pointer hover:border-primary/50 transition-all relative flex items-center justify-center",
                  BigInt(selectedNFT.id) === tokenId ? "border-primary" : "",
                  "max-w-24"
                )}
              >
                <MintPreview
                  preview={""}
                  size={128}
                  tokenId={tokenId} />
                {BigInt(selectedNFT.id) === tokenId && (
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

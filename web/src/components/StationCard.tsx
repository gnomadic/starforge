import { Station } from "@/domain/types";
import { match, P } from "ts-pattern";
import { Card, CardContent, CardHeader } from "./ui/card";


interface StationCardProps {
    station: Station | undefined;
    onStationClick: (station: Station) => void;
}


export function StationCard(props: StationCardProps) {
    return match(props)
      .with({ station: P.nullish}, (station) => <EmptyStations></EmptyStations>)
      .with({ station: P.nonNullable}, (station) => <Station station={station}/>)
      .otherwise(() => <EmptyStations></EmptyStations>);
        
  }


  export function EmptyStations() {
    return (
        <Card className="block max-w-sm overflow-hidden">
            <CardHeader>
                <h2 className="text-2xl font-bold">Empty Station</h2>
                <h2 className="mb-2 font-sans text-2xl font-bold">nothing</h2>
            </CardHeader>
          {/* <div className="relative">
            <BannerImage ipfsCID={data.bannerImg} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <Avatar ipfsCID={data.logoImg} size={60} />
            </div>
          </div> */}
          <CardContent className="pt-12">
            
            <p className="text-grey-400 line-clamp-4 font-sans">really nothing</p>
          </CardContent>
        </Card>
    );
  }


  export function Station({ station }: { station: StationCardProps }) {

    return (
        <Card className="block max-w-sm overflow-hidden">
        <CardHeader>
            <h2 className="text-2xl font-bold">{station.station?.modifier} </h2>
            <h2 className="mb-2 font-sans text-2xl font-bold">nothing</h2>
        </CardHeader>
      {/* <div className="relative">
        <BannerImage ipfsCID={data.bannerImg} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Avatar ipfsCID={data.logoImg} size={60} />
        </div>
      </div> */}
      <CardContent className="pt-12">
        
        <p className="text-grey-400 line-clamp-4 font-sans">really nothing</p>
      </CardContent>
    </Card>
    );
  }

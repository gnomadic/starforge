import { Station, StationModifier } from "@/domain/types";
import { match, P } from "ts-pattern";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";


interface StationCardProps {
  station: Station | undefined;
  index: number;
  onStationClick: (mod: StationModifier) => void;
}


export function StationCard(props: StationCardProps) {
  return match(props)
    .with({ station: P.nullish }, (station) => <EmptyStations props={props} />)
    .with({ station: P.nonNullable }, (station) => <PresentStationCard props={station} />)
    .otherwise(() => <EmptyStations props={props} />);

}


export function EmptyStations({ props }: { props: StationCardProps }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <h2 className="text-xl font-bold">Founding City</h2>
      </CardHeader>
      <ButtonRow props={props} />
    </Card>
  );
}


export function PresentStationCard({ props }: { props: StationCardProps }) {

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <h2 className="text-xl font-bold">{props.station?.modifier}</h2>
      </CardHeader>
      <ButtonRow props={props} />

    </Card>
  );
}

function ButtonRow({props}: {props:StationCardProps}) {
  return (
    <CardContent className="grid grid-cols-4">
      <Button onClick={() => props.onStationClick(StationModifier.Fire)}>housing</Button>
      <Button onClick={() => props.onStationClick(StationModifier.Water)}>greenery</Button>
      <Button onClick={() => props.onStationClick(StationModifier.Earth)}>factories</Button>
      <Button onClick={() => props.onStationClick(StationModifier.Air)}>air</Button>
    </CardContent>
  );
}

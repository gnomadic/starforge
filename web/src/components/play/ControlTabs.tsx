import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GameState, StationModifier } from "@/domain/types"
import { StationCard } from "./StationCard"
import InfoCard from "../InfoCard"
import { bigIntReplacer } from "@/domain/utils"
import StatusTab from "./status/StatusTab"
import InvestmentTab from "@/components/play/investments/InvestmentTab"

interface ControlTabsProps {
  state: readonly [bigint, bigint, bigint, bigint] | undefined;
  setStation: (index: number, modifier: StationModifier) => void;
  simulatedState: GameState;
  planetName: string;
}

export function ControlTabs({ state, setStation, simulatedState, planetName }: ControlTabsProps) {

  return (
    <Tabs defaultValue="Status" className="max-w-lg min-w-lg">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Status">Status</TabsTrigger>
        <TabsTrigger value="Investment">Investments</TabsTrigger>
      </TabsList>
      <TabsContent value="Status">
        <StatusTab state={state} simulatedState={simulatedState} planetName={planetName}/>

      </TabsContent>

      <TabsContent value="Investment">
        {/* <InvestmentTab state={state} setStation={setStation} simulatedState={simulatedState} /> */}
        <InvestmentTab />
 
      </TabsContent>
    </Tabs>
  )
}

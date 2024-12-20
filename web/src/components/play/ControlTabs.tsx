import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GameState, StationModifier } from "@/domain/types"

import StatusTab from "./status/StatusTab"
import InvestmentTab from "@/components/play/investments/InvestmentTab"
import ResourceTab from "./resources/ResourceTab"

interface ControlTabsProps {
  state: readonly [bigint, bigint, bigint, bigint] | undefined;
  setStation: (index: number, modifier: StationModifier) => void;
  simulatedState: GameState;
  planetName: string;
}

export function ControlTabs({ state, setStation, simulatedState, planetName }: ControlTabsProps) {

  return (
    <Tabs defaultValue="status" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="status">Status</TabsTrigger>
        <TabsTrigger value="investment">Investments</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>

      <TabsContent value="status" >
        <StatusTab state={state} simulatedState={simulatedState} planetName={planetName} />
      </TabsContent>

      <TabsContent value="investment">
        <InvestmentTab planetName={planetName} />
      </TabsContent>
      
      <TabsContent value="resources">
        <ResourceTab planetName={planetName} />
      </TabsContent>
      
    </Tabs>
  )
}

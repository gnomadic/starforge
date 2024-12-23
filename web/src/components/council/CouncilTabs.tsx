import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GameState, StationModifier } from "@/domain/types"

import StatusTab from "../play/status/StatusTab"
import InvestmentTab from "@/components/play/investments/InvestmentTab"
import ResourceTab from "../play/resources/ResourceTab"

interface CouncilTabsProps {
  // state: readonly [bigint, bigint, bigint, bigint] | undefined;
  // setStation: (index: number, modifier: StationModifier) => void;
  // simulatedState: GameState;
  // planetName: string;
}

export function CouncilTabs({}: CouncilTabsProps) {

  return (
    <Tabs defaultValue="status" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="status">Status</TabsTrigger>
        <TabsTrigger value="investment">Investments</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>

      <TabsContent value="status" >
        <div> first tab </div>
        {/* <StatusTab state={state} simulatedState={simulatedState} planetName={planetName} /> */}
      </TabsContent>

      <TabsContent value="investment">
        {/* <InvestmentTab planetName={planetName} /> */}
        <div> second tab </div>
      </TabsContent>
      
      <TabsContent value="resources">
      <div> third tab </div>
        {/* <ResourceTab planetName={planetName} /> */}
      </TabsContent>
      
    </Tabs>
  )
}

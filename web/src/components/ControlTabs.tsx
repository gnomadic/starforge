import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GameState, StationModifier } from "@/domain/types"
import { StationCard } from "./StationCard"

export function ControlTabs({ state, setStation }: { state: GameState, setStation: (index: number, modifier: StationModifier) => void }) {
  return (
    <Tabs defaultValue="Inventory" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Creating">Resources</TabsTrigger>
        <TabsTrigger value="Inventory">Inventory</TabsTrigger>
        <TabsTrigger value="Stations">Stations</TabsTrigger>
      </TabsList>
      <TabsContent value="Creating">
        <Card>
          <CardHeader>
            <CardTitle>Creating</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Button>Save changes</Button>

            </div>
            <div className="space-y-1">
              <Button>Reject changes</Button>

            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Inventory">
        <Card>
          <CardHeader>
            <CardTitle>Inventory</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Button>Save changes</Button>

            </div>
            <div className="space-y-1">
              <Button>Reject changes</Button>

            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Stations">
        <Card>
          <CardHeader>
            <CardTitle>Stations</CardTitle>
            <CardDescription>
              Change your Stations here, and remember to seal your decision.  
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-3">
              {state.stations?.map((station, index) => {
                return <StationCard
                  key={index}
                  index={index}
                  station={station}
                  onStationClick={(mod) => { setStation(index, mod) }} />
              })}
            </div>
          </CardContent>
          <CardFooter>
            {/* <Button>Save Stations</Button> */}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

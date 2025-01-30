import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GameState, StationModifier } from "@/domain/types"
import { bigIntReplacer } from "@/domain/utils"
import { useReadInvestmentSystemGetInvestments } from "@/generated"
import useDeployment from "@/hooks/useDeployment"



interface InvestmentTabProps {
  // state: readonly [bigint, bigint, bigint, bigint] | undefined;
  // setStation: (index: number, modifier: StationModifier) => void;
  // simulatedState: GameState;
  // planetName: string;
}

  // const { data: image, isLoading: loadingImage } = useReadPlanetGenerateSvg({ address: deploy.Planet, args: [props.tokenId] });


export function InvestmentTab({}: InvestmentTabProps) {
  const { deploy } = useDeployment()


  const {data : investments, isLoading: loadingInvestments} = useReadInvestmentSystemGetInvestments({address: deploy.InvestmentSystem})

  return (
    <section>

      <ul>
      


      </ul>

      hi

      investemnts: {JSON.stringify(investments, bigIntReplacer)}
    </section>
  )
}

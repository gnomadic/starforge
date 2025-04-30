import { cn } from "@/lib/utils";
import { match } from "ts-pattern";

interface RarityBadgeProps {
    rarity: number | undefined; 
}

export function RarityBadge({ rarity }: RarityBadgeProps) {
    return match(rarity)
        .with(0, (item) => <ActualBadge text="S-Tier" classname="bg-white/20 text-white" />)
        .with(1, (item) => <ActualBadge text="Legendary" classname="bg-orange-500/20 text-orange-400" />)
        .with(2, (item) => <ActualBadge text="Epic" classname="bg-purple-500/20 text-purple-400" />)
        .with(3, (item) => <ActualBadge text="Rare" classname="bg-blue-500/20 text-blue-400" />)
        .with(4, (item) => <ActualBadge text="Uncommon" classname="bg-green-500/20 text-green-400" />)
        .with(5, (item) => <ActualBadge text="Common" classname="bg-gray-500/20 text-gray-400" />)
        .otherwise(() => <ActualBadge text="---" classname="bg-gray-500/20 text-gray-400" />)
}


interface ActualBadgeProps {
    text: string;
    classname: string
}

function ActualBadge({ text, classname }: ActualBadgeProps) {
    return (
        <div className={cn("px-2 py-1 text-xs font-medium rounded-full text-nowrap ",
            classname)}>
            {text}
        </div>
    )
}

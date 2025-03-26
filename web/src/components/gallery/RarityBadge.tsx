

interface RarityBadgeProps {
    rarity: number;

}

export function RarityBadge({ rarity }: RarityBadgeProps) {


    //map rarity number to color and text
    // let rarityColor = "text-primary";
    // let rarityText = "Common";

    return (

        <div className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
            {rarity}
        </div>
    )
}
import { cn } from "@/lib/utils";
import { match, P } from "ts-pattern";
import { Address, formatEther } from "viem";
import { useSupplies } from "./SupplyContext";
import { Circle } from "lucide-react";
import { getTokenDisplayName } from "@/hooks/useDeployment";

interface SupplyBadgeProps {
    address?: Address | undefined;
    emission?: bigint | undefined;
    value?: bigint | undefined;
}

export function SupplyBadge({ address, emission, value }: SupplyBadgeProps) {
    return match({ emission, value })
        .with({ emission: P.bigint, value: P.bigint }, () => (
            <FullSupplyBadge address={address!} emission={emission!} value={value!} />
        ))
        .with({ emission: P.bigint }, () => (
            <EmissionSupplyBadge address={address!} emission={emission!} />
        ))
        .with({ value: P.bigint }, () => (
            <ValueSupplyBadge address={address!} value={value!} />
        ))
        .otherwise(() => <EmptySupplyBadge />);
}

const EmptySupplyBadge = ({ showEmissionRate = false }) => (
    <div className="flex items-center gap-1.5">
        <div className="p-1.5 rounded-full bg-gray-500">
            <Circle size={16} color="white" />
        </div>
        <div className="flex flex-col font-mono text-xs font-medium text-white/90 ">
            {/* <span className="font-mono text-xs font-medium text-white/90 justify-end"> */}
            ---
            {/* </span> */}

        </div>
    </div>
);


interface FullSupplyBadgeProps {
    address: Address;
    emission: bigint;
    value: bigint;
}

const FullSupplyBadge = ({ address, emission, value }: FullSupplyBadgeProps) => {
    const supplyContext = useSupplies();
    if (!supplyContext) {
        throw new Error('useResources must be used within a ResourcesProvider');
    }
    const { supplies } = supplyContext;
    const supplyName = getTokenDisplayName(address);
    const supply = supplies.find((supply) => supply.type === supplyName);

    return (
        <div className="flex items-center gap-1.5">
            <div className={cn('p-1.5 rounded-full', supply?.color)}>
                {supply?.icon}
            </div>
            <div className="flex flex-col">
                <span className="font-mono text-xs font-medium text-white/90">
                    {formatEther(value)}
                </span>
                <span className="font-mono text-xs text-white/70">
                    +{formatEther(emission)}/s
                </span>
            </div>
        </div>

    )
}

interface EmissionSupplyBadgeProps {
    address: Address;
    emission: bigint;
}

const EmissionSupplyBadge = ({ address, emission }: EmissionSupplyBadgeProps) => {
    const supplyContext = useSupplies();
    if (!supplyContext) {
        throw new Error('useResources must be used within a ResourcesProvider');
    }
    const { supplies } = supplyContext;
    const supplyName = getTokenDisplayName(address);
    const supply = supplies.find((supply) => supply.type === supplyName);

    return (
        <div className="flex items-center gap-1.5">
            <div className={cn('p-1.5 rounded-full', supply?.color)}>
                {supply?.icon}
            </div>
            <div className="flex flex-col">
                <span className="font-mono text-xs font-medium text-white/70">
                    +{formatEther(emission)}/s
                </span>
            </div>
        </div>

    )
}

interface ValueSupplyBadgeProps {
    address: Address;
    value: bigint;
}

const ValueSupplyBadge = ({ address, value }: ValueSupplyBadgeProps) => {
    console.log('ValueSupplyBadge', address, value);
    const supplyContext = useSupplies();
    if (!supplyContext) {
        throw new Error('useResources must be used within a ResourcesProvider');
    }
    const { supplies } = supplyContext;
    const supplyName = getTokenDisplayName(address);
    const supply = supplies.find((supply) => supply.type === supplyName);
    
    return (
        <div className="flex items-center gap-1.5">
            <div className={cn('p-1.5 rounded-full', supply?.color)}>
                {supply?.icon}
            </div>
            <div className="flex flex-col">
                <span className="font-mono font-medium text-xs text-white/90">
                {formatEther(value)}
                </span>
            </div>
        </div>
    )
}
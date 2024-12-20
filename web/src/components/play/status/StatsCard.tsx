"use client";

import { PlanetStat } from '@/domain/TestingData';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { Badge } from "@/components/ui/badge"

type PlanetStatsProps = {
    stats: PlanetStat[]
}

export default function StatsCard({ stats }: PlanetStatsProps) {

    const maxStatValue = 20;//Math.max(...stats.map(stat => stat.value))

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="w-full h-[300px] col-span-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={stats}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis angle={45} domain={[0, maxStatValue]} />
                            <Radar name="Stats" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-2 md:pt-12 px-12 md:px-0">
                    {stats.map((stat) => (
                        <div key={stat.name} className="flex justify-between items-center">
                            <span className="font-medium text-xs">{stat.name}</span>
                            <Badge variant="secondary">{stat.value}</Badge>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );


    type StatProps = {
        title: string | undefined;
        value: string | undefined;
        icon: JSX.Element;
    }


    function Stat({ title, value, icon }: StatProps) {
        return (
            <div className="flex items-center space-x-4">
                {icon}
                <div>
                    <p className="text-sm font-medium leading-none">
                        {title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {value}
                    </p>
                </div>
            </div>
        );
    }
}
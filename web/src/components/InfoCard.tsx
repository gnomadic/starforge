import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  value: string | number | undefined | bigint
  simulatedValue: string | number | undefined
}

export default function InfoCard({ title, value, simulatedValue }: InfoCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold break-words">{value?.toLocaleString()}</div>
        <div className="text-xl font-bold break-words italic text-red">{simulatedValue}</div>

      </CardContent>
    </Card>
  )
}


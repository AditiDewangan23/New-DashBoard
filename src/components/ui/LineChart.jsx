
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  {  desktop: 186, mobile: 80 },
  {  desktop: 305, mobile: 200 },
  {  desktop: 237, mobile: 120 },
  {  desktop: 73, mobile: 190 },
  {  desktop: 209, mobile: 130 },
  {  desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

export function LineChartComp() {
    return (
      <ChartContainer config={chartConfig}>
        <LineChart
          data={chartData}
          height={180} // 👈 Reduce this value to make the graph shorter
          margin={{
            left: 5,
            right: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="#000000"
            strokeWidth={2}
            dot={{ fill: "#000000" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    )
  }  
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { desktop: 186, mobile: 80 },
  { desktop: 305, mobile: 200 },
  { desktop: 237, mobile: 120 },
  { desktop: 73, mobile: 190 },
  { desktop: 209, mobile: 130 },
  { desktop: 214, mobile: 140 },
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

export function BarChartComponent() {
  return (
    <ChartContainer config={chartConfig} className={"h-1/6 w-full"}>
      <BarChart
        data={chartData}
        width={360}
        height={80}
        barCategoryGap="10%" // slight spacing
        barGap={2}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={4}
          axisLine={false}
          tickFormatter={(val) => val?.slice(0, 3) ?? ""}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>

    </ChartContainer>
  )
}

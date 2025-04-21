"use client"

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

export function MultipleLineChart() {
    return (
      <Card className={"p-5"}>
        <CardHeader>
          <CardTitle>Exercise Minutes</CardTitle>
          <CardDescription>
            Your exercise minutes are ahead of where you normally are.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className={"h-1/4 w-full"}>
            <div className="flex justify-center items-center w-full h-[280px] ">
              <LineChart
                width={600}
                height={300}
                data={chartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value?.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="#ff0000"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="#0000ff"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </div>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  }
  
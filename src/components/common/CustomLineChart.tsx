/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

interface Props {
  chartConfig: ChartConfig;
  chartData: any;
}

function CustomLineChart({ chartData, chartConfig }: Props) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[80vh] mx-auto">
      <LineChart
        data={chartData}
        accessibilityLayer
        margin={{
          left: 20,
          right: 12,
          top: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        {Object.keys(chartConfig).map((line) => (
          <Line
            key={line}
            dataKey={line}
            stroke={`var(--color-${line})`}
            type={"natural"}
            strokeWidth={2}
            dot={false}
          />
        ))}
        <XAxis
          dataKey={"day"}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          // tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey={"cases"}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            return `${value / 1000000}M`; // this will reduce the tick lenght
          }}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
      </LineChart>
    </ChartContainer>
  );
}

export default CustomLineChart;

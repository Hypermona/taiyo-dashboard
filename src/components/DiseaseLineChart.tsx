import { Card, CardContent, CardHeader } from "./ui/card";
import { ChartConfig } from "./ui/chart";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CustomLineChart from "./common/CustomLineChart";
import { useEffect, useState } from "react";
import { IHistoricalData } from "@/services/diseaseDataService";

// define chart label and color
const chartConfig = {
  cases: {
    label: "Cases",
    color: "hsl(var(--chart-1))",
  },
  deaths: {
    label: "Deaths",
    color: "hsl(var(--chart-3))",
  },
  recovered: {
    label: "Recovered",
    color: "hsl(var(--chart-2))",
  },
} as ChartConfig;

const chartActionConfig = [
  {
    label: "Last 30 days",
    value: 30,
  },
  {
    label: "Last 1 year",
    value: 365,
  },
  {
    label: "All",
    value: -1,
  },
];

interface ILineChart {
  chartData: IHistoricalData[];
}

interface IChartAction {
  chartConfig: {
    label: string;
    value: number;
  }[];
  selected: number;
  onChange: (v: number) => void;
}

const Action = ({ chartConfig, onChange, selected }: IChartAction) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {chartConfig.filter((chart) => chart.value === selected)[0]?.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side="left">
        {chartConfig.map((chart) => (
          <DropdownMenuCheckboxItem
            checked={selected == chart.value}
            onCheckedChange={() => onChange(chart.value)}
            disabled={selected == chart.value}
          >
            {chart.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

function DiseaseLineChart({ chartData }: ILineChart) {
  const [data, setData] = useState<IHistoricalData[]>([]);
  const [selectedAction, setSelectedAction] = useState(365);

  const onRangeChange = (range: number) => {
    if (range === -1) {
      setData(chartData);
      return;
    }
    setData(chartData.slice(chartData.length - range));
  };

  const onChangeSelected = (value: number) => {
    setSelectedAction(value);
  };

  useEffect(() => {
    onRangeChange(selectedAction);
  }, [selectedAction]); // update date range based on the dropdown selected

  return (
    <div>
      <Card className="">
        <CardHeader>
          <div className="flex">
            <h2 className="text-2xl sm:text-3xl flex-1 tracking-tight font-bold">
              Covid-19 cases fluctuations
            </h2>
            <Action
              chartConfig={chartActionConfig}
              selected={selectedAction}
              onChange={onChangeSelected}
            />
          </div>
        </CardHeader>
        <CardContent>
          <CustomLineChart chartConfig={chartConfig} chartData={data} />
        </CardContent>
      </Card>
    </div>
  );
}

export default DiseaseLineChart;

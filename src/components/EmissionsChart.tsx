
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TabletSmartphone, Truck } from "lucide-react";

// Sample data - would be replaced with real data from API
const generateData = () => {
  const data = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < 12; i++) {
    const month = months[i];
    data.push({
      name: month,
      scope1: Math.floor(Math.random() * 50) + 30,
      scope2: Math.floor(Math.random() * 70) + 50,
      scope3: Math.floor(Math.random() * 120) + 80,
    });
  }

  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 border border-border">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`tooltip-${index}`} className="flex items-center mb-1">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="mr-2 text-sm">{entry.name}:</span>
            <span className="font-medium text-sm">{entry.value} tCO₂e</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const EmissionsChart = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewType, setViewType] = useState<"monthly" | "quarterly" | "annual">(
    "monthly"
  );

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setData(generateData());
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const COLORS = {
    scope1: "#4FD1C5",
    scope2: "#90CDF4",
    scope3: "#F6AD55",
  };

  return (
    <Card className="shadow-soft animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-semibold">
            Carbon Emissions Trend
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Monthly breakdown by emission category
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-muted/50 p-1 rounded-lg">
          <button
            className={`p-2 rounded-md ${
              viewType === "monthly"
                ? "bg-background shadow-sm"
                : "text-muted-foreground"
            }`}
            onClick={() => setViewType("monthly")}
          >
            <BarChart size={18} />
          </button>
          <button
            className={`p-2 rounded-md ${
              viewType === "quarterly"
                ? "bg-background shadow-sm"
                : "text-muted-foreground"
            }`}
            onClick={() => setViewType("quarterly")}
          >
            <TabletSmartphone size={18} />
          </button>
          <button
            className={`p-2 rounded-md ${
              viewType === "annual"
                ? "bg-background shadow-sm"
                : "text-muted-foreground"
            }`}
            onClick={() => setViewType("annual")}
          >
            <Truck size={18} />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-pulse w-full h-full bg-muted/50 rounded-lg"></div>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 10,
                }}
              >
                <defs>
                  <linearGradient id="scope1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.scope1} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS.scope1} stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="scope2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.scope2} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS.scope2} stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="scope3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.scope3} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS.scope3} stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                  unit=" tCO₂e"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ paddingTop: 20 }}
                />
                <Area
                  type="monotone"
                  dataKey="scope1"
                  name="Scope 1 (Direct)"
                  stroke={COLORS.scope1}
                  fillOpacity={1}
                  fill="url(#scope1)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="scope2"
                  name="Scope 2 (Indirect)"
                  stroke={COLORS.scope2}
                  fillOpacity={1}
                  fill="url(#scope2)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="scope3"
                  name="Scope 3 (Value Chain)"
                  stroke={COLORS.scope3}
                  fillOpacity={1}
                  fill="url(#scope3)"
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EmissionsChart;

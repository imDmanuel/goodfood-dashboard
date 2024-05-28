import { orderChartData } from "@/libs/mock-data";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

export default function OrderLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        // width={500}
        // height={300}
        data={orderChartData}
        margin={{ top: 30, right: 10, left: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          color="#E2E7E7"
          opacity="0.5"
          tickLine={false}
          fontSize={11}
        />
        <Tooltip />
        <Legend content={<CustomLegend />} />
        <Line
          type="monotone"
          dataKey="Last 6 Days"
          stroke="#5A6ACF"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Last Week" stroke="#E6E8EC" />
      </LineChart>
    </ResponsiveContainer>
  );
}

const CustomLegend = ({
  payload,
}: {
  payload?: { color: string; value: string }[];
}) => {
  return (
    <ul className="flex gap-x-6" style={{ listStyleType: "none", padding: 0 }}>
      {payload!.map((entry, index) => (
        <li
          key={`item-${index}`}
          className="flex items-center gap-x-2 -ml-1"
          style={{ color: entry.color }}
        >
          <span
            className="inline-block size-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="text-sm text-[#121212] text-opacity-70 capitalize">
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

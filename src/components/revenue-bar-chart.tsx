import { revenueChartData } from "@/libs/mock-data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export default function RevenueBarChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={revenueChartData}
          margin={{
            top: 5,
            right: -20,
            left: -20,
            bottom: 5,
          }}
          barCategoryGap={36}
          barGap={6}
          barSize={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            color="#E2E7E7"
            opacity="0.5"
            tickLine={false}
            fontSize={11}
          />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend
            align="left"
            iconType="circle"
            fontSize="14px"
            content={<CustomLegend />}
          />
          <Bar
            dataKey="Last 6 Days"
            fill="#5A6ACF"
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="Last Week"
            fill="#E6E8EC"
            // activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
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
          className="flex items-center gap-x-2 ml-5"
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

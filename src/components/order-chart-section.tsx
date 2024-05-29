import arrowDownIcon from "@/assets/arrow-down-icon.png";
import OrderLineChart from "./order-line-chart";

export default function OrderChartSection() {
  return (
    <div className="w-full lg:w-1/3 md:pl-10 pt-10 lg:border-l max-lg:pb-10 border-[#C8CBD9]">
      {/* INFO PANEL */}
      <div className="flex">
        {/* LEFT */}
        <div>
          <div className="text-sm">Order</div>
          <div className="font-medium text-xl mt-2 mb-3">2.568</div>
          <div className="text-xs text-[#737B8B] flex items-center gap-x-1">
            <img src={arrowDownIcon} className="h-3" />
            <span className="text-[#F2383A] font-semibold">2.1%</span> vs last
            week
          </div>
        </div>
        {/* END LEFT */}

        {/* RIGHT */}
        <div className="ml-auto">
          <button className="btn">View Report</button>
        </div>
        {/* END RIGHT */}
      </div>
      <div className="text-sm opacity-50 mt-6">Sales from 1-6 Dec, 2020</div>
      {/* END INFO PANEL */}

      {/* LINE CHART */}
      <div className="h-60">
        <OrderLineChart />
      </div>
      {/* END LINE CHART */}
    </div>
  );
}

import OrderTimePieChart from "./order-time-pie-chart";

export default function OrderTimeSection() {
  return (
    <div className="w-1/3 pl-10 border-l border-[#C8CBD9]">
      <div>
        {/* INFO PANEL */}
        <div className="flex">
          {/* LEFT */}
          <div className="text-sm">
            <div>Order Time</div>
            <div className="opacity-50 mt-2">From 1-6 Dec, 2020</div>
          </div>
          {/* END LEFT */}

          {/* RIGHT */}
          <div className="ml-auto">
            <button className="btn">View Report</button>
          </div>
          {/* END RIGHT */}
        </div>
        {/* END INFO PANEL */}

        {/* ORDER CHART */}
        <div className="h-64">
          <OrderTimePieChart />
        </div>
        {/* END ORDER CHART */}
      </div>
    </div>
  );
}

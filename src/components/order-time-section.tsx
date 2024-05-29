import OrderTimePieChart from "./order-time-pie-chart";

export default function OrderTimeSection() {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 lg:pl-10 md:pr-10 lg:border-l border-[#C8CBD9] max-lg:py-10 border-b">
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
  );
}

import RevenueBarChart from "@/components/revenue-bar-chart";
import upArrowIcon from "@/assets/uparrow-icon.png";
export default function RevenueSection() {
  return (
    <div className="w-full lg:w-2/3 border-b border-b-[#C8CBD9] border-0 lg:pr-10">
      {/* INFO PANEL */}
      <div className="flex">
        {/* DESCRIPTION TEXT */}
        <div>
          <div className="text-sm">Revenue</div>

          <div className="font-medium text-xl mt-2 mb-3">IDR 7.852.000</div>

          <div className="text-xs text-[#737B8B] flex items-center gap-x-1">
            <img src={upArrowIcon} alt="" className="h-3" />
            <span className="text-[#149D52] font-semibold">2.1%</span>
            vs last week
          </div>

          <div className="text-sm opacity-50 mt-6 mb-5">
            Sales from 1-12 Dec, 2020
          </div>
        </div>
        {/* DESCRIPTION TEXT */}

        {/* REPORT BUTTON */}
        <div className="ml-auto">
          <button className="btn">View Report</button>
        </div>
        {/* END REPORT BUTTON */}
      </div>
      {/* END INFO PANEL */}

      {/* REVENUE CHART DATA */}
      <div className="h-52 mt-5 mb-10">
        <RevenueBarChart />
      </div>
      {/* END REVENUE CHART DATA */}
    </div>
  );
}

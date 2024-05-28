import YourRatingPieChart from "./your-rating-pie-chart";

export default function YourRatingSection() {
  return (
    <div className="w-1/3 pr-10 pt-10 border-r border-[#C8CBD9]">
      <div className="text-sm">Your Rating</div>
      <div className="text-xs opacity-50 mt-2 mb-7">
        Lorem ipsum dolor sit amet, consectetur
      </div>

      <div className="h-64">
        <YourRatingPieChart />
      </div>
    </div>
  );
}

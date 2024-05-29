import YourRatingPieChart from "./your-rating-pie-chart";

export default function YourRatingSection() {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 md:pr-10 pt-10 lg:border-r md:max-lg:border-l md:max-lg:pl-10 border-[#C8CBD9] max-lg:border-b">
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

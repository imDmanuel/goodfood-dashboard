import RevenueSection from "./components/revenue-section";
import Sidebar from "@/components/sidebar";
import Navbar from "@/navbar";
import OrderTimeSection from "@/components/order-time-section";
import YourRatingSection from "@/components/your-rating-section";
import MostOrderedFoodSection from "@/components/most-ordered-food-section";
import OrderChartSection from "@/components/order-chart-section";

function App() {
  return (
    <section className="min-h-[100dvh] flex items-stretch">
      {/* SIDEBAR */}
      <Sidebar />
      {/* END SIDEBAR */}

      {/* MAIN CONTENT */}
      <main className="flex-1 h-full">
        <Navbar />

        <div className="container">
          <h2 className="font-medium text-lg my-10">Dashboard</h2>

          {/* TOP CHART ROW */}
          <div className="flex border-b border-[#C8CBD9]">
            {/* REVENUE SECTION */}
            <RevenueSection />
            {/* END REVENUE SECTION */}

            {/* ORDER TIME SECTION */}
            <OrderTimeSection />
            {/* END ORDER TIME SECTION */}
          </div>
          {/* END TOP CHART ROW */}

          {/* BOTTOM CHART ROW */}
          <div className="flex">
            {/* YOUR RATING SECTION */}
            <YourRatingSection />
            {/* END YOUR RATING SECTION */}

            {/* MOST ORDERED FOOD SECTION */}
            <MostOrderedFoodSection />
            {/* END MOST ORDERED FOOD SECTION */}

            {/* ORDER LINE CHART */}
            <OrderChartSection />
            {/* END ORDER LINE CHART */}
          </div>
          {/* END BOTTOM CHART ROW */}
        </div>
      </main>
      {/* END MAIN CONTENT */}
    </section>
  );
}

export default App;

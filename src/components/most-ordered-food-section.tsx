import foodOrder1 from "@/assets/food-order-1.png";
import foodOrder2 from "@/assets/food-order-2.png";
import foodOrder3 from "@/assets/food-order-3.png";
import foodOrder4 from "@/assets/food-order-4.png";

const data = [
  {
    image: foodOrder1,
    item: "Fresh Salad Bowl",
    price: "IDR 45.000",
  },
  {
    image: foodOrder2,
    item: "Chicken Noodles",
    price: "IDR 75.000",
  },
  {
    image: foodOrder3,
    item: "Smoothie Fruits",
    price: "IDR 45.000",
  },
  {
    image: foodOrder4,
    item: "Hot Chicken Wings",
    price: "IDR 45.000",
  },
];

export default function MostOrderedFoodSection() {
  return (
    <div className="px-10 pt-10 w-1/3">
      <div className="text-sm">Most Ordered Food</div>
      <div className="text-xs opacity-50 mt-2">
        Adipiscing elit, sed do eiusmod tempor
      </div>

      <table className="divide-y text-sm w-full mt-12">
        {data.map(({ image, item, price }) => (
          <tr className="text-[#273240] space-x-2">
            <td className="py-4 pr-5">
              <img src={image} className="size-7 rounded-full" />
            </td>
            <td className="pr-5">{item}</td>
            <td className="opacity-70">{price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

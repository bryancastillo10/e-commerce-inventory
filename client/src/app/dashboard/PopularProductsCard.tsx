import { useGetDashboardMetricsQuery } from "@/state/api";
import Rating from "../(components)/Rating";
import { ShoppingBag } from "lucide-react";

const PopularProductsCard = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading ...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex justify-between items-center gap-3 px-5 py-7 border-b"
              >
                {/* Left Side */}
                <section className="flex items-center gap-3">
                  <div>image</div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-sky-500 text-xs">
                        $ {product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </section>
                {/* Right Side */}
                <section className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-sky-100 text-sky-600 mr-2">
                    <ShoppingBag className="size-4" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k sold
                </section>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PopularProductsCard;

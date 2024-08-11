import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import numeral from "numeral";

const PurchaseSummaryCard = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = dashboardMetrics?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 2] || null;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>
          {/* Body */}
          <div>
            <div className="mb-4 mt-2 px-7">
              <p className="text-xs text-gray-400">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                    : "0"}
                </p>
              </div>
              {lastDataPoint && (
                <p
                  className={`text-sm ${
                    lastDataPoint.changePercentage! >= 0
                      ? "text-emerald-500"
                      : "text-rose-500"
                  } flex ml-3`}
                >
                  {lastDataPoint.changePercentage! >= 0 ? (
                    <TrendingUpIcon className="size-5 mr-2" />
                  ) : (
                    <TrendingDownIcon className="size-5 mr-2" />
                  )}
                  {Math.abs(lastDataPoint.changePercentage!)} %
                </p>
              )}
            </div>
          </div>
          {/* Area Chart */}
          <ResponsiveContainer width="100%" minHeight={150} className="p-2">
            <AreaChart
              data={purchaseData}
              margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
            >
              <XAxis dataKey="date" tick={false} axisLine={false} />
              <YAxis tickLine={false} tick={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [
                  `$${value.toLocaleString("en-PH")}`,
                ]}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return date.toLocaleDateString("en-PH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                }}
              />
              <Area
                type="linear"
                dataKey="totalPurchased"
                stroke="#172D9D"
                fill="#172D9D"
                dot={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default PurchaseSummaryCard;

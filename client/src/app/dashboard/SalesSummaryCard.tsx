import { useGetDashboardMetricsQuery } from "@/state/api";
import useSaleSummaryCard from "../(hooks)/SalesSummaryCard";
import { TrendingUpIcon } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const SalesSummaryCard = () => {
  const {
    data: dashboardMetrics,
    isLoading,
    isError,
  } = useGetDashboardMetricsQuery();
  const salesData = dashboardMetrics?.saleSummary || [];

  const {
    timeFrame,
    handleTimeFrame,
    sumOfTotalValue,
    averageChangePercentage,
    highestValueDate,
  } = useSaleSummaryCard(salesData);

  if (isError) {
    return (
      <div className="m-5">Something went wrong. Failed to fetch the data.</div>
    );
  }

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Sales Summary
            </h2>
            <hr />
          </div>
          {/* Body */}
          <section>
            <div className="flex justify-between items-center mb-6 px-7 mt-5">
              <div className="text-lg font-medium">
                <p className="text-xs text-gray-400">Value</p>
                {/* Total Value */}
                <span className="text-2xl font-bold">
                  $
                  {(sumOfTotalValue / 1_000_000).toLocaleString("en", {
                    maximumFractionDigits: 2,
                  })}
                  m
                </span>
                {/* Change Percentage */}
                <span className="text-emerald-500 text-sm ml-2">
                  <TrendingUpIcon className="inline size-4 mr-1" />
                  {averageChangePercentage.toFixed(2)} %
                </span>
              </div>
              <select
                className="shadow-sm border border-gray-300 bg-white p-2 rounded-sm"
                value={timeFrame}
                onChange={handleTimeFrame}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            {/* Body Bar Chart */}
            <ResponsiveContainer width="100%" height={250} className="px-4">
              <BarChart
                data={salesData}
                margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="" vertical={false} />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                  }}
                />
                <YAxis
                  tickFormatter={(value) => {
                    return `$${(value / 1_000_000).toFixed(0)}m`;
                  }}
                  tick={{ fontSize: 12, dx: -1 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(value: number) => [
                    `$ ${value.toLocaleString("en")}`,
                  ]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("en-ph", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                  }}
                />
                <Bar
                  dataKey="totalValue"
                  fill="#0072b2"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </section>
          {/* Footer */}
          <section>
            <hr />
            <div className="flex justify-between items-center mt-6 text-sm mb-4 px-7">
              <p>{salesData.length || 0} days</p>
              <p className="text-sm">
                Date of Highest Sales: &nbsp;
                <span className="font-bold">{highestValueDate}</span>
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default SalesSummaryCard;

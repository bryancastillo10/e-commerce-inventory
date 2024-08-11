import { SalesSummary } from "@/state/type";
import { useState, ChangeEvent } from "react";

const useSaleSummaryCard = (salesData: SalesSummary[]) => {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const sumOfTotalValue =
    salesData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

  const averageChangePercentage =
    salesData.reduce((acc, curr, _, array) => {
      return acc + curr.changePercentage! / array.length;
    }, 0) || 0;

  const highestValueData = salesData.reduce((acc, curr) => {
    return acc.totalValue < curr.totalValue ? acc : curr;
  }, salesData[0] || {});

  const highestValueDate = highestValueData.date
    ? new Date(highestValueData.date).toLocaleDateString("en-PH", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  const handleTimeFrame = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeFrame(e.target.value);
  };

  return {
    timeFrame,
    handleTimeFrame,
    sumOfTotalValue,
    averageChangePercentage,
    highestValueDate,
  };
};

export default useSaleSummaryCard;

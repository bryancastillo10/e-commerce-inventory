"use client";
import ExpenseSummaryCard from "./ExpenseSummaryCard";
import PopularProductsCard from "./PopularProductsCard";
import PurchaseSummaryCard from "./PurchaseSummaryCard";
import SalesSummaryCard from "./SalesSummaryCard";
import StatCard from './StatCard';


import { Package, Tag, CheckCircle2 } from "lucide-react";
import { customerExpensesDetails, receivedPendingDetails, salesDiscountDetails } from "./StatCardContent";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-8 md:gap-10 pb-4 custom-grid-rows">
      <PopularProductsCard />
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <ExpenseSummaryCard/>
      <StatCard
        title="Customer and Expenses"
        dateRange="10 - 25  July 2024"
        primaryIcon={<Package className="text-emerald-600 size-6"/>}
        details={customerExpensesDetails}
      />
      <StatCard
        title="Sales and Discount"
        dateRange="10 - 25 July 2024"
        primaryIcon={<Tag  className="text-emerald-600 size-6"/>}
        details={salesDiscountDetails}
      />
      <StatCard
        title="Received and Pending Orders"
        dateRange="10 - 25 July 2024"
        primaryIcon={<CheckCircle2 className="text-emerald-600 size-6"/>}
        details={receivedPendingDetails}
     />

    </div>
  );
};

export default Dashboard;

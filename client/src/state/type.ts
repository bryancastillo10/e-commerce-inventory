export interface DashboardMetricsType {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

interface Product {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

interface SalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
}

interface PurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercent?: number;
  date: string;
}

interface ExpenseSummary {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
}

interface ExpenseByCategorySummary {
  expenseByCategoryId: string;
  expenseSummaryId: string;
  category: string;
  amount: number;
  date: string;
}

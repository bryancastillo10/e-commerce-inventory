import { TrendingDown, TrendingUp } from "lucide-react";

const customerExpensesDetails = [
    {
        title: "Customer",
        amount: "105.00",
        changePercentage: 85,
        IconComponent: TrendingUp,
    },
    {
        title:"Expenses",
        amount:"21.00",
        changePercentage:-52,
        IconComponent:TrendingDown
    }
]

const salesDiscountDetails = [
    {
        title:"Sales",
        amount: " 1000.00",
        changePercentage:20,
        IconComponent:TrendingUp,
    },
    {
        title:"Discount",
        amount:"120.00",
        changePercentage:-11,
        IconComponent:TrendingDown,
    }
]

const receivedPendingDetails = [
    {
        title:"Received Orders",
        amount:"145.00",
        changePercentage:79,
        IconComponent:TrendingUp,
    },
    {
        title:"Pending Orders",
        amount:"80.00",
        changePercentage:-44,
        IconComponent: TrendingDown
    }
]

export {customerExpensesDetails, salesDiscountDetails, receivedPendingDetails};
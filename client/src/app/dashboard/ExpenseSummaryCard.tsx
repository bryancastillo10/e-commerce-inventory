import { useGetDashboardMetricsQuery } from "@/state/api";
import { ExpenseByCategorySummary } from "@/state/type";
import { TrendingUpIcon } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';

const colors = ["#00CF9F", "#FFBB28", "#0072b2"]

type SumExpenses = {
    [category:string]:number;
}


const ExpenseSummaryCard = () => {
    const {
        data: dashboardMetrics,
        isLoading,
      } = useGetDashboardMetricsQuery();

    const expenseSummary = dashboardMetrics?.expenseSummary[0];
    const expenseByCategorySummary = dashboardMetrics?.expenseByCategorySummary || [];

    const SumOfExpenses = expenseByCategorySummary.reduce(
        (acc: SumExpenses, item: ExpenseByCategorySummary) => {
            const category = item.category + "Expenses";
            const amount = parseInt(item.amount, 10);
            if(!acc[category])acc[category] = 0;
            acc[category] += amount;
            return acc
        },
        {}
    );

    const expenseCategories = Object.entries(SumOfExpenses).map(
        ([name, value]) => ({
          name,
          value,
        })
      );

    const totalExpenses = expenseCategories.reduce(
        (acc,category: {value:number}) => acc + category.value,0
    );

    return (
    <div className="flex flex-col justify-between row-span-3 bg-white shadow-md rounded-2xl">
      {isLoading ? (
        <div>Loading...</div>
      ):
      <>
        {/* Header */}
        <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
                Expenses Summary
            </h2>
            <hr />
        </div>
        {/* Body */}
        <div className="xl:flex justify-between pr-7">
            {/* Pie Chart */}
            <div className="relative basis-3/5">
               <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                    <Pie data={expenseCategories} innerRadius={50} outerRadius={60}
                        fill="#172D9D" dataKey="value" nameKey="name" cx="50%" cy="50%"
                    >
                        {expenseCategories.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer> 
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
                        <span className="font-bold text-xl">${totalExpenses.toFixed(2)}</span>
                </div>
            </div>
            {/* Legends */}
            <ul className="flex flex-col justify-around items-center xl:items-start gap-3 py-5">
                {expenseCategories.map((entry,index)=> (
                    <li key={`legend-${index}`} className="text-xs flex items-center"> 
                    <span className="mr-2 size-3 rounded-full" style={{backgroundColor: colors[index % colors.length]}}/>
                    {entry.name}
                    </li>
                ))}
            </ul>
        </div>
        {/* Footer */}
        <div className="">
            <hr />
            {expenseSummary && (
                <div className="flex justify-between items-center mt-3 mb-4 px-7">
                    <div className="pt-2">
                        <p className="text-xs">Average <span className="font-semibold">{expenseSummary.totalExpenses.toFixed(2)}</span></p>
                    </div>
                    <span className="flex items-center mt-2"><TrendingUpIcon className=" text-emerald-500 mr-2"/>40%</span>
                </div>
            ) }
        </div>
      </>
    }
    </div>
  )
}

export default ExpenseSummaryCard;

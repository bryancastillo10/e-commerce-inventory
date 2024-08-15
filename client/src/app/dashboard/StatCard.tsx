import { LucideIcon } from "lucide-react";

type StatDetail = {
    title:string;
    amount:string;
    changePercentage: number;
    IconComponent: LucideIcon;
}

interface StatCardProps{
    title:string;
    primaryIcon: JSX.Element;
    details:StatDetail[];
    dateRange:string;
}

const StatCard = ({title, primaryIcon, details, dateRange}:StatCardProps) => {
    const formatPercentage = (value:number) => {
        const signal = value >= 0 ? "+" : "";
        return `${signal}${value.toFixed()}%`
    }

    const changeTextColor = (value:number) => 
        value >= 0 ? "text-emerald-600" : "text-rose-600";
    
  
    return (
    <div className="flex flex-col justify-between md:row-span-1 xl:row-span-2 col-span-1  bg-white shadow-md rounded-2xl">
       {/* Header */}
       <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>
      {/* Body */}
      <div className="flex justify-around items-center mb-6 gap-4 px-5">
        <div className="rounded-full p-5 bg-indigo-50 border-emerald-300 border">
            {primaryIcon}
        </div>
        <div className="flex-1">
            {details.map((det,index)=>(
                <div key={index}>
                <div className="flex items-center justify-between my-4">
                <span className="text-gray-500">{det.title}</span>
                <span className="font-bold text-gray-800">{det.amount}</span>
                <div className="flex items-center">
                  <det.IconComponent
                    className={`size-4 mr-1 ${changeTextColor(
                      det.changePercentage
                    )}`}
                  />
                <span
                    className={`font-medium ${changeTextColor(
                      det.changePercentage
                    )}`}
                  >
                    {formatPercentage(det.changePercentage)}
                  </span>
                </div>
              </div>
              {index < details.length - 1 && <hr />}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default StatCard

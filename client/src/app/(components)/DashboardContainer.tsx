import { ReactNode } from "react";
import Navbar from "./Navbar";

interface DashboardContainerProps{
    children: ReactNode;
}

const DashboardContainer = ({children}:DashboardContainerProps) => {
  return (
    <div className={`light flex bg-gray-50 text-slate-900 w-full min-h-screen`}>
      Sidebar
      <main className={`flex flex-col w-full h-full px-9 py-7 md:pl-24 bg-gray-200`}>
        <Navbar/>
        {children}
      </main>
    </div>
  )
}

export default DashboardContainer;

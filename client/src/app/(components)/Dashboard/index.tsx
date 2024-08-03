"use client";

import { useEffect, ReactNode } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "@/app/redux";

interface DashboardContainerProps{
    children: ReactNode;
}

const DashboardLayout = ({children}:DashboardContainerProps) => {
  const isSidebarCollapse = useAppSelector((state) => state.global.isSidebarCollapse);

  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode);
  
  useEffect(()=> {
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.add("light");
    }
  })

  return (
    <div className={`${isDarkMode ? 'dark' : 'light text-slate-700'} flex bg-gray-50  w-full min-h-screen`}>
      <Sidebar/>
      <main className={`flex flex-col w-full h-full px-9 py-7 bg-gray-200 ${isSidebarCollapse ? 'md:pl-24' : 'md:pl-72'}`}>
        <Navbar/>
        {children}
      </main>
    </div>
  )
}

const DashboardContainer = ({children}:DashboardContainerProps) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardContainer;

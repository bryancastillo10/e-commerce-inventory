"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import SidebarHeader from "./SidebarHeader";
import { setIsSidebarCollapse } from "@/state";
import SidebarLink from "./SidebarLink";
import { Archive, CircleDollarSign, Clipboard, Layout, SlidersHorizontal, User } from "lucide-react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector((state) => state.global.isSidebarCollapse);
  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapse));
  }

  const sidebarClassNames = `fixed flex flex-col bg-white transition-all duration-500 overflow-hidden h-full shadow-md z-40
  ${isSidebarCollapse ? "w-0 md:w-16":"w-72 md:w-64"}`;

  return (
    <div className={sidebarClassNames}>
    {/* Header Logo */}
     <SidebarHeader isSidebarCollapse={isSidebarCollapse} toggle={toggleSideBar}/>
    {/* Menu Links */}
    <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isSidebarCollapse={isSidebarCollapse} isDarkMode={isDarkMode}/>
        <SidebarLink href="/inventory" icon={Archive} label="Inventory" isSidebarCollapse={isSidebarCollapse}  isDarkMode={isDarkMode} />
        <SidebarLink href="/products"  icon={Clipboard} label="Products" isSidebarCollapse={isSidebarCollapse} isDarkMode={isDarkMode}  />
        <SidebarLink href="/users"  icon={User} label="Users" isSidebarCollapse={isSidebarCollapse} isDarkMode={isDarkMode} />
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isSidebarCollapse={isSidebarCollapse} isDarkMode={isDarkMode} />
        <SidebarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isSidebarCollapse={isSidebarCollapse}  isDarkMode={isDarkMode} />
    </div>
    {/* Footer */}
    <div className={`${isSidebarCollapse ? "hidden":"block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 TechStock</p>
    </div>
    </div>
  )
}

export default Sidebar

"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import SidebarHeader from "./SidebarHeader";
import { setIsSidebarCollapse } from "@/state";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector((state) => state.global.isSidebarCollapse);

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
        {/* Links List */}
    </div>
    {/* Footer */}
    <div className="">
        <p className="text-center text-xs text-gray-500">&copy; 2024 TechStock</p>
    </div>
    </div>
  )
}

export default Sidebar

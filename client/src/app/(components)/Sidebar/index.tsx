"use client";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div>
    {/* Header Logo */}
     <SidebarHeader/>
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

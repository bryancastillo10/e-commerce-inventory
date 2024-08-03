import { Menu } from "lucide-react";

interface SidebarHeaderProps{
  isSidebarCollapse:boolean;
  toggle: () => void;
}

const SidebarHeader = ({isSidebarCollapse,toggle}:SidebarHeaderProps) => {
  return (
    <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapse ? 'px-5':'px-8'}`}>
    <div>logo</div>
    <h1 className="font-bold text-2xl uppercase">TechStock</h1>
    <button className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-sky-100" onClick={toggle}>
    <Menu className="size-4"/>
  </button>
  </div>
  )
}

export default SidebarHeader;

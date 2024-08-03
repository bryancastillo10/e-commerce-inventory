"use client";
import {  Menu } from "lucide-react";
import { setIsDarkMode, setIsSidebarCollapse } from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";

import SearchInput from "./SearchInput";
import UserSettings from "./UserSettings";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector((state) => state.global.isSidebarCollapse);
  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapse));
  }

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  }

  return (
    <section className="flex justify-between w-full mb-7">
      {/* Left Side */}
      <div className="flex justify-between items-center gap-5">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-sky-100"
                onClick={toggleSideBar}
            >
            <Menu className="size-4"/>
            </button>
        <div className="relative">
              <SearchInput/>
        </div> 
      </div> 
      {/* Right Side */}
      <div className="flex justify-between gap-5">
        <UserSettings isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      </div>
    </section>
  )
}

export default Navbar;

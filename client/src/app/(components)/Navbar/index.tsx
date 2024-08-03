"use client";
import {  Menu } from "lucide-react";

import SearchInput from "./SearchInput";
import UserSettings from "./UserSettings";

const Navbar = () => {
  return (
    <section className="flex justify-between w-full mb-7">
      {/* Left Side */}
      <div className="flex justify-between items-center gap-5">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-sky-100"
                onClick={()=>{}}
            >
            <Menu className="size-4"/>
            </button>
        <div className="relative">
              <SearchInput/>
        </div> 
      </div> 
      {/* Right Side */}
      <div className="flex justify-between gap-5">
        <UserSettings/>
      </div>
    </section>
  )
}

export default Navbar;

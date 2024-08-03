import Link from "next/link";
import { Sun, Moon, Bell, Settings } from "lucide-react";

interface UserSettingsProps{
    isDarkMode:boolean;
    toggleDarkMode: () => void;
}

const UserSettings = ({isDarkMode, toggleDarkMode}:UserSettingsProps) => {
  return (
  <>
    <div className="hidden md:flex justify-between items-center gap-5">
        {/* Theme Toggle */}
        <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ?   
                <Sun className="cursor-pointer text-gray-500" size={24}/>:
                <Moon className="cursor-pointer text-gray-500" size={24}/>
                }
            </button>
        </div>
        {/* Notfiications */}
        <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none bg-red-500 text-white rounded-full">
                2
            </span>
        </div>
        <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3"/>
        {/* Avatar */}
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="size-9">
                image
            </div>
                <span className="font-semibold">User Name</span>
            </div>
        </div>
        {/* Settings */}
        <Link href="/settings">
            <Settings className="cursor-pointer text-gray-500" size={24}/>
        </Link>
  </>
  )
}

export default UserSettings;

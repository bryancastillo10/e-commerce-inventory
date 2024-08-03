import { Bell } from "lucide-react";

const SearchInput = () => {
  return (
    <>
      <input type="search" placeholder="Start typing to search" className="pl-10 pr-4 py-2 w-50 md:w-80 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-sky-500" />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20}/>
        </div>
    </>
  )
}

export default SearchInput;

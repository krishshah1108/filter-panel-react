import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="bg-gray-100 flex justify-between items-center shadow-md h-14 p-4 md:p-3">
      <div className="flex items-center md:text-2xl font-bold text-blue-700">
        BookStore
      </div>
      
      <div className="flex items-center justify-center gap-2 w-full md:w-[300px]">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 w-full border border-gray-300 shadow-sm"
        />
        <CiSearch className="text-2xl cursor-pointer bg-white border-gray-300 border text-blue-600 rounded-md py-2 w-10 h-10 shadow-md" />
      </div>

      <div className="text-black-500 flex items-center">
        <CgProfile className="text-3xl mx-3 cursor-pointer border-gray-300 border rounded-full text-gray-600 hover:text-blue-600" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="bg-gray-100 container flex justify-between shadow-md h-14">
      <div className="flex items-center text-2xl p-3 font-bold text-blue-700">JobHunt</div>
      <div className="flex items-center justify-center p-2 text-gray-500">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 w-[300px] border border-gray-300 shadow-sm"
        />
        <CiSearch className="text-2xl mx-2 cursor-pointer bg-white border-gray-300 border text-blue-600 rounded-md py-2 w-7 h-10 shadow-md" />
      </div>
      <div className="text-black-500 flex items-center">
        <CgProfile className="text-3xl mx-3 cursor-pointer border-gray-300 border rounded-full text-gray-600 hover:text-blue-600" />
      </div>
    </header>
  );
};

export default Header;

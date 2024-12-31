import React from "react";
import FilterPanel from "./FilterPanel";
import BookList from "./BookList"; // Use DoctorList for DoctorListing

const MainBody = () => {
  return (
    <div className='flex h-full'>
      <div className='sticky top-14 w-[300px]'>
        <FilterPanel />
      </div>
      <div className='flex-1 overflow-y-auto p-6'>
        <BookList />
      </div>
    </div>
  );
};

export default MainBody;

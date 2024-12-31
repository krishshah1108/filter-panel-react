import React from "react";
import FilterPanel from "./FilterPanel";
import BookList from "./BookList";

const MainBody = () => {
  return (
    <div className='flex gap-8 h-full'>
      <div className='w-[300px] sticky top-14'>
        <FilterPanel />
      </div>

      <div className='flex-1 overflow-y-auto'>
        <BookList />
      </div>
    </div>
  );
};

export default MainBody;

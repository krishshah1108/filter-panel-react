import React from "react";
import FilterPanel from "./FilterPanel";
import BookList from "./BookList";
import data from "../assets/data.json";

const MainBody = () => {
  return (
    <div className='flex flex-1 gap-8'>
      <FilterPanel />
      <BookList bookData={data} />
    </div>
  );
};

export default MainBody;

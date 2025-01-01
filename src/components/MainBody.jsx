import React from "react";
import FilterPanel from "./FilterPanel";
import BookList from "./BookList";

const MainBody = () => {
  return (
    <div className="flex h-full overflow-y-auto">
      <div className="top-0 sticky h-fit w-[300px] overflow-y-auto max-h-full">
        <FilterPanel />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <BookList />
      </div>
    </div>
  );
};

export default MainBody;

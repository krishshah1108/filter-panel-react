import FilterPanel from "./FilterPanel";
import BookList from "./BookList";
import { use } from "react";

const MainBody = () => {
  return (
    <div className='flex flex-1 gap-8'>
      <FilterPanel />
      <BookList />
    </div>
  );
};

export default MainBody;

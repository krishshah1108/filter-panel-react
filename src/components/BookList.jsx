import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { filteredBooks, loading } = useContext(BookContext);
  if (loading) {
    return (
      <div className='fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50'>
        <div className='w-12 h-12 border-4 border-t-blue-500 border-b-blue-300 border-l-transparent border-r-transparent rounded-full animate-spin'></div>
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {filteredBooks.length === 0 ? (
        <div>
          <img
            src='https://www.jaivijaybookcentre.com/public/frontend/images/no-record.png'
            alt='book not found'
            className='w-full h-full object-cover'
          />
          <h3 className="text-2xl font-bold text-gray-800 ml-[70px]">Book Not Found</h3>
        </div>
      ) : (
        filteredBooks.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })
      )}
    </div>
  );
};

export default BookList;

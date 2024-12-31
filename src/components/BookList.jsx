import React, { useContext } from 'react';
import BookCard from './BookCard';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const {bookData} = useContext(BookContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bookData.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;

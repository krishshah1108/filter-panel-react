import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
const BookList = () => {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/books');
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bookData.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;

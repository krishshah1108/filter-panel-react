import FilterPanel from './FilterPanel';
import BookList from './BookList';
import { useEffect, useState } from 'react';

const MainBody = () => {
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
  }, [bookData]);
  return (
    <div className="flex flex-1 gap-8">
      <FilterPanel bookData={bookData} />
      <BookList bookData={bookData} />
    </div>
  );
};

export default MainBody;

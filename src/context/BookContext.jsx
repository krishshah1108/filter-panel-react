import { createContext, useState , useEffect } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: "",
    generes: [],
    progressBarValue: 3,
    sortValue: "",
  });
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBooks();
  }, [bookData]);
  return (
    <BookContext.Provider value={{ bookData, setFilters }}>
      {children}
    </BookContext.Provider>
  );
};

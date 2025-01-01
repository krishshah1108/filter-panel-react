import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [distinctCategories, setDistinctCategories] = useState([]);
  const [distinctGeneres, setDistinctGeneres] = useState([]);
  const [filters, setFilters] = useState({
    searchBook: "",
    categories: [],
    maxPrice: Infinity,
    generes: [],
    progressBarValue: 3,
    sortValue: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        setBookData(data);

        // Get distinct categories and genres after data is fetched
        const distinctCategories = Array.from(
          new Set(data.map((book) => book.category))
        );
        setDistinctCategories(distinctCategories);

        const distinctGeneres = Array.from(
          new Set(data.map((book) => book.genre))
        );
        setDistinctGeneres(distinctGeneres);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []); // Run only once when the component mounts

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filteredData = bookData.filter((book) => {
        const searchBookMatch =
          filters.searchBook === "" ||
          book.title.toLowerCase().includes(filters.searchBook) ||
          book.author.toLowerCase().includes(filters.searchBook);

        const categoryBookMatch =
          filters.categories.length === 0 ||
          filters.categories.includes(book.category.toLowerCase());

        const maxPriceBookMatch =
          filters.maxPrice === "" || filters.maxPrice === Infinity
            ? true
            : book.price <= Number(filters.maxPrice);

        const genereBookMatch =
          filters.generes.length === 0 ||
          filters.generes.includes(book.genre.toLowerCase());

        const ratingBookMatch = book.rating >= filters.progressBarValue;

        return (
          searchBookMatch &&
          categoryBookMatch &&
          maxPriceBookMatch &&
          genereBookMatch &&
          ratingBookMatch
        );
      });

      // Sorting
      if (filters.sortValue === "low-to-high") {
        filteredData.sort((a, b) => a.price - b.price);
      } else if (filters.sortValue === "high-to-low") {
        filteredData.sort((a, b) => b.price - a.price);
      }

      setFilteredBooks(filteredData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [filters, bookData]); // Re-run when filters or bookData changes

  return (
    <BookContext.Provider
      value={{
        bookData,
        filteredBooks,
        filters,
        setFilters,
        distinctCategories,
        distinctGeneres,
        loading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
  
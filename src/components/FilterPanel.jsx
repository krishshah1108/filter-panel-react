import React, { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const FilterPanel = () => {
  const { filters, setFilters, distinctCategories, distinctGeneres } =
    useContext(BookContext);

  const [categories, setCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [searchGenere, setSearchGenere] = useState("");
  const [generes, setGeneres] = useState([]);
  const [progressBarValue, setProgressBarValue] = useState(3);
  const [sortValue, setSortValue] = useState("");
  const [loading, setLoading] = useState(false);


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
      setFilters({
        ...filters,
        categories: categories.filter((c) => c !== category),
      });
    } else {
      setCategories([...categories, category.toLowerCase()]);
      setFilters({
        ...filters,
        categories: [...categories, category.toLowerCase()],
      });
    }
  };
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    setFilters({
      ...filters,
      maxPrice: e.target.value === "" ? Infinity : Number(e.target.value),
    });
  };

  const handleProgressChanger = (e) => {
    setProgressBarValue(e.target.value);
    setFilters({ ...filters, progressBarValue: e.target.value });
  };
  const handleSearchGenereChange = (e) => {
    setSearchGenere(e.target.value);
  };
  const handleGenereSelect = (e) => {
    const genere = e.target.value;
    if (generes.includes(genere)) {
      setGeneres(generes.filter((c) => c !== genere));
      setFilters({ ...filters, generes: generes.filter((c) => c !== genere) });
    } else {
      setGeneres([...generes, genere.toLowerCase()]);
      setFilters({ ...filters, generes: [...generes, genere.toLowerCase()] });
    }
  };

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
    setFilters({ ...filters, sortValue: e.target.value });
  };
  const handleClearData = () => {
    setCategories([]);
    setMaxPrice(Infinity);
    setProgressBarValue(3);
    setSortValue("");
    setSearchGenere("");
    setGeneres([]);
    setFilters({
      searchBook: "",
      categories: [],
      maxPrice: Infinity,
      generes: [],
      progressBarValue: 3,
      sortValue: "",
    });
  };
  const handleClearGenere = () => {
    setSearchGenere("");
    setGeneres([]);
  };
  const handleClearSort = () => {
    setSortValue("");
    setFilters({ ...filters, sortValue: "" });
  };

  const filteredGenres = distinctGeneres.filter((genre) =>
    genre.toLowerCase().includes(searchGenere.toLowerCase())
  );
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchGenere]);

  return (
    <div className="flex flex-col max-w-[300px] w-full gap-3 p-2 bg-[#ebe8e8] border border-gray-200 rounded-sm shadow-sm h-full">
      <div className='flex justify-between items-center p-1'>
        <h2 className='text-lg uppercase text-blue-500 font-bold'>
          Filter Panel
        </h2>
        <button
          className='text-sm font-semibold text-blue-500'
          onClick={handleClearData}
        >
          Clear All
        </button>
      </div>

      <div>
        <h2 className='text-lg font-semibold'>Category</h2>
        <div className='flex flex-col gap-2'>
          {distinctCategories.map((category) => (
            <label key={category} className='flex items-center text-gray-700'>
              <input
                type='checkbox'
                name='category'
                value={category.toLowerCase()}
                onChange={handleCategoryChange}
                checked={categories.includes(category.toLowerCase())}
                className='mr-2 accent-blue-500'
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-lg font-semibold'>Price Range</h2>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='minPrice' className='text-sm font-medium mb-1'>
              Min Price
            </label>
            <input
              type='text'
              id='minPrice'
              name='minPrice'
              placeholder='MIN'
              disabled
              className='w-24 border border-gray-300 rounded p-2 text-sm disabled:bg-white'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='maxPrice' className='text-sm font-medium mb-1'>
              Max Price
            </label>
            <input
              type='number'
              id='maxPrice'
              min={1000}
              step={1000}
              name='maxPrice'
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder='MAX'
              className='w-24 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-lg font-semibold'>Rating</h2>
        <div className='relative'>
          <input
            type='range'
            min='1'
            max='5'
            step='1'
            className='w-full h-2 bg-gray-200 rounded accent-blue-500'
            value={progressBarValue}
            onChange={handleProgressChanger}
          />
        </div>
        <select
          name='rating'
          value={progressBarValue}
          onChange={handleProgressChanger}
          className='text-gray-700 w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value='1'>1 ★ and above</option>
          <option value='2'>2 ★ and above</option>
          <option value='3'>3 ★ and above</option>
          <option value='4'>4 ★ and above</option>
          <option value='5'>5 ★ and above</option>
        </select>
      </div>

      <div>
        <div>
          <div className='flex justify-between'>
            <h2 className='text-lg font-semibold'>Genre</h2>
            <button
              className='text-sm font-semibold text-blue-500'
              onClick={handleClearGenere}
            >
              Clear
            </button>
          </div>
          <input
            type='text'
            placeholder='Search genres...'
            value={searchGenere}
            onChange={handleSearchGenereChange}
            className='w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
          />
        </div>
        <div className='flex flex-col gap-2 max-h-[130px] overflow-y-auto'>
          {loading ? (
            <p>Loading...</p>
          ) : filteredGenres.length > 0 ? (
            filteredGenres.map((genre) => (
              <label key={genre} className='flex items-center text-gray-700'>
                <input
                  type='checkbox'
                  name='genre'
                  value={genre.toLowerCase()}
                  checked={generes.includes(genre.toLowerCase())}
                  onChange={handleGenereSelect}
                  className='mr-2 accent-blue-500'
                />
                {genre}
              </label>
            ))
          ) : (
            <p className='text-gray-500 text-center'>No genres found</p>
          )}
        </div>
      </div>

      <div>
        <div className='flex justify-between'>
          <h2 className='text-lg font-semibold'>Sort by Price</h2>
          <button
            className='text-sm font-semibold text-blue-500'
            onClick={handleClearSort}
          >
            Clear
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='sortPrice'
              onChange={handleSortChange}
              value='low-to-high'
              className='mr-2'
              checked={sortValue === "low-to-high"}
            />
            Low to High
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='sortPrice'
              onChange={handleSortChange}
              value='high-to-low'
              className='mr-2'
              checked={sortValue === "high-to-low"}
            />
            High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

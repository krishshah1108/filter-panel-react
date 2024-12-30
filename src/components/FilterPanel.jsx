import React from "react";

const FilterPanel = () => {
  return (
    <div className="flex flex-col max-w-[300px] w-full gap-3 p-2 bg-[#ebe8e8] border border-gray-200 rounded-sm shadow-sm sticky top-0 sm:max-w-[350px] lg:max-w-[400px]">
      <div className="flex justify-between items-center p-1">
        <h2 className="text-lg uppercase text-blue-500 font-bold">
          Filter Panel
        </h2>
        <button className="text-sm font-semibold text-blue-500">Clear All</button>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Category</h2>
        <div className="flex flex-col gap-2">
          {['fiction', 'non-fiction', 'mystery', 'fantasy'].map(category => (
            <label key={category} className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="category"
                value={category}
                className="mr-2 accent-blue-500"
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Price Range</h2>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <label htmlFor="minPrice" className="text-sm font-medium mb-1">
              Min Price
            </label>
            <input
              type="text"
              id="minPrice"
              name="minPrice"
              placeholder="MIN"
              disabled
              className="w-24 border border-gray-300 rounded p-2 text-sm disabled:bg-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxPrice" className="text-sm font-medium mb-1">
              Max Price
            </label>
            <input
              type="number"
              id="maxPrice"
              min={1000}
              step={1000}
              name="maxPrice"
              placeholder="MAX"
              className="w-24 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Rating</h2>
        <div className="relative">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            className="w-full h-2 bg-gray-200 rounded accent-blue-500"
          />
        </div>
        <select
          name="rating"
          className="text-gray-700 w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1">1 ★ and above</option>
          <option value="2">2 ★ and above</option>
          <option value="3">3 ★ and above</option>
          <option value="4">4 ★ and above</option>
          <option value="5">5 ★ and above</option>
        </select>
      </div>

      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Genre</h2>
          <button className="text-sm font-semibold text-blue-500">Clear</button>
        </div>
        <input
          type="text"
          placeholder="Search genres..."
          className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="flex flex-col gap-2 max-h-[130px] overflow-y-auto">
          {['Mystery', 'Thriller', 'Romance', 'Horror', 'Adventure', 'Sci-Fi'].map(genre => (
            <label key={genre} className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="genre"
                className="mr-2 accent-blue-500"
              />
              {genre}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Sort by Price</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="sortPrice"
              value="low-to-high"
              className="mr-2"
            />
            Low to High
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="sortPrice"
              value="high-to-low"
              className="mr-2"
            />
            High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

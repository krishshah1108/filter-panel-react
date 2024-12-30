const BookCard = ({book}) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md shadow-lg overflow-hidden max-w-[300px]">
      <img
        src={book.image}
        alt={book.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Category:</strong> {book.category}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {book.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-blue-600">${book.price.toFixed(2)}</span>
          <span className="text-sm text-yellow-500 flex items-center">
          {Array.from({ length: book.rating }).map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
            
          </span>
        </div>
        <button disabled={!book.available} className={`mt-3 py-2 px-4 text-white font-medium rounded-md ${book.available ? "bg-green-800" : "bg-red-800"} `}>
          {book.available ? "Buy Now" : "Out of Stock"}
        </button>
      </div>
      
    </div>
  );
};

export default BookCard;

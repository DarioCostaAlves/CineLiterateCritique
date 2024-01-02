const BookItem = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4 transition duration-300 ease-in-out transform hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
      <p className="mt-2">{book.description}</p>
    </div>
  );
};

export default BookItem;

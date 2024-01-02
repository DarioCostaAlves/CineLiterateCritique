import { useState, useEffect } from "react";
import BookItem from "./BookItem";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books: ", error));
  }, []);
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">List of Books</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

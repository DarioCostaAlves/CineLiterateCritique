import { useState, useEffect } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books: ", error));
  }, []);
  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BookList;

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
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book}></BookItem>
        ))}
      </ul>
    </>
  );
};

export default BookList;

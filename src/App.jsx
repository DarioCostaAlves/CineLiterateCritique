import React, { useState } from "react";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";

function App() {
  const [bookList, setBookList] = useState([]);

  const handleAddBook = (book) => {
    // Check if the book is already in the bookList before adding
    if (!bookList.some((b) => b.id === book.id)) {
      setBookList([...bookList, book]);
    }
  };

  return (
    <>
      <BookSearch handleAddBook={handleAddBook} />
      <BookList bookList={bookList} />
    </>
  );
}

export default App;

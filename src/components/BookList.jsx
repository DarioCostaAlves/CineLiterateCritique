import React from "react";
import BookItem from "./BookItem";

const BookList = ({ bookList }) => {
  return (
    <div className="max-w-xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-4">Your Book List</h2>
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

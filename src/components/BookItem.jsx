const BookItem = ({ book }) => {
  return (
    <li>
      <strong>Title:</strong> {book.title} | <strong>Author: </strong>{" "}
      {book.author}
    </li>
  );
};

export default BookItem;

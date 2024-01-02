import React, { useState, useEffect } from "react";
import axios from "axios";

const BookSearch = ({ handleAddBook }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      // Fetch data only when search query is present
      axios
        .get(`http://localhost:4000/books`)
        .then((response) => {
          setSearchResults(response.data);
          setShowAutocomplete(true);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]);
      setShowAutocomplete(false);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddButtonClick = (book) => {
    handleAddBook(book);
    setSearchQuery(""); // Clear the search query after adding the book
    setSearchResults([]); // Clear search results after adding the book
    setShowAutocomplete(false);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <input
        type="text"
        className="border border-gray-400 rounded px-4 py-2 outline-none focus:border-blue-500"
        placeholder="Search by title"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {showAutocomplete && (
        <div className="mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded">
          {searchResults
            .filter((book) =>
              book.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((book) => (
              <div
                key={book.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAddButtonClick(book)}
              >
                {book.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;

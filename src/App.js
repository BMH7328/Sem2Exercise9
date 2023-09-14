import React, { useState, useEffect, useMemo } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    let options = [];
    /* Instruction: Get all categories from books */

    return options;
  }, []);

  useEffect(() => {
    /* instruction: load books from the books data */
  }, []);

  useEffect(() => {
    /* Instruction: filter books by selectedCategory */
    /* Instruction: set filtered books to books state */
    /* Instruction: set books to all books if selectedCategory is empty */
  }, [selectedCategory]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* instruction: list books using .map() */}
    </div>
  );
};

export default BookList;

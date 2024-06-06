import { useState } from "react";

export default function Book({ book, onAddBook, onDeleteBook }) {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <div className="book-card">
      <div className="book-info">
        <p className="book-name">
          <b>Book Title:</b> <br /> <em>{book.title}</em>
        </p>
        <p>
          <b>Edition Count:</b> <br /> <em>{book.edition_count}</em>
        </p>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            onAddBook(book);
            setIsAdd((isAdd) => !isAdd);
          }}
        >
          {" "}
          {isAdd ? "Added👍🏻" : "Add to Bookshelf"}
        </button>
      </div>
    </div>
  );
}

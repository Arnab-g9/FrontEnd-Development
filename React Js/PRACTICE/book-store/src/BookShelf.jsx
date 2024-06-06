import { Link } from "react-router-dom";
import BookShelfCard from "./components/BookShelfCard";

import BooksList from "./components/BooksList";
export default function BookShelf({ bookList, onDeleteBook }) {
  return (
    <div className="book-shelf">
      <div className="book-shelf-title-container">
        <Link to="/" className="link">
          <i class="ri-arrow-left-line"></i>
        </Link>
        <p>My BookShelf</p>
      </div>
      <BooksList>
        {bookList.length === 0 ? (
          <p>Nothing to Show. Please Search By Book Name.😊</p>
        ) : (
          bookList.map((book) => (
            <BookShelfCard
              book={book}
              onDeleteBook={onDeleteBook}
              key={book.title}
            />
          ))
        )}
      </BooksList>
    </div>
  );
}

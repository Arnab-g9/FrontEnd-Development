export default function BookShelfCard({ book, onDeleteBook }) {
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
        <button className="btn" onClick={() => onDeleteBook(book.cover_i)}>
          Remove From Shelf
        </button>
      </div>
    </div>
  );
}

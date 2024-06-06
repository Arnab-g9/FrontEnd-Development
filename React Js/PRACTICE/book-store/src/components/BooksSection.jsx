import BooksList from "./BooksList";
import Book from "./Book";

export default function BooksSection({ bookList, onAddBook }) {
  return (
    <BooksList>
      {bookList.length === 0 ? (
        <p>Nothing to Show. Please Search By Book Name.😊</p>
      ) : (
        bookList.map((book) => (
          <Book book={book} onAddBook={onAddBook} key={book.title} />
        ))
      )}
    </BooksList>
  );
}

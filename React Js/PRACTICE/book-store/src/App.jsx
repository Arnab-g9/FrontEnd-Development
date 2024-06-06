import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookshelf from "./BookShelf";
import { useEffect, useState } from "react";
import BooksSection from "./components/BooksSection";

export default function App() {
  const [query, setQuery] = useState("");
  const [searchBooksList, setSearchBooksList] = useState([]);
  const [bookShelf, setBookShelf] = useState(function () {
    const storageValue = localStorage.getItem("bookShelf");
    return JSON.parse(storageValue);
  });

  function handleAddBook(newBook) {
    if (!bookShelf.includes(newBook)) {
      setBookShelf((bookShelf) => [...bookShelf, newBook]);
    }
  }
  function handleDeleteBook(id) {
    setBookShelf(bookShelf.filter((book) => book.cover_i !== id));
  }
  useEffect(
    function () {
      localStorage.setItem("bookShelf", JSON.stringify(bookShelf));
    },
    [bookShelf]
  );
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchBooks() {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error("something went wrong with fetching movies");
        const data = await res.json();
        if (data.docs === "False") throw new Error("Movie not found");
        setSearchBooksList(data.docs);
        console.log(data.docs);
      }
      if (query.length < 3) {
        setSearchBooksList([]);
        return;
      }
      fetchBooks();
    },
    [query]
  );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar
                  query={query}
                  onQueryChange={setQuery}
                  bookShelf={bookShelf}
                />
                <BooksSection
                  bookList={searchBooksList}
                  onAddBook={handleAddBook}
                />
              </>
            }
          />
          <Route
            path="/my-bookshelf"
            element={
              <Bookshelf bookList={bookShelf} onDeleteBook={handleDeleteBook} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

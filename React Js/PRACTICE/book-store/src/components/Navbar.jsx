import Search from "./Search";
import { Link } from "react-router-dom";
export default function NavBar({ query, onQueryChange, bookShelf }) {
  return (
    <div className="navbar">
      <Search query={query} onQueryChange={onQueryChange} />
      <div className="btn-container">
        <Link to="/my-bookshelf" className="link">
          <button className="btn">
            My Bookshelf <span className="count">{bookShelf.length}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

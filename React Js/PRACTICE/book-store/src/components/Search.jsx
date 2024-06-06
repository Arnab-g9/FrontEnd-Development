export default function Search({ query, onQueryChange }) {
  return (
    <div className="title-search-bar-container">
      <p className="title-text">Search by Book Name:</p>
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

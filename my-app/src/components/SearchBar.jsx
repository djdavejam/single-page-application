export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Projects"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="search-input"
    />
  );
}

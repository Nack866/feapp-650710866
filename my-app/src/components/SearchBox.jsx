import { useState } from "react";

function SearchBox({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="ค้นหา..."
      />

      <button type="submit">
        ค้นหา
      </button>
    </form>
  );
}

export default SearchBox;

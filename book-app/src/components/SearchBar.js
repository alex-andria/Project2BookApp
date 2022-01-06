import React from "react";

function SearchBar({search, setSearch}) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="search">
      <label htmlFor="search">Search: </label>
      <input
      onChange={(e)=>handleChange(e)}
      name="search"
      type="text"
      value={search}
      />
    </div>
  );
}

export default SearchBar;
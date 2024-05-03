import React from "react";

function Search(props) {
  return (
    <div className="search">
      <input
        className="livesearch"
        type="search"
        onChange={(e) => {
          props.FilteredItems(e.target.value);
        }}
        placeholder="Live Search..."
      />
      <input
        type="search"
        className="clicksearch"
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
        placeholder="Search On Click.."
      />
      <button
        onClick={() => {
          props.FilteredItems(props.search);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;

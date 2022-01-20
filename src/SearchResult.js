import React from "react";

function SearchResult({ img, location, title, description, price, total }) {
  return (
    <div className="searchResult">
      <p>{img}</p>
      <p>{location}</p>
    </div>
  );
}

export default SearchResult;

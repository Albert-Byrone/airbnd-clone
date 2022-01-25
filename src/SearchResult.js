import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./SearchResult.css";

function SearchResult({ img, location, title, description, price, total }) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="serachResult__heart" />
      <div className="serachResult__info">
        <div className="searchResult__toTop">
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <div className="searchResult__toButton">
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

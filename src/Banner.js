import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";

function Banner() {
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner__container">
      <div className="banner">
        <div className="banner__search">
          {showSearch && <Search />}
          <Button
            onClick={() => setshowSearch(!showSearch)}
            className="banner__searchBtn"
            variant="outlined"
          >
            {showSearch ? "Hide" : "Search Dates"}
          </Button>
        </div>
        <div className="banner__info">
          <h1 className="">Not sure where to go? Perfect. </h1>
          <Button variant="outlined" size="large">
            <span>I'm flexible</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

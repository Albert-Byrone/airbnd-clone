import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";

function Banner() {
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setshowSearch(!showSearch)}
          className="banner__searchBtn"
          variant="outlined"
        >
          Search Date
        </Button>
      </div>
      <div className="banner__info">
        <h1 className="">Not sure where to go? Perfect. </h1>
        <Button variant="outlined" size="large">
          I'm flexible
        </Button>
      </div>
    </div>
  );
}

export default Banner;

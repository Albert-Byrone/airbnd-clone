import React from "react";
import "./Banner.css";

function Banner() {
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
    </div>
  );
}

export default Banner;

import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Header() {
  return (
    <div className="header">
      <img
        src="https://img.icons8.com/ios-filled/500/000000/airbnb.png"
        alt="logo"
        className="header__icon"
      />
      <div className="header__center">
        <input type="text" />
        {/* <SearchIcon /> */}
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;

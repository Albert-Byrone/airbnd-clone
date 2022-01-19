import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";

export default function SearchPage() {
  return (
    <div className="search__page">
      <div className="searchPage__info">
        <div className="searchPage__menu">
          <Button fontSize="medium">Tiny homes</Button>
          <Button>Amazing pool</Button>
          <Button>Cabins</Button>
          <Button>A-franmes</Button>
          <Button>Beachfront</Button>
          <Button>Luxe</Button>
          <Button>Farms</Button>
          <Button>Shipping Containers</Button>
        </div>
        <div className="searchPage__tab">
          <Button variant="outlined">
            Apply <ExpandMoreIcon />
          </Button>
          <Button variant="outlined">
            Guest <ExpandMoreIcon />
          </Button>
          <Button variant="outlined">
            <ExpandMoreIcon />
            Filter
          </Button>
        </div>
      </div>
      <div className="search__container">
        
      </div>
    </div>
  );
}

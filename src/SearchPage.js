import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";

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
          <Button variant="outlined">Apply</Button>
          <Button variant="outlined">Guest</Button>
          <Button variant="outlined">Filter</Button>
        </div>
      </div>
    </div>
  );
}

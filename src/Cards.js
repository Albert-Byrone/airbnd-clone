import React from "react";
import Button from "@mui/material/Button";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Discover Airbnb Experiences</h1>
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Things to do
            <br />
            on your trip
          </h1>
          <Button variant="contained" size="medium">
            Experiences
          </Button>
        </div>

        <div class="hero-content2">
          <h1 class="hero-title2">
            Things to do
            <br />
            from home
          </h1>
          <Button variant="contained" size="medium">
            Online Experiences
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Cards;

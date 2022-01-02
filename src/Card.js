import React from "react";
import "./Card.css";

function Card({ city, src, distance, color }) {
  return (
    <div className="card">
      <img src={src} alt="city" />
      <div className="card__info" style={{ backgroundColor: color }}>
        <h2>{city}</h2>
        <span>{distance}</span>
      </div>
    </div>
  );
}

export default Card;

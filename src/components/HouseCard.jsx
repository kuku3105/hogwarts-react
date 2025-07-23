import React from "react";
import "./HouseCard.css";

function HouseCard({ house }) {
  return (
    <div className="house-card">
      <img src={house.image} alt={house.name} className="house-img" />
      <h3>{house.name}</h3>
      <p><strong>Founder:</strong> {house.founder}</p>
      <p><strong>Traits:</strong> {house.traits}</p>
      <p><strong>Mascot:</strong> {house.mascot}</p>
      <p><strong>Head of House:</strong> {house.head}</p>
    </div>
  );
}

export default HouseCard;

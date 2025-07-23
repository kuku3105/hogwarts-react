import React from "react";
import "./HouseSelector.css";

function HouseSelector({ houses, onSelect }) {
  return (
    <div className="house-selector">
      {houses.map((house) => (
        <button
          key={house.name}
          onClick={() => onSelect(house.name)}
          className="house-button"
        >
          <img src={house.image} alt={house.name} />
          <span>{house.name}</span>
        </button>
      ))}
    </div>
  );
}

export default HouseSelector;

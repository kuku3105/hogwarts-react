import React, { useState } from "react";
import housesData from "../data/house.json";
import HouseSelector from "../components/HouseSelector";
import HouseCard from "../components/HouseCard";
import "./House.css";

function House() {
  const [selectedHouse, setSelectedHouse] = useState(housesData[0]);

  const handleSelect = (houseName) => {
    const house = housesData.find((h) => h.name === houseName);
    setSelectedHouse(house);
  };

  return (
    <div className="house-page">
      <h2>🏰 Explore the Hogwarts Houses</h2>
      <HouseSelector houses={housesData} onSelect={handleSelect} />
      <HouseCard house={selectedHouse} />
    </div>
  );
}

export default House;

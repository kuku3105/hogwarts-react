// src/components/CharacterGrid.jsx
import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterGrid.css";

function CharacterGrid({ characters }) {
  return (
    <div className="character-grid">
      {characters.map((char, index) => (
        <CharacterCard
          key={index}
          name={char.name}
          house={char.house}
          speciality={char.speciality}
          image={char.image}
        />
      ))}
    </div>
  );
}

export default CharacterGrid;

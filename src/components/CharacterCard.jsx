// src/components/CharacterCard.jsx
import React from "react";
import "./CharacterCard.css";

function CharacterCard({ name, house, speciality, image }) {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>House:</strong> {house || "Unknown"}</p>
      <p className="special">{speciality}</p>
    </div>
  );
}

export default CharacterCard;

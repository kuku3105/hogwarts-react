import React, { useEffect, useState } from "react";
import "./Spells.css";

const categoryDescriptions = {
  All: "Showing all known spells from the wizarding world.",
  Charm: "Charms add properties to objects without changing their inherent nature.",
  Curse: "Curses are dark spells that do harmful things to others.",
  Jinx: "Jinxes are minor dark magic spells used to irritate or inconvenience."
};

function Spells() {
  const [spells, setSpells] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    fetch("/data/spells.json")
      .then((res) => res.json())
      .then((data) => setSpells(data))
      .catch((err) => console.error("Error fetching spells:", err));
  }, []);

  const filteredSpells =
    selectedType === "All"
      ? spells
      : spells.filter((spell) => spell.type === selectedType);

  return (
    <div className="spells-page">
      <h2>✨ Spell Book</h2>

      <div className="spell-categories">
        {["All", "Charm", "Curse", "Jinx"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={selectedType === type ? "active" : ""}
          >
            {type}s
          </button>
        ))}
      </div>

      <p className="category-description">{categoryDescriptions[selectedType]}</p>

      <div className="spells-list">
        {filteredSpells.map((spell, index) => (
  <div className="spell-card" key={index}>
    <h3>{index + 1}. {spell.name}</h3>
    <p><strong>Type:</strong> {spell.type}</p>
    <p><strong>Effect:</strong> {spell.effect}</p>
    <p><strong>Pronunciation:</strong> <em>{spell.pronunciation}</em></p>
  </div>
))}

    
      </div>
    </div>
  );
}

export default Spells;

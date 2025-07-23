// src/pages/Cards.jsx
import React, { useEffect, useState } from "react";
import CharacterGrid from "../components/CharacterGrid";

import "./Cards.css";

function Cards() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://66362eaf-4700-4a4a-8bcf-ff2a52500582.mock.pstmn.io")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error("Failed to fetch characters", err));
  }, []);

  return (
    <div className="cards-page">
      <h2>✨ Meet the Wizards ✨</h2>
      <CharacterGrid characters={characters} />
    </div>
  );
}

export default Cards;

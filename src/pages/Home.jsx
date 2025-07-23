import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bgVideo from "../assets/bg-video.mp4";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">⚡ Wizarding World</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/spells">Spells</Link></li>
          <li><Link to="/house">House</Link></li>
          <li><Link to="/watch">Watch</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="video-container">
        <video autoPlay muted loop className="bg-video">
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="overlay">
          <h1>⚡ Welcome to the Wizarding World</h1>
          <p>Explore Spells, Houses, Characters, and More</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

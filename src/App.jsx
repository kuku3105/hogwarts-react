import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Spells from "./pages/Spells";
import House from "./pages/House";
import Watch from "./pages/Watch";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/house" element={<House />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

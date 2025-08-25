// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css";
import Gallery from "./Gallery";
import Explore from "./Expore.jsx";
import About from "./About.jsx";
import ContactUs from "./contact.jsx";

// ✅ Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo"onClick={() => setIsOpen(false)}>🏛️ Virtual Museum</Link>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

// ✅ Home Page
function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Virtual Museum</h1>
        <p>Explore artworks and artifacts from around the world.</p>
        <Link to="/explore" className="btn">Start Exploring</Link>
      </div>
    </section>
  );
}



// ✅ Main App
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

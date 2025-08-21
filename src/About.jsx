import React, { useState, useEffect } from "react";
import "./About.css";

export default function About() {
  const sentences = [
    "Step into a realm where history and imagination intertwine.",
    "Ancient artifacts whisper the stories of forgotten civilizations.",
    "Digital installations bridge the past and future of human creativity.",
    "Rare manuscripts preserve the knowledge of ages gone by.",
    "Interactive exhibits invite you to touch, rotate, and explore.",
    "Our team of curators and historians craft every narrative with care.",
    "This museum exists in the liminal space between reality and wonder."
  ];

  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    {
      title: "Ancient Civilizations",
      description: "Explore artifacts from Mesopotamia, Egypt, Greece, and Rome, revealing the evolution of human society."
    },
    {
      title: "Mystic Artifacts",
      description: "Discover objects with spiritual, ceremonial, or mystical significance across cultures."
    },
    {
      title: "Rare Manuscripts",
      description: "Read preserved texts that shaped philosophy, science, and literature through centuries."
    },
    {
      title: "Modern Art",
      description: "Witness contemporary art from around the globe, from abstract to interactive digital pieces."
    },
    {
      title: "Digital Innovations",
      description: "Engage with digital installations, VR experiences, and AI-assisted creative works."
    },
    {
      title: "Interactive Mysteries",
      description: "Participate in exhibits that change based on your actions, merging learning with play."
    },
    {
      title: "Cultural Tapestries",
      description: "Discover textiles, musical instruments, and artifacts representing global cultural diversity."
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to the Virtual Museum</h1>
        <p className="animated-sentence">{sentences[currentSentence]}</p>
        <button className="reveal-button" onClick={() => setShowCategories(!showCategories)}>
          {showCategories ? "Hide Categories" : "Reveal Museum Treasures"}
        </button>

        {showCategories && (
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To preserve the essence of human creativity and history while providing an immersive experience that inspires imagination and curiosity.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Curators</h2>
        <p>
          Our team of historians, artists, and digital designers curate every exhibit to ensure that each visitor uncovers a story that resonates deeply.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Begin Your Journey</h2>
        <p>Click below to start exploring our galleries and uncover the hidden stories of the world.</p>
        <button onClick={() => window.location.href="/galleries"}>Explore Now</button>
      </section>
    </div>
  );
}

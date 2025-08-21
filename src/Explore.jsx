
import React from "react";
import { motion } from "framer-motion";


const Explore = () => {
  return (
    <div className="explore-container">
      
      <section className="explore-hero">
        <motion.h1
          className="explore-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock the <span className="highlight">Secrets</span> Behind Every Masterpiece
        </motion.h1>
        <motion.p
          className="explore-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Step closer, notice the hidden brushstrokes, and uncover the whispers of history.
        </motion.p>
        <motion.button
          className="explore-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Exploring
        </motion.button>
      </section>

      {/* Featured Collections */}
      <section className="collections">
        <h2 className="section-heading">✨ Featured Collections</h2>
        <div className="collection-grid">
          {[
            { title: "Art Through the Ages", img: "https://picsum.photos/300/200?random=1" },
            { title: "Masterpieces & Hidden Stories", img: "https://picsum.photos/300/200?random=2" },
            { title: "Nature & Cultural Spaces", img: "https://picsum.photos/300/200?random=3" },
            { title: "Ancient Civilizations", img: "https://picsum.photos/300/200?random=4" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="collection-card"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Click to uncover fascinating stories hidden within.</p>
              <button className="card-btn">Explore More</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spotlight of the Week */}
      <section className="spotlight">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🌟 Curator’s Pick of the Week
        </motion.h2>
        <div className="spotlight-box">
          <img src="https://picsum.photos/500/300?random=5" alt="Spotlight Art" />
          <div className="spotlight-info">
            <h3>"The Forgotten Canvas"</h3>
            <p>
              Once lost for centuries, this painting resurfaces to tell the untold 
              story of resilience, faith, and artistry. Notice the fading hues—
              each stroke is a whisper from the past.
            </p>
            <button className="spotlight-btn">Discover More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;

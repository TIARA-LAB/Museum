import React, { useState, useEffect } from "react";

const categories = [
  { name: "Artworks" },
  { name: "Paintings" },
  { name: "Natural Spaces" },
  { name: "Sculptures" },
  { name: "Photography" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${Math.floor(
            Math.random() * 10
          ) + 1}&limit=30`
        );
        const data = await response.json();
        setImages(data || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [activeCategory]);

  
  const filteredImages = images.filter((img) =>
    img.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gallery-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat.name}
              className={activeCategory === cat.name ? "active" : ""}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      
      <main className="gallery">
        <h2>{activeCategory}</h2>

        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        
        <div className="image-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((img) => (
              <div key={img.id} className="image-card">
                <img src={img.download_url} alt={img.author} />
                <p>{img.author}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Gallery;

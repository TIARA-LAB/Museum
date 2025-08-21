import React, { useEffect, useState } from "react";
import axios from "axios";

function MuseumGallery() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchArtworks = async () => {
      try {
        const { data } = await axios.get(
          "https://collectionapi.metmuseum.org/public/collection/v1/search?q=painting"
        );
        const ids = data.objectIDs.slice(0, 10);
        const artworkPromises = ids.map((id) =>
          axios.get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
        );

        const results = await Promise.all(artworkPromises);
        setArtworks(results.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) return <h2>Loading artworks...</h2>;

  return (
    <div className="gallery">
      <h1>Museum Gallery</h1>
      <div className="art-grid">
        {artworks.map((art) => (
          <div key={art.objectID} className="art-card">
            {art.primaryImageSmall ? (
              <img src={art.primaryImageSmall} alt={art.title} />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <h3>{art.title}</h3>
            <p>{art.artistDisplayName || "Unknown Artist"}</p>
            <p>{art.objectDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MuseumGallery;

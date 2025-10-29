import React, { useState } from "react";
import "./Explore.css";

export default function Explore() {
  const [data, setData] = useState([]);
  const [activeMuseum, setActiveMuseum] = useState(null);
  const [loading, setLoading] = useState(false);

  // API Endpoints for museums
  const museumAPIs = {
    rijksmuseum: "https://www.rijksmuseum.nl/api/en/collection?key=0fiuZFh4&format=json",
    cleveland: "https://openaccess-api.clevelandart.org/api/artworks/",
    smithsonian: "https://api.si.edu/openaccess/api/v1.0/search?q=art&api_key=DEMO_KEY",
    chicago: "https://api.artic.edu/api/v1/artworks",
    harvard: "https://api.harvardartmuseums.org/object?apikey=cc9d5369-8da2-44ce-b2e8-3790b275e9c0",
    vangogh: "https://api.vangoghmuseum.nl/v1/collection?key=YOUR_API_KEY",
    louvre: "https://api-louvre.vercel.app/artworks",
  };

  const fetchMuseumData = async (museum) => {
    setActiveMuseum(museum);
    setLoading(true);
    setData([]);

    try {
      const response = await fetch(museumAPIs[museum]);
      const result = await response.json();

      let artworks = [];

      switch (museum) {
        case "rijksmuseum":
          artworks = result.artObjects.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.webImage?.url,
            artist: item.principalOrFirstMaker,
          }));
          break;

        case "cleveland":
          artworks = result.data.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.images?.web?.url,
            artist: item.creators?.[0]?.description,
          }));
          break;

        case "smithsonian":
          artworks = result.response.rows.map((item, index) => ({
            id: index,
            title: item.title,
            image: item.content?.descriptiveNonRepeating?.online_media?.media?.[0]?.content,
            artist: item.content?.freetext?.name?.[0]?.content,
          }));
          break;

        case "chicago":
          artworks = result.data.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.image_id
              ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
              : null,
            artist: item.artist_title,
          }));
          break;

        case "harvard":
          artworks = result.records.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.primaryimageurl,
            artist: item.people?.[0]?.name,
          }));
          break;

        case "vangogh":
          artworks = result.data.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.image?.url,
            artist: item.artist,
          }));
          break;

        case "louvre":
          artworks = result.map((item, index) => ({
            id: index,
            title: item.title,
            image: item.image,
            artist: item.artist,
          }));
          break;

        default:
          artworks = [];
      }

      setData(artworks.slice(0, 12)); // show first 12 artworks
    } catch (error) {
      console.error("Error fetching museum data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="explore-container">
      <div className="explore-header">
        <h1>Explore the World of Art</h1>
        <p>
          Dive into collections from the greatest museums around the globe.
          Choose a museum below and discover masterpieces!
        </p>
      </div>

      {/* Category Buttons */}
      <div className="explore-grid">
        {Object.keys(museumAPIs).map((museum) => (
          <div key={museum} className="explore-card">
            <h2>{museum.charAt(0).toUpperCase() + museum.slice(1)} Museum</h2>
            <p>
              Unlock treasures from the {museum} collection. Click below to
              explore curated masterpieces.
            </p>
            <button
              className="explore-btn"
              onClick={() => fetchMuseumData(museum)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Loading */}
      {loading && <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>}

      {/* Results */}
      {activeMuseum && !loading && data.length > 0 && (
        <div className="explore-results">
          <h2 style={{ textAlign: "center", margin: "2rem 0", color: "#ffd700" }}>
            {activeMuseum.charAt(0).toUpperCase() + activeMuseum.slice(1)} Collection
          </h2>
          <div className="explore-grid">
            {data.map((art) => (
              <div key={art.id} className="explore-card">
                {art.image && (
                  <img
                    src={art.image}
                    alt={art.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "1rem",
                    }}
                  />
                )}
                <h3>{art.title}</h3>
                <p>{art.artist || "Unknown Artist"}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

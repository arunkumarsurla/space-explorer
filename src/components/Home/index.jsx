import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="home-section">
      <h1>Discover NASA’s Imagery and Data</h1>
      <p>
        An open-source project powered by REST APIs from{" "}
        <span>
          <a
            href="https://api.nasa.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            api.nasa.gov
          </a>
        </span>
      </p>

      <div>
        <button className="explore-button">Start Exploring</button>
      </div>
    </div>
  );
};

export default Home;

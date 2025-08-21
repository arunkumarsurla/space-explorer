import React from "react";
import "./index.css"
import { Link } from "react-router-dom";


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

      <div className="explore-button">
        <Link to="/library" className="link">Start Exploring</Link>
      </div>
    </div>
  );
};

export default Home;

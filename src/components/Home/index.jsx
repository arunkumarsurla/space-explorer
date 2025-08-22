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

     
        <Link to="/library" className="link explore-button">Start Exploring</Link>
      
    </div>
  );
};

export default Home;

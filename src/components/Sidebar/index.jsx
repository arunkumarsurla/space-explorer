import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="side-navbar">
      <h1 className="logo">Space Explorer</h1>

      <nav>
        <NavLink to="/" className="nav-link">
          <div className="nav-item">
            <i className="fa-solid fa-home"></i>
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink to="/about" className="nav-link">
          <div className="nav-item">
            <i className="fa-solid fa-info-circle"></i>
            <p>About</p>
          </div>
        </NavLink>

        <NavLink to="/apod" className="nav-link">
          <div className="nav-item">
            <i className="fa-solid fa-camera"></i>
            <p>Astronomy Picture of the Day</p>
          </div>
        </NavLink>

        <NavLink to="/library" className="nav-link">
          <div className="nav-item">
            <i className="fa-solid fa-image"></i>
            <p>Image Library</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

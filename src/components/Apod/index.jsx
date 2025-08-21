import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Apod = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
        const finalData = await response.json();
        setData(finalData);
      } catch (error) {
        console.error("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, apiKey]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (!data) {
    return <p className="loading">No data available</p>;
  }

  return (
    <div className="apod-section">
      <div className="apod-text">
        <p className="apod-date">Date: {data.date}</p>
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
      </div>

      <div className="image-con">
        <Link to={data.hdurl} target="_blank">
          <img className="image" src={data.url} alt={data.title} />
        </Link>
      </div>
    </div>
  );
};

export default Apod;

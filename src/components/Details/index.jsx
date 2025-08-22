import React, { useState, useEffect } from "react";
import "./index.css";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://images-api.nasa.gov/search?nasa_id=${id}`
        );
        const jsonData = await response.json();
        const item = jsonData.collection.items?.[0] || null;
        setDetails(item);
      } catch (error) {
        console.error("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id]);

  return (
    <div className="details-container">
      {loading ? (
        <div className="loader">
          <p>Loading...</p>
        </div>
      ) : details ? (
        <div className="details-content">
          <div className="details-text">
            <h2>{details.data?.[0]?.title}</h2>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(details.data[0].date_created).toLocaleDateString()}
            </p>
            <p>
              <strong>Keywords:</strong>{" "}
              {details.data?.[0]?.keywords?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>NASA ID:</strong> {details.data?.[0]?.nasa_id}
            </p>
            <p>
              <strong>Description:</strong> {details.data?.[0]?.description}
            </p>
            <p>
              <strong>Center:</strong> {details.data?.[0]?.center}
            </p>
          </div>

          {details.links?.[0]?.href && (
            <div className="details-image">
              <img
                src={details.links[0].href}
                alt={details.data?.[0]?.title || "NASA image"}
              />
            </div>
          )}
        </div>
      ) : (
        <p>No details found.</p>
      )}
    </div>
  );
};

export default Details;

import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";


const Library = () => {  
  const [data, setData] = useState([]);
  const localTerm = localStorage.getItem("searchItem") || "supernova"
  const [searchTerm, setSearchTerm] = useState(localTerm);
  const [query, setQuery] = useState(searchTerm);
  const [loading, setLoading] = useState(false);

  const API_URL = `https://images-api.nasa.gov/search?q=${query}`;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    localStorage.setItem("searchItem",e.target.value)
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setQuery(searchTerm.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setData(jsonData.collection.items || []);
      } catch (error) {
        console.log("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [API_URL]);

  return (
    <div className="main-section">
      <div className="search-section">
        <input
          className="searchbar"
          type="search"
          value={searchTerm}
          placeholder="Search e.g. space, supernova, moon, earth, planet, pluto"
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
        />
        <button onClick={handleSearch} className="searchbutton">
          Search
        </button>
      </div>

      <div className="data-container">
        <h1>Search Results</h1>

        {loading ? (
          <div className="loader">
            <p>Loading...</p>
          </div>
        ) : (
          <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.length > 0 ? (
              data.map((item, index) => (
                <Link to={`/details/${item.data[0].nasa_id}`}>
                <div key={index} className="card">
                  {item.links?.[0]?.href && (
                    <img
                      src={item.links[0].href}
                      alt={item.data?.[0]?.title || "NASA Image"}
                    />
                  )}
                  <h3>{item.data?.[0]?.title}</h3>
                </div>
                </Link>
              ))
            ) : (
              <p style={{color:"red"}}>We couldn’t find any results for that search.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;

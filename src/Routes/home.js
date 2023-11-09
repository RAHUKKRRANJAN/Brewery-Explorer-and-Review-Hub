import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

function BrewerySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name'); // Default to searching by name
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await axios.get(
          `https://api.openbrewerydb.org/breweries?by_${searchType}=${searchTerm}`
        );
        setBreweries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchTerm) {
      fetchBreweries();
    }
  }, [searchTerm, searchType]);

  const handleSearch = () => {
    setBreweries([]); 
  };

  return (
        <div className="container mt-5 custom-bg" >
      <h1 class="text-center font-weight-bold mb-4">Brewery Review System</h1>
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="form-group">
        <select
          className=""
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="city">City</option>
          <option value="type">Type</option>
        </select>
      </div>

      <div className="brewery-list">
        
        <br />
        <h2 className="text-warning">Brewery Directory</h2>
        {breweries.map((brewery) => (
          <div key={brewery.id} className="brewery-item card mb-3">
            <Link to={`/home/breweries/${brewery.id}`}>
              <h2 className="card-header">{brewery.name}</h2>
            </Link>
            <div className="card-body">
              <p className="card-text">{brewery.city}, {brewery.state}</p>
              <p className="card-text">Phone: {brewery.phone}</p>
              <p className="card-text">
                Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                  {brewery.website_url}
                </a>
              </p>
              <p className="card-text">Rating: {brewery.rating ? brewery.rating : 'Not available'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrewerySearch;
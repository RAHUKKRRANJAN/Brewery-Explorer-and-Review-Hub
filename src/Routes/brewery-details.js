import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

function BreweryDetails() {
  const [brewery, setBrewery] = useState({});
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then((response) => {
        setBrewery(response.data);
      })
      .catch((error) => {
        console.error('Error fetching brewery details:', error);
      });

    axios.get(`http://localhost:8080/home/breweries/${id}/review`)
      .then(response => {
        setReviews(response.data);
      }).catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [id]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center mt-5">
      <h2 className="text-dark text-bold">{brewery.name}</h2>
      <p className="mb-3">
        <strong className="text-primary">Address:-</strong> {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}
      </p>
      <p className="mb-3">
        <strong className="text-primary">Phone:-</strong> {brewery.phone}
      </p>
      <p className="mb-3">
        <strong className="text-danger">Website:-</strong> <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
      </p>
      <div>
        <h3 className="mt-4 text-dark font-italic">Reviews and Ratings:</h3>
        { reviews != null ?
          (reviews.map((review, index) => (
          <div key={index} className="card mb-3 bg-light">
            <div className="card-body">
              <p className="card-text"><strong className="text-primary">Rating:</strong> {review.rating}</p>
              <p className="card-text"><strong className="text-secondary">Review:</strong> {review.review}</p>
            </div>
          </div>
        ))):((<p> No review for this brewery</p>))}
      </div>
      <NavLink to={`/home/breweries/${id}/review`} className="btn btn-secondary mt-3">
        Add Review
      </NavLink>
    </div>
  );
}

export default BreweryDetails;

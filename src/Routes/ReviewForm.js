import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { id } = useParams();



  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/home/breweries/${id}/review`, { id, rating, review });
      console.log(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5 ">
      <h3 className="text-dark">Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating" className="text-secondary">Rating:</label>
          <select
            id="rating"
            className="form-control text-secondary"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="review" className="text-secondary">Description:</label>
          <textarea
            id="review"
            className="form-control text-muted"
            value={review}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary px-2 py-2  my-3 mx-3">
          Submit Review
        </button>

        <NavLink to={`/home/breweries/${id}`}>
        <button className="btn btn-primary">
          Go back
        </button>
        </NavLink>
      </form>
    </div>
  );
}

export default ReviewForm;

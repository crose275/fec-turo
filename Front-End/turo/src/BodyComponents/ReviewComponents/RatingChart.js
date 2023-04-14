import React from 'react';
import RatingBar from './RatingBar';
// import Reviews from './Reviews';
import ratings from './ratingData'

const Rating = () => {
  return (
    <div className="container" style={{width: "100%"}}>
      {ratings.map((rating) => (
        <div key={rating.id} className='d-flex flex-row justify-content-between' style={{border: "1px solid black"}}>
          <span>{rating.category}</span>
          <RatingBar rating={rating.rating} />
          <span>5.0</span>
        </div>
      ))}
    </div>
  );
};

export default Rating;
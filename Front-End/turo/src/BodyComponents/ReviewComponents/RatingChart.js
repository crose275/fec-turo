import React, { useEffect, useState } from 'react';
import RatingBar from './RatingBar';
// import Reviews from './Reviews';
import ratings from './ratingData'

export default function RatingChart({reviews}){
    const [cleanlinessAverage, setCleanlinessAverage] = useState(0)

    useEffect(() => {
      const sum = reviews.reduce((acc, review) => acc + review.review_rating_cleanliness, 0);
      const average = sum / reviews.length;
      setCleanlinessAverage(average);
    }, [reviews]);


     
  return (
    <div className="container" style={{width: "100%"}}>
      {console.log(cleanlinessAverage)}
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


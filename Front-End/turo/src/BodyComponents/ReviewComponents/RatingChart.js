import React, { useEffect, useState } from 'react';
import RatingBar from './RatingBar';


export default function RatingChart({reviews}){
    const [cleanlinessAverage, setCleanlinessAverage] = useState(0)
    const [maintenanceAverage, setMaintenanceAverage] = useState(0)
    const [communicationAverage, setCommunicationAverage] = useState(0)
    const [convenienceAverage, setConvenienceAverage] = useState(0)
    const [accuracyAverage, setAccuracyAverage] = useState(0)
    const [ratings, setRatings] = useState([])

    useEffect(() => {
      const sum1 = reviews.reduce((acc, review) => acc + review.review_rating_cleanliness, 0);
      const average1 = sum1 / reviews.length;
      const sum2 = reviews.reduce((acc, review) => acc + review.review_rating_maintenance, 0);
      const average2 = sum2 / reviews.length;
      const sum3 = reviews.reduce((acc, review) => acc + review.review_rating_communication, 0);
      const average3 = sum3 / reviews.length;
      const sum4 = reviews.reduce((acc, review) => acc + review.review_rating_convenience, 0);
      const average4 = sum4 / reviews.length;
      const sum5 = reviews.reduce((acc, review) => acc + review.review_rating_accuracy, 0);
      const average5 = sum5 / reviews.length;
      setCleanlinessAverage(average1);
      setMaintenanceAverage(average2);
      setCommunicationAverage(average3);
      setConvenienceAverage(average4);
      setAccuracyAverage(average5)
      setRatings([
        {
        id: 1,
        category: "Cleanliness",
        rating: average1
      }, 
      {
        id: 2,
        category: "Maintenance",
        rating: average2
      }, 
      {
        id: 3,
        category: "Communication",
        rating: average3
      }, 
      {
        id: 4,
        category: "Convenience",
        rating: average4
      }, 
      {
        id: 5,
        category: "Accuracy",
        rating: average5
      } 
    ])
    
    }, [reviews]);


     
  return (
    <div className="container" style={{width: "100%"}}>
      {console.log(ratings)}
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


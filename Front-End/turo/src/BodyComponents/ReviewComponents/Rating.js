import React, {useContext, useState, useEffect} from "react";
import { ReviewContext } from "../../context/ReviewsContext";

export default function Rating() {
    const reviews = useContext(ReviewContext);
    console.log(reviews)
    // const [overallRating, setOverallRating] = useState(null);
    // // const [ratings, setRatings] = useState(
    // //   reviews ?  : []
    // // );
  
    // useEffect(() => {
    //     if (reviews) {
    //         const ratings = () => reviews.map((review) => {
    //             review.rating;
    //          })  
    //       const sum = ratings.reduce((total, rating) => total + rating, 0);
    //       const average = sum / ratings.length;
    //       setOverallRating(average);
        

    //     } console.log(overallRating)
    //   }, [ratings, reviews]);
  
    return (
      <div>
        <div>
          <p className="overall-rating">{"5.0"}</p>
          <p className="rating-number">({reviews.length} ratings)</p>
        </div>
      </div>
    );
  }
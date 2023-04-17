import React, { useState, useEffect, useCallback, useContext } from "react";
import Rating from "./Rating";
import RatingChart from "./RatingChart"
import './Reviews.css'
import { ReviewContext, ReviewProvider } from "../../context/ReviewsContext";
import ReviewBody from "./ReviewBody";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Reviews() {
    const reviewsContext = useContext(ReviewContext);
    console.log("reviewsContext: " + reviewsContext)
    const reviews = reviewsContext.reviews
    const [overallRating, setOverallRating] = useState(0)

    useEffect(() => {
        console.log(reviews)
      if(reviews.length > 1)  {
        console.log(reviews)
      const reviewKeys = [
        'review_rating_cleanliness',
        'review_rating_maintainence',
        'review_rating_communication',
        'review_rating_convenience',
        'review_rating_accuracy'
      ]
  
      const ratingSum = reviews.reduce((acc, review) => {
        console.log("rating review: " + review)
        const reviewRatingSum = reviewKeys.reduce((sum, key) => {
          return sum + review[key]
        }, 0)
        console.log(reviewRatingSum)
        const reviewRatingAverage = reviewRatingSum / reviewKeys.length
        return acc + reviewRatingAverage
      }, 0)
      console.log()

      const newOverallRating = ratingSum / reviews.length
      setOverallRating(newOverallRating)
    }
    }, [reviews])
   


    

    return(
        
        <div className="reviews">
                <div className="d-flex justify-content-center" style={{width: 1423, border: "1px solid black"}}>
                    <div style={{width: 620, border: "1px solid black"}}>
                        <p className="align-" style={{height: '12px', fontSize: '12px', fontWeight: '900'}}>RATINGS AND REVIEWS</p>
                        <Rating  overallRating={overallRating}/>
                        <RatingChart reviews={reviews}/>
                        <p style={{fontSize: 12, color: '#767677'}}>Based on 35 guest ratings</p>
                        < ReviewBody className='justify-self-start' overallRating={overallRating}/>
                    </div> 
  
                </div>
            
        </div>  
    // a <p> with average of all ratings with a star icon to the right
    
    // a <p> with number of ratings in parentheses

    // a component for ratings

    // a component to generate reviews
        
    )

}
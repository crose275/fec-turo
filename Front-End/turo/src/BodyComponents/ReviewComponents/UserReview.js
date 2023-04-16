import React, { useContext } from 'react'
import {ReactComponent as Star} from './asset 60.svg'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ReviewContext } from '../../context/ReviewsContext'
import './UserReviews.css';

export default function UserReview() {
    const reviewsContext = useContext(ReviewContext);
    console.log('ReviewsContext', reviewsContext)
    const reviews = reviewsContext.reviews;
    console.log('Reviews', reviews)
    const review = reviews[0];
    console.log('Review', review)
    const rating = review.review_rating;
    console.log('Rating', rating)
    // creates an array of numbers with length of rating. 
    const ratingArray = Array.from({length: rating}, (v, i) => i);
    console.log(ratingArray)

    return (
        <div className='reviewContainer' style={{width: '100%', border: "1px solid black"}}>
            <div style={{borderRadius: '15984px', border: "1px solid black", height: '48px', width: '48px'}}></div>
            {/*renders star components based on the length of ratingArray*/} 
 
            <div className="stars" style={{marginLeft: '30px'}}> 
            {ratingArray.map((item, index) => (
                <div key = {index}>
                    <Star />
                </div>
                ))}  
            </div>
            <div className='reviewContent'>
                <p>{review.user_name} {review.review_date}</p>  
                <p>{review.review_message}</p>
            </div>  
             

            
        </div>
    )
}
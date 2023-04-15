import React, { useContext, useState } from 'react'
import {ReactComponent as Star} from './asset 60.svg'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ReviewContext } from '../../context/ReviewsContext'


export default function UserReview() {
    const reviews = useContext(ReviewContext)
    console.log(reviews)
    const review = useState(reviews[0])
    console.log(review)
    const rating = review.review_rating
    console.log(rating)
    // creates an array of numbers with length of rating. 
    const ratingArray = Array.from({length: rating}, (v, i) => i);
    console.log(ratingArray)

    return (
        <div className='d-flex align-content-center' style={{width: '100%', border: "1px solid black", borderBottom: '1px solid  #E7E7E8'}}>
            <div style={{borderRadius: '15984px', border: "1px solid black", height: '48px', width: '48px'}}></div>
            {/*renders star components based on the length of ratingArray*/} 
 
             <div style={{marginLeft: '10px'}}> 
            {ratingArray.map((item, index) => (
                <Star />
                ))}  
                <p>{review.user_name} {review.review_date}</p>  
                <p>{review.review_message}</p>
            </div>   
             

            
        </div>
    )
}
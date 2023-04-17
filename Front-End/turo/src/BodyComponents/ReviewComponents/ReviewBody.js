import React, {useContext, useEffect, useState} from 'react'
import { ReviewContext } from '../../context/ReviewsContext'
import  Button  from 'react-bootstrap/button'
import UserReview from './UserReview'

export default function ReviewBody() {
    const reviewsContext = useContext(ReviewContext);
    const reviews = reviewsContext.reviews;
    const [numToShow, setNumToShow] = useState(5);
    const [activeReviews, setActiveReviews] = useState([null]);

    
    useEffect(()=>{
        setActiveReviews(reviews.slice(0, numToShow))
    }, [reviews])

  
    


    const showMoreReviews = () => {
        const newNumToShow = numToShow + 5;
        setActiveReviews(reviews.slice(0, newNumToShow));
        setNumToShow(newNumToShow);
      };

    return (
        <div>
            {console.log(activeReviews)}
            <p style={{fontSize: '12px', fontWeight: 900, color: '#767677'}}>Reviews</p>
            {reviews.map((review)=>{  
            return <UserReview review={review}/>
        })}
            < Button variant='primary' onClick={showMoreReviews}>See more</Button>
        </div>
    )
}
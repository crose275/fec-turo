import React, {useContext, useEffect, useState} from 'react'
import { ReviewContext } from '../../context/ReviewsContext'
import  Button  from 'react-bootstrap/button'
import UserReview from './UserReview'

export default function ReviewBody() {
    const reviews = useContext(ReviewContext)
    console.log("reviews: "  + reviews)
    const [numToShow, setNumToShow] = useState(5);
    const [activeReviews, setActiveReviews] = useState([null]);
    let flag = false
    
    useEffect(()=>{
        setActiveReviews(reviews.slice(0, numToShow))
        console.log("active reviews: " + activeReviews)
    }, [reviews])

  
    


    const showMoreReviews = () => {
        const newNumToShow = numToShow + 5;
        setActiveReviews(reviews.slice(0, newNumToShow));
        setNumToShow(newNumToShow);
      };
    console.log(reviews)

    return (
        <div>
            {console.log(activeReviews)}
            <p style={{fontSize: '12px', fontWeight: 900, color: '#767677'}}>Reviews</p>
            {activeReviews.map((review)=>{  
               {console.log(review)} 
            return <UserReview review={review}/>
        })}
            < Button variant='primary' onClick={showMoreReviews}>See more</Button>
        </div>
    )
}
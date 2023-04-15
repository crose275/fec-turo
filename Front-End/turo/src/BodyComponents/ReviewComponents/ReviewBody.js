import React, {useContext, useState} from 'react'
import { ReviewContext } from '../../context/ReviewsContext'
import  Button  from 'react-bootstrap/button'
import UserReview from './UserReview'

export default function ReviewBody() {
    const reviews = useContext(ReviewContext)
    console.log(reviews)
    const [activeReviews, setActiveReviews] = useState(reviews.slice(0, 5));
    const [numToShow, setNumToShow] = useState(5);

    const showMoreReviews = () => {
        const newNumToShow = numToShow + 5;
        setActiveReviews(reviews.slice(0, newNumToShow));
        setNumToShow(newNumToShow);
      };
    console.log(reviews)

    return (
        <div>
            <p style={{fontSize: '12px', fontWeight: 900, color: '#767677'}}>Reviews</p>
            <UserReview />
            < Button variant='primary' />
        </div>
    )
}
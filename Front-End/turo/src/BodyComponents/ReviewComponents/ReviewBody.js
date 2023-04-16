import React, {useContext, useState} from 'react'
import { ReviewContext } from '../../context/ReviewsContext'
import UserReview from './UserReview'

export default function ReviewBody() {
    const reviews = useContext(ReviewContext)
    console.log(reviews)

    return (
        <div>
            <p style={{fontSize: '12px', fontWeight: 900, color: '#767677'}}>Reviews</p>
            <UserReview />
        </div>
    )
}
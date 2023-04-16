import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import RatingChart from "./RatingChart"
import './Reviews.css'
import { ReviewProvider } from "../../context/ReviewsContext";
import ReviewBody from "./ReviewBody";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Reviews() {



    return(
        
        <div className="reviews">
            <ReviewProvider> 
                <div className="d-flex justify-content-center" style={{width: 1423, border: "1px solid black"}}>
                    <div style={{width: 620, border: "1px solid black"}}>
                        <p className="align-" style={{height: '12px', fontSize: '12px', fontWeight: '900'}}>RATINGS AND REVIEWS</p>
                        <Rating />
                        <RatingChart/>
                        <p style={{fontSize: 12, color: '#767677'}}>Based on 35 guest ratings</p>
                        < ReviewBody className='justify-self-start'/>
                    </div> 
  
                </div>
            </ReviewProvider>  
        </div>  
    // a <p> with average of all ratings with a star icon to the right
    
    // a <p> with number of ratings in parentheses

    // a component for ratings

    // a component to generate reviews
        
    )

}
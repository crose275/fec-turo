import React, {useContext, useState, useEffect} from "react";
import { ReviewContext } from "../../context/ReviewsContext";
import { ReactComponent as Star }  from './asset 60.svg'
import 'bootstrap/dist/css/bootstrap.min.css'


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
        <div className=''>
            <div className="overall-rating d-flex flex-row justify-content-start">
                <p className="align-self-center">{"5.0"}</p>
                <Star className='mt-1' style={{color: '#593CFB'}}/>
            </div>  

        </div>
        <p className="rating-numberf">({reviews.length} ratings)</p>
      </div>
    );
  }
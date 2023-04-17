import React from "react";
import "../DivComponentsCss/TripWarning.css"

export default function TripWarning() {
    return(
        <div className="errorContainer">
            <div className="exclamationMark"> ! </div>
            <div className="errorMessage">
                This car has a minimum trip length requirement. Please extend your trip until 10:30 AM on April 24 to book this car.        
            </div>
        </div>
       
    )
}
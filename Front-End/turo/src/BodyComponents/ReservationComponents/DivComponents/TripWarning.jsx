import React, {useState} from "react";
import "../DivComponentsCss/TripWarning.css";
import { BsExclamationCircle } from "react-icons/bs";

export default function TripWarning({hours}) {
    const {display, setDisplay} = useState(false)
    console.log("Trip Warning Test:", hours)

    const message = () => {
        if(hours >=1){
            return ""
        }else{
            return "This car has a minimum trip length requirement. Please extend your trip until 10:30 AM on April 24 to book this car."
        }
    }
    
    const exclamationPoint = () => {
        if(hours >=1){
            return null
        }else{
            return (
                <div className="exclamationMark">
                    <BsExclamationCircle />
                </div>
            )
        }
    }
    return(
        <div className="errorContainer">
           {exclamationPoint()} 
            <div className="errorMessage">
                { message ()}        
            </div>
        </div>
       
    )
}
import React from 'react';
import './LocationsDisplay.css';

export default function LocationsDisplay() {

    const pickUpAtCarLocation = "Oakland, CA 94621";

    const pickUpLocations = [
        {
            name: "San Francisco International Airport",
            cost: 75 
        },

        {
            name: "Oakland International Airport",
            cost: 50 
        },
    ]

    const delivery = {range: 50, cost: 120};

  return (
    <div className='LocationsDisplayBox'>      
        <span className='LocationsHeader'> PICKUP AT CAR LOCATION</span>
      <div className='pickUpAtCarLocationContainer'>
        <span className='LocationsName'>{pickUpAtCarLocation}</span>
        <span className='LocationCost'> FREE </span>
      </div>
      <span className='LocationsHeader'>PICKUP LOCATIONS</span>
      <div className='pickUpLocationsList'>
        {pickUpLocations.map((location) =>{
            return(
                    <div className='pickUpLocationsContainer'>
                    <span className='LocationsName'>{location.name}</span>
                    <span className='LocationCost'> US${location.cost} </span>
                </div>
            )
        })}
      </div>
      <span className='LocationsHeader'>DELIVERED TO YOU</span>
        <div className='deliveryContainer'>
            <span className='LocationsName'>Up to {delivery.range} miles</span>
            <span className='LocationCost' >US${delivery.cost}</span>
        </div>
        <span>Free delivery to select locations for trips of 1 week or longer</span>
    </div>
  )
}

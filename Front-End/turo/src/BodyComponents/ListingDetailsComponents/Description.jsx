import React from 'react';
import './Description.css'

export default function Description({listingDetails}) {
  return (
    <div>
      <h2 className='listingDetailsHeader'> Description </h2>
      <div className='listingDetailsContent'>
        <span className='listingDetailsDescription'>{listingDetails.car_description}</span>
      </div>
    </div>
  )
}

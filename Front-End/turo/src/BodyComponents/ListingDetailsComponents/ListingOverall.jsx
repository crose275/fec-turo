import React from 'react';
import './ListingOverall.css'

export default function ListingOverall({ listingDetails }) {
  return (
    <div className='listingOverallName'>
      <h2 className='carListingTitle'> {listingDetails.car_year} {listingDetails.car_make} {listingDetails.car_model} </h2>
      <span className='carListingName'> {listingDetails.car_name} </span>
    </div>
  )
}

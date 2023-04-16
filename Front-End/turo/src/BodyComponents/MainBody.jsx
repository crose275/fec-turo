import React from 'react';
import ListingDetailsMain from './ListingDetailsComponents/ListingDetailsMain';
import Reservation from './ReservationComponents/ReservationComponent';
import './MainBody.css'
import Reviews from './ReviewComponents/ReviewMain';



export default function MainBody() {
  return (
    <div className='mainBody'>
      <ListingDetailsMain />
        <Reservation />
    </div>
  )
}

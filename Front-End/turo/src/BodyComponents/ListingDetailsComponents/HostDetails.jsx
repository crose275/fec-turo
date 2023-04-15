import React from 'react';

import './HostDetails.css'

export default function HostDetails({listingDetails}) {
  return (
    <div className='HostDetailsContainer'>
      <h2 className='listingDetailsHeader'> Hosted By </h2>
      <div className='HostOverallInfo'>
        <div className='HostIcon'>
          <div className='HostOverallRating'>
            <span> {listingDetails.host_rating}.0</span>
            <img className='hostStarImage' src='https://www.citypng.com/public/uploads/small/11659043898htxteiisprrvkwjwqymz58a1mvzyhy4902j07xqfse4qfktpc7kv6ecafckeyvup2gfgpiq9sievzm7dt3qacjs8q3ewunrmadj3.png'></img>
          </div>
        </div>
        <div className='HostStats'>
          <span className='hostName'>{listingDetails.host_name}</span>
          <span><img className='hostAll-StarBadge' src="https://www.svgrepo.com/show/1195/premium-badge.svg"></img>{listingDetails.host_badge}</span>
          <div className='HostTripsAndDate'>
            <span>{listingDetails.host_trips} trips </span>
            <span class="dot"></span>
            <span> Joined Apr 2020</span>
          </div>
            <span className='respondStatement'>Typically responds in 35 minutes</span>
        </div>
      </div>
      <div className='HostRatingBadge'>
        <img className='badgeIcon' src="NoPath"></img>
        <div className='DescriptionAndButton'>
        <span>  All-Star Hosts like Carima are the top-rated and most experienced hosts on Turo. </span>
          <span className='learnMoreButton'> Learn More </span>
        </div>
      </div>
      <div className='HostCertifications'>
        <img className='badgeIcon' src="NoPath"></img>
        <div className='DescriptionAndButton'>
        <span>  {listingDetails.host_training_description}. </span>
          <span className='learnMoreButton'> Learn More </span>
        </div>      
      </div>
    </div>
  )
}

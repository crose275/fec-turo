import React from 'react'

export default function FooterExploreList() {

  const ExploreOptions = ['Book a car', 'Weddings', 'Trust & Safety', 'Sustainability', 'FAQs', 'Get help'];

  return (
    <div>
      <h2 className='header'> Explore </h2>
      <div className='list'>
        {ExploreOptions.map(option => {
            return (<a key = {option} className='option'>{option}</a>)
          })}
      </div>  
    </div>
  )
}

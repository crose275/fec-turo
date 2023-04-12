import React from 'react'

export default function FooterLocationList() {

  const LocationOptions = ['USA(EN)', 'Austraile(EN)', 'Canada(EN)', 'Canada(FR)', 'UK(EN)'];

  return (
    <div>
      <h2 className='header'> Locations </h2>
      <div className='list'>
        {LocationOptions.map(option => {
            return (<a key = {option} className='option'>{option}</a>)
          })}
      </div>  
    </div>
  )
}

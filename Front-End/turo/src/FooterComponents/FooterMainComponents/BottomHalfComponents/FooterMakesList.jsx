import React from 'react'

export default function FooterMakesList() {
    
    const MakesOptions = ['Telsa', 'Lambourghini', 'Jeep', 'Rolls Royce', 'Mercedes-Benz', 'Ferrari', 'Porsche', 'BMW', 'Subaru', 'Maserati'];

    return (
      <div>
        <h2 className='header'> Makes </h2>
        <div className='list'>
          {MakesOptions.map(option => {
              return (<a key={option} className='option'>{option}</a>)
            })}
        </div>      
      </div>
    )
}

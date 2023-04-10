import React from 'react'

export default function FooterVehicleList() {
    const VehicleOptions = ['Trucks', 'Vans', 'Exotic & Luxury', 'Convertibles', 'Sport', 'Classics', 'Minivans', 'SUVs', 'Electric Vehicles', 'Cars'];

    return (
      <div>
        <h2 className='header'> Vehicle </h2>
        <div className='list'>
          {VehicleOptions.map(option => {
              return (<a className='option'>{option}</a>)
            })}
        </div>      
      </div>
    )
}

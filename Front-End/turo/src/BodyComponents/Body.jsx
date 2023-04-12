import React from 'react'
import'./Body.css'
import ImageSlider from './carImages/user1'
import { SliderData } from './carImages/sliderdata'
import MapContainer from './MapComponents/MapContainer'


export default function Body() {
  return (
    <div class='Body'>
      <ImageSlider slides={ SliderData } />
      <MapContainer zoomLevel={14}/>
    </div>
  )
}

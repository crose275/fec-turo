import React from 'react'
import'./Body.css'
import ImageSlider from './carImages/user1'
import { SliderData } from './carImages/sliderdata'
import Reviews from './ReviewComponents/ReviewMain'
import MapContainer from './MapComponents/MapContainer'


export default function Body() {
  return (
    <div class='Body'>
      <ImageSlider slides={ SliderData } />
      < Reviews />
      <MapContainer zoomLevel={14}/>
    </div> 
  )
}

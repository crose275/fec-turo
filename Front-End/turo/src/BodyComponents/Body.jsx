import React from 'react'
import'./Body.css'
import ImageSlider from './carImages/user1'
import { SliderData } from './carImages/sliderdata'


export default function Body() {
  return (
    <div class='Body'>
      <ImageSlider slides={ SliderData } />
    </div>
  )
}

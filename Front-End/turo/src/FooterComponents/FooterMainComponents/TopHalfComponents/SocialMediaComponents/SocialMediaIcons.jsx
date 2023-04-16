import React from 'react';
import './SocialMediaIcons.css'

export default function SocialMediaIcons() {

    const img1 ="https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png"
    const img2 ="https://cdn-icons-png.flaticon.com/512/0/654.png"
    const img3 = "https://assets.stickpng.com/thumbs/5ecec78673e4440004f09e77.png"
    const img4 = "https://www.kindpng.com/picc/m/21-210198_youtube-play-button-computer-icons-black-and-white.png"

  return (
    <div className='SocialMediaIconsContainer'>
      <img className='SocialMediaIcons' src={img1}></img>
      <img className='SocialMediaIcons' src={img2}></img>
      <img className='SocialMediaIcons' src={img3}></img>
      <img className='SocialMediaIcons' src={img4}></img>
      <div className='blogIconContainer'>
        <span className='blogIcon'> BLOG </span>
      </div>
    </div>
  )
}

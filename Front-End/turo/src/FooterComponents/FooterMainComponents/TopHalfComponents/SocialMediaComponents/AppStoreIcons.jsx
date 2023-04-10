import React from 'react';
import './AppStoreIcon.css'

export default function AppStoreIcons() {

    const img1 = "https://www.kindpng.com/picc/m/114-1144091_download-google-play-png-apple-app-store-icon.png";
    const img2 = "https://assets.stickpng.com/images/5a902dbf7f96951c82922875.png";


  return (
    <div className='AppIconsContainer'>
        <img className='AppleAppIcon' src={img1}></img>
        <img className='GoogleAppIcon' src={img2}></img>
    </div>
  )
}

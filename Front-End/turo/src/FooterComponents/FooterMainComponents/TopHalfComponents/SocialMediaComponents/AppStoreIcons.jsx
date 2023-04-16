import React from 'react';
import './AppStoreIcon.css'

export default function AppStoreIcons() {

    const img1 = "https://www.kindpng.com/picc/m/114-1144091_download-google-play-png-apple-app-store-icon.png";
    const img2 = "https://blog.abim.org/wp-content/uploads/2021/06/download-on-google-play-store-icon.png";


  return (
    <div className='AppIconsContainer'>
        <img className='AppleAppIcon' src={img1}></img>
        <img className='GoogleAppIcon' src={img2}></img>
    </div>
  )
}

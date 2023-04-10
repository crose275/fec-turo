import React from 'react';
import './FooterBottom.css'

export default function FooterBottom() {
    const FooterBottomOptions = ['Terms', 'Privacy', 'Sitemap', 'Cookie Preferences', 'Do not sell or share my personal information'];

    return (
      <div className='FooterBottomList'>
        <div><a>&#169;2023 Turo</a></div>
        <div className='clickableOptions'>
          {FooterBottomOptions.map(option => {
              return (<a className='clickableOption'>{option}</a>)
            })}
        </div>      
      </div>
    )
}

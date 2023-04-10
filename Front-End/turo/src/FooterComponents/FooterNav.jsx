import React from 'react';
import './FooterNav.css';

export default function FooterNav() {

  const footerNavOptions = ['Home', 'Rent SUVs', 'United States - Oakland, CA', 'Jeep', 'Jeep Wrangler 2015'];

  return (
    <div className='FooterNav'>
      {footerNavOptions.map(option => {
          return (<div className='FooterNavOptions'>
            <a className='FooterNavOption'> {option} </a> 
            <span> &rarr; </span>
            </div>
          )
      })}
    </div>
  )
}

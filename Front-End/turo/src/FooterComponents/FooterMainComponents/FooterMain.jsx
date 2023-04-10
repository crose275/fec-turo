import React from 'react';
import TopHalfFooter from './TopHalfComponents/TopHalfFooter';
import BottomHalfFooter from './BottomHalfComponents/BottomHalfFooter';
import './FooterMain.css'

export default function FooterMain() {
  return (
    <div className='FooterMain'>
      <TopHalfFooter />
      <BottomHalfFooter />
    </div>
  )
}

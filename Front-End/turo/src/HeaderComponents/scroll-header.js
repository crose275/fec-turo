import React from 'react';
import logo from './Uro-logo.png';
import './scroll-header.css'

function scrollHeader() {

  return (
    <header className="sticky-header">
      <div className="header__logo">
        <img src={logo} alt="Turo Logo" style={{width: '100px'}} />
      </div>
      
  <button className="header-button">
    <div className="header-tab">overview</div>
  </button>

  <button className="header-button">
    <div className="header-tab">features</div>
  </button>

  <button className="header-button">
    <div className="header-tab">reviews</div>
  </button>

  <button className="header-button">
    <div className="header-tab">location</div>
  </button>

    </header>
  );
} 

export default scrollHeader; 
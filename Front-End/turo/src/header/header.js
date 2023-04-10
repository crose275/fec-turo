import React from 'react';
import logo from './Uro-logo.png';
import {FaBars, FaSearch, } from "react-icons/fa"; //importing for the hamburger menu icon and spyglass icon
import { MdAccountCircle } from 'react-icons/md'; //import icon for the profile circle


function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Turo Logo" style={{width: '100px'}} />
      </div>
      <nav className="header__nav">
        <button>
          <FaBars size={20} />
          <MdAccountCircle size={20} />
        </button>
      </nav>
      {/* <div className="header__search">
      <FaSearch fill="red" />
      <input type="text" placeholder="City, airport, address or house" style={{ color: 'black', fontWeight: 'bold' }} />
      </div> */}
      <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="seo-pages-18ktzsc" role="img" version="1.1"><path d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="#121214"></path></svg>
    </header>
  );
}

export default Header;
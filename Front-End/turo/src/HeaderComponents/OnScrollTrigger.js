import React, { useState } from 'react';
import Header from './header';
import ScrollHeader from './scroll-header';
import ScrollHeaderPrice from './scroll-header-price';

const OnScrollTrigger = () => {
  const [headerIndex, setHeaderIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // divide the scroll position by 5 and take the floor to get the index of the current header
    const index = Math.floor(scrollPosition / 500);

    // set the index of the current header
    setHeaderIndex(index % 3);
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      {headerIndex === 0 && <Header />}
      {headerIndex === 1 && <ScrollHeader />}
      {headerIndex === 2 && <ScrollHeaderPrice />}
      <div style={{ height: '1000px' }}>Scroll down to trigger the header change</div>
    </div>
  );
}

export default OnScrollTrigger;
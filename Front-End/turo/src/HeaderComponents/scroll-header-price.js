import React from 'react';
import scrollHeader from './scroll-header';

function scrollHeaderPrice() {
    return (
      <div>
        {scrollHeader()}
        <button className="">
          <div>Continue</div>
        </button>
      </div>
    );
  }
  
  export default scrollHeaderPrice;
import React , {useContext, useState} from 'react';
import Tickets from './Tickets';
import TollsAndFastrak from './TollsAndFastrak';

import { FAQContext } from '../../../context/FAQContext';

import './FAQs.css'

export default function FAQs({listingDetails}) {
  
  const [fullFAQsState, toggleFullFAQsState ] = useState(false);

  const context = useContext(FAQContext);
  const FAQDetails = context;
  console.log(FAQDetails);

  function handleClick(){
    toggleFullFAQsState(!fullFAQsState);
  }  

  return (
    <>
      <div className={fullFAQsState ? 'FullFAQsContainer' : 'MinimizedFAQsContainer'}>
        <h2 className='listingDetailsHeader'> FAQs </h2>
        <TollsAndFastrak listingDetails={listingDetails}/>
        <Tickets listingDetails={listingDetails}/>
      </div>
      <span className='FAQsMoreButton' onClick={handleClick}>{fullFAQsState ? 'Less': 'More'}</span>
    </>
  )
}

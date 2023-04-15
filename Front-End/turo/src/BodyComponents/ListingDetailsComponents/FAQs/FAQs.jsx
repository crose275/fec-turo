import React , {useContext} from 'react';
import Tickets from './Tickets';
import TollsAndFastrak from './TollsAndFastrak';

import { FAQContext } from '../../../context/FAQContext';

export default function FAQs({listingDetails}) {

  const context = useContext(FAQContext);
  const FAQDetails = context;
  console.log(FAQDetails);

  return (
    <div>
      <h2 className='listingDetailsHeader'> FAQs </h2>
      <TollsAndFastrak listingDetails={listingDetails}/>
      <Tickets listingDetails={listingDetails}/>
    </div>
  )
}

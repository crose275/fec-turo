import React, {useContext} from 'react';
import ListingOverall from './ListingOverall';
import HostDetails from './HostDetails';
import Description from './Description'
import Features from './Features';
import Extras from './Extras';
import ParkingDetails from './ParkingDetails';
import Guidelines from './Guidelines';
import FAQs from './FAQs/FAQs';

import './ListingDetailsMain.css'

import { ListingDetailsContext } from '../../context/ListingDetailsContext';
import { ExtrasProvider } from '../../context/ExtrasContext';
import { FAQProvider } from '../../context/FAQContext';

export default function ListingDetailsMain() {

  const context = useContext(ListingDetailsContext);
  const listingDetails = context.listingDetailsInfo[0];
  console.log(listingDetails);

  return (
    <div className='ListingDetails'>
        <ListingOverall listingDetails={listingDetails}/>
        <HostDetails listingDetails={listingDetails}/>
        <Description listingDetails={listingDetails}/>
        <Features />
        <ExtrasProvider>
            <Extras />
        </ExtrasProvider>
        <ParkingDetails listingDetails={listingDetails}/>
        <Guidelines listingDetails={listingDetails}/>
        <FAQProvider />
          <FAQs listingDetails={listingDetails}/>
        <FAQProvider />
    </div>
  )
}

import React from 'react';
import Header from './HeaderComponents/header'; //change this back to '.HeaderComponenets/header' for the regular header when done working with scroll header!!!!!!!!!!!!!!!
import Footer from './FooterComponents/Footer';
import Body from './BodyComponents/Body';
import { LocationProvider } from './context/LocationContext';
import OnScrollTrigger from './HeaderComponents/OnScrollTrigger'

function App() {
  return (
    <div>
      <OnScrollTrigger />
      <Header />
      <LocationProvider>
        <Body />
      </LocationProvider>
      <Footer />
    </div>
  );
}

export default App;

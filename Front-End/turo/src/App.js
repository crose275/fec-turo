import React from 'react';
import Header from './HeaderComponents/scroll-header-price'; //change this back to '.HeaderComponenets/header' for the regular header when done working with scroll header!!!!!!!!!!!!!!!
import Footer from './FooterComponents/Footer';
import Body from './BodyComponents/Body';
import { LocationProvider } from './context/LocationContext';

function App() {
  return (
    <div>
      <Header />
      <LocationProvider>
        <Body />
      </LocationProvider>
      <Footer />
    </div>
  );
}

export default App;

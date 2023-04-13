import React from 'react';
import MyComponent from './header/header';
import Footer from './FooterComponents/Footer';
import Body from './BodyComponents/Body';
import { LocationProvider } from './context/LocationContext';

function App() {
  return (
    <div>
      <MyComponent />
      <LocationProvider>
        <Body />
      </LocationProvider>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import GoogleMapReact from 'google-map-react';
import Circle from 'google-map-react';
import LocationsDisplay from './LocationsDisplay';
import './MapContainer.css';

export default function Map({zoomLevel}) {

  let center = {
    lat: 37.712070,
    lng: -122.218385
  };

  return (
    <div className="map">
        <LocationsDisplay/>
        <div className="google-map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAf_3u5iBWiCgqsX5B2ue03Bu7UZxosVco", language: "en", region: "US" }}
        defaultCenter={center}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({map, maps}) =>
          new maps.Circle({
            strokeOpacity: 0,
            fillColor: '#0000FF',
            fillOpacity: 0.3,
            map,
            center: {lat: center.lat, lng: center.lng},
            radius: 250,
          })}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
}

import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationsPin from './LocationsPin';
import './MapContainer.css';
import LocationsDisplay from './LocationsDisplay';


export default function Map({zoomLevel}) {

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    center: {lat: 37.712070, lng: -122.218385}    
  }

  const points = [
    { id: 1, title: "Round Pond", lat: 37.712070, lng: -122.218385},
    { id: 2, title: "Round Pond", lat: 37.621177, lng: -122.378569},
    { id: 3, title: "Round Pond", lat: 37.712070, lng: -122.7}
  ];

  return (
    <div className="map">
        <LocationsDisplay/>
        <div className="google-map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAf_3u5iBWiCgqsX5B2ue03Bu7UZxosVco", language: "en", region: "US" }}
        defaultCenter={location.center}
        defaultZoom={zoomLevel}
        >
        {points.map(({ lat, lng, id }) => {
            console.log(lat);
            console.log(lng);
          return (
            <LocationsPin
                key={id}
                lat={lat}
                lng={lng}
                text={id}
            />
          );
        })}
        </GoogleMapReact>
      </div>
    </div>
  )
}

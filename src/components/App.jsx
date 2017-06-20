import React from 'react';

import GoogleMapComponent from './GoogleMapComponent';
import { googleMapsKey } from '../googleMapsKey';

const App = () => (
  <div>
    <h1>React Google Map Playground</h1>
    <GoogleMapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapsKey}`}
      loadingElement={<div>Loading...</div>}
      containerElement={
        <div style={{ height: '700px' }} />
      }
      mapElement={
        <div style={{ height: '700px' }} />
      }
      markers={[{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001
        },
        key: 'Taiwan',
        defaultAnimation: 2
      }]}
    />
  </div>
);

export default App;

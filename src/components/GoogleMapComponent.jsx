import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const AsyncGoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{  lat: 0.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {
        props.markers.map((marker, i) => (
          <Marker
            key={i}
            {...marker}
          />
        ))
      }
    </GoogleMap>
  ))
);

AsyncGoogleMapComponent.propTypes = {
  googleMapURL: PropTypes.string.isRequired,
  loadingElement: PropTypes.element.isRequired,
  containerElement: PropTypes.element.isRequired,
  mapElement: PropTypes.element.isRequired,
  markers: PropTypes.arrayOf(PropTypes.object)
};

export default AsyncGoogleMapComponent;

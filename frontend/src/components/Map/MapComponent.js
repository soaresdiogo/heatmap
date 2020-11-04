import React from 'react';
import { Map, HeatMap, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
  width: '100%',
  height: '100vh',
};

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const MapComponent = ({ data }) => {
  const center = { lat: -29.9370407, lng: -51.2012171 };

  return (
    <div className="map-container">
      <Map
        google={window.google}
        className="map"
        containerStyle={mapStyle}
        zoom={13}
        initialCenter={center}
      >
        <HeatMap positions={data} opacity={1} radius={20} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: `${apiKey}`,
  libraries: ['visualization'],
})(MapComponent);

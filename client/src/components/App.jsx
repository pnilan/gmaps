import React, {useState, useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { TOKEN } from '../config';

const App = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: TOKEN,
  });

  if (!isLoaded) { return (<>Hello mapped world</>); }
  return (
    <Map />
  );
};

const Map = () => {

  const center = useMemo(() => ({lat: 37.7751, lng: -122.4303}))

  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      <Marker position={center}/>
    </GoogleMap>
  );
};

export default App;
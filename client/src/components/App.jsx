import React, {useState} from 'react';
import { GoogleMap, useLoadScript, Loader } from '@react-google-maps/api';
import { TOKEN } from '../config';

const App = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: TOKEN,
  });

  if (!isLoaded) { return (<>Hello mapped world</>); }
  return (
    <>Hello mapped world</>
  );
};

export default App;
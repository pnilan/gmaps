import React, {useState, useEffect, useMemo, useRef} from 'react';
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

const pizzaPlaces = [
  {
    name: 'Square Pie Guys',
    rating: '★★★★',
    position: { lat: 37.77961316021584, lng: -122.41029496371291 }
  },
  {
    name: 'Gioia Pizzeria',
    rating: '★★★★',
    position: { lat: 37.77695212964493, lng: -122.42578142656572 }
  },
  {
    name: 'Golden Boy Pizza',
    rating: '★★★★★',
    position: { lat: 37.79974923902658, lng: -122.40808188870915 }
  },
  {
    name: 'Cellarmaker House of Pizza',
    rating: '★★★★',
    position: { lat: 37.74765792990376, lng: -122.41969753470227 }
  },
  {
    name: 'Tony\'s Pizza Napoletana',
    rating: '★★★★★',
    position: { lat: 37.80087556033843, lng: -122.40885090194317 }
  },
  {
    name: 'Pink Onion',
    rating: '★★★★★',
    position: { lat: 37.76883762189088, lng: -122.414853252762 }
  },
];

const Map = () => {
  const mapRef = useRef({});
  const [ pizzerias, setPizzerias] = useState([]);

  const center = useMemo(() => ({lat: 37.7751, lng: -122.4303}), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    mapId: 'b578ad6ff8b8b9d3'
  }), []);

  useEffect(() => {
    setPizzerias(pizzaPlaces);
  }, []);

  return (
    <div className="container">
      <div className="places-container">
        <h1>Places</h1>
        <ul>
          {pizzaPlaces.map((pizzeria, i) => {
            return (
              <div key={i} className="pizzeria-info">
                <li>
                  {pizzeria.name}
                </li>
                <li>
                  {pizzeria.rating}
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
      <div className="map">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          ref={mapRef}
        >
          {pizzaPlaces.map((pizzeria, i) => {
            return (
              <Marker key={i} position={pizzeria.position} icon="https://img.icons8.com/?size=50&id=120099&format=png">
              </Marker>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import mapData from './data.json';

const Map = () => {
  const [activeSchool, setActiveSchool] = useState(null);
  const position = [-18.924799, 30.185495];
  const mapConfig = {
    maxZoom: 18,
    id: "mapbox/light-v10",
    url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    accessToken: "pk.eyJ1Ijoiem9sdGFudGhlbWVzYmVyZyIsImEiOiJjazZqaWUwcWswYTBvM21td2Jmcm5mYmdyIn0.7_5YCbbOFRnvqZzCNDo9fw"
  };

  const markerIcon = L.icon({
    iconUrl: './marker.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer center={position} zoom={6} scrollWheelZoom={true} style={{marginTop:'2px'}}>
      <TileLayer {...mapConfig} />
      {mapData.map((data) => (
        <Marker
          key={data.population}
          position={[data.lat, data.lng]}
        //   icon={markerIcon}
          onClick={() => {
            setActiveSchool(data);
          }}
        />
      ))}

      {activeSchool && (
        <Popup
          position={[
            activeSchool.lat,
            activeSchool.lng
          ]}
          onClose={() => {
            setActiveSchool(null);
          }}
        >
          <div>
            <h2>{activeSchool.population}</h2>
            {/* Add more details or styling for your popup content */}
          </div>
        </Popup>
      )}
    </MapContainer>
  );
};

export default Map;

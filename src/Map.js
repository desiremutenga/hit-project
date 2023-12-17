import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import SummaryTotals from './components/summary';


const Map = ({xy,total}) => {
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
    <>
     <SummaryTotals total={total}/>
    <MapContainer center={position} zoom={6} scrollWheelZoom={true} className='map'>
      <TileLayer {...mapConfig} />
      {xy.map((data) => (
        <Marker
          key={data._id}
          position={[data.co_ordinates.coordinates[0],data.co_ordinates.coordinates[1]]}
        //   icon={markerIcon}
          onClick={() => {
            setActiveSchool(data);
          }}
        />
      ))}

    </MapContainer>
    </>
  );
};

export default Map;

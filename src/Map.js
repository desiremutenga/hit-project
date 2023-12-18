
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';

const Map = ({xy,total}) => {
  const[data, setData]=useState(null)
  const[type, setType] = useState(null)
  const position = [-18.924799, 30.185495];
  const mapConfig = {
    maxZoom: 18,
    id: "mapbox/light-v10",
    url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    accessToken: "pk.eyJ1Ijoiem9sdGFudGhlbWVzYmVyZyIsImEiOiJjazZqaWUwcWswYTBvM21td2Jmcm5mYmdyIn0.7_5YCbbOFRnvqZzCNDo9fw"
  };
useEffect(()=>{
    setData(total[0].map((data)=>(data.count))) 
    setType(total[0].map((type)=>type.schoolType))
},[])
let x1,y1,x2,x3,y2,y3;
data? x1= data[0]:console.log()
type? y1= type[0]:console.log()

data? x2= data[1]:console.log()
type? y2= type[1]:console.log()

data? x3= data[2]:console.log()
type? y3= type[2]:console.log()
  return (
    <>
       <div style={{display:'flex'}} className="totals">
            <div style={{padding:'5px'}}><h5>{y1}</h5><div className="tertiary-box"><h5 style={{marginLeft:'8px'}}>{x1}</h5></div></div>
            <div style={{padding:'5px'}}><h5>{y2}</h5><div className="secondary-box"><h5 style={{marginLeft:'8px'}}>{x2}</h5></div></div>
            <div style={{padding:'5px'}}><h5>{y3}</h5><div className="primary-box"><h5 style={{marginLeft:'8px'}}>{x3}</h5></div></div>
        </div>
    <MapContainer center={position} zoom={6} scrollWheelZoom={true} className='map'>
      <TileLayer {...mapConfig} />
      {xy.map((data) => (
        <Marker
          key={data._id}
          position={[data.co_ordinates.coordinates[0],data.co_ordinates.coordinates[1]]}
        />
      ))}

    </MapContainer>
    </>
  );
};

export default Map;

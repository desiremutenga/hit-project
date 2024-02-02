
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { Icon } from 'leaflet';
// import { CSSTransition } from 'react-transition-group';

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
},[total])
let x1,y1,x2,x3,y2,y3;
data? x1= data[0]:console.log()
type? y1= type[0]:console.log()
data? x2= data[1]:console.log()
type? y2= type[1]:console.log()
data? x3= data[2]:console.log()
type? y3= type[2]:console.log()
const primaryIcon = new Icon({
  iconUrl: require("./icons/marker3.png"),
  iconSize: [54, 70],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
  tooltipAnchor: [16, -28],
});

const secondaryIcon = new Icon({
  iconUrl: require("./icons/marker1.png"), 
  iconSize: [54, 70],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
  tooltipAnchor: [16, -28],
});

const universityIcon = new Icon({
  iconUrl: require("./icons/marker2.png"), 
  iconSize: [54, 70],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
  tooltipAnchor: [16, -28],
});
  return (
    <>
       <div style={{display:'flex'}} className="totals">
            <div style={{padding:'5px'}}><h5 style={{color:"black"}}>{y1}</h5><div className="tertiary-box"><h5 style={{marginLeft:'8px'}}>{x1}</h5></div></div>
            <div style={{padding:'5px'}}><h5 style={{color:"black"}}>{y2}</h5><div className="secondary-box"><h5 style={{marginLeft:'8px'}}>{x2}</h5></div></div>
            <div style={{padding:'5px'}}><h5 style={{color:"black"}}>{y3}</h5><div className="primary-box"><h5 style={{marginLeft:'8px'}}>{x3}</h5></div></div>
        </div>
    <MapContainer center={position} zoom={6} scrollWheelZoom={true} className='map'>
      <TileLayer {...mapConfig} />
      {xy.length === 0
        ?xy.map((data) => (
          // <CSSTransition key={data._id} in={true} timeout={300} classNames="marker-transition"></CSSTransition>
          <Marker
            key={data._id}
            position={[data.co_ordinates.coordinates[0],data.co_ordinates.coordinates[1]]} 
            icon={
              data.schoolType === 'Primary'
                ? primaryIcon
                : data.schoolType === 'Secondary'
                ? secondaryIcon
                : universityIcon
              
            }
          >
            <Popup>
              <b style={{backgroundColor:'black'}}>{data.schoolName}</b>
              {/* <b>Address....</b>
              <b>Rating....</b>
              <b>Telephone....</b>
              <b>Total Students</b> */}
            </Popup>
          </Marker>
          // </CSSTransition>
        ))
        :xy.map((data) => (
          <Marker
            key={data._id}
            position={[data.co_ordinates.coordinates[0],data.co_ordinates.coordinates[1]]} 
            icon={
              data.schoolType === 'Primary'
                ? primaryIcon
                : data.schoolType === 'Secondary'
                ? secondaryIcon
                : universityIcon
              
            } 
          >
            <Popup>
              <b>{data.schoolName}</b>
              {/* <b>Address....</b>
              <b>Rating....</b>
              <b>Telephone....</b>
              <b>Total Students</b> */}
            </Popup>
          </Marker>
        ))
        
      }

    </MapContainer>
    </>
  );
};

export default Map;

import React, { useEffect, useState } from 'react';
import Map from '../Map';
import MapSearch from './mapSearch';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const[total,setTotal]= useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    // Fetch all schools when component initially renders (no province selected)
    fetch(`http://localhost:8080/eis/schoolCoordinates`)
      .then((res) => res.json())
      .then((data) => {
        setCoordinates(data.map((xy) => xy));
      });
  }, []);
  useEffect(() => {
    // Fetch schools based on selected province
    if (selectedValue) {
      fetch(`http://localhost:8080/eis/mappedSchoolsInProvince?province=${selectedValue}`)
        .then((res) => res.json())
        .then((data) => {
          setCoordinates(data.map((xy) => xy));
        });
    }
  }, [selectedValue]);
  // fetch the total number of primaries,secondaries and universities
  useEffect(()=>{
    fetch('http://localhost:8080/eis/total')
    .then((res)=> res.json()).then((data)=>{
       setTotal(data)
    })
  },[])
  console.log(total)
  return (
    <div>
        <div>
            <select value={selectedValue} onChange={handleChange} className='province-select'>
            <option value="" disabled hidden>Province</option>
              <option value="Harare">Harare</option>
              <option value="Bulawayo">Bulawayo</option>
              <option value="Mashonaland Central">Mash Central</option>
              <option value="Mashonaland East">Mash East</option>
              <option value="Mashonaland West">Mash West</option>
              <option value="Manicaland">Manicaland</option>
              <option value="Masvingo">Masvingo</option>
              <option value="Matabeleland North">Matabeleland North</option>
              <option value="Matabeleland South">Matabeleland South</option>
              <option value="Midlands">Midlands</option>
            </select>
            <MapSearch/>

        </div>
      {coordinates && <Map xy={coordinates} total={[total]}></Map>}
    </div>
  );
};

export default Dropdown;

import React, { useEffect, useState } from 'react';
import Dropdown from './dropdown';

const MapSearch = () => {
  const [searchSchool, setSearchSchool] = useState('');
  const[coordinates,setCoordinates] = useState([]);

  const handleSearchChange = (event) => {
    setSearchSchool(event.target.value);
  };
  useEffect(()=>{
    fetch(`http://localhost:8080/eis/searchedRegexSchools?schoolName=${searchSchool}`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setCoordinates(data.map((data)=>(data.co_ordinates.coordinates)))
    })
  },[searchSchool])
  return (
<>
<input
      type="text"
      placeholder='Search'
      value={searchSchool}
      onChange={handleSearchChange}
      className='map-search'
    />
    <Dropdown lat_long={coordinates}></Dropdown>
</>
  );
};

export default MapSearch;
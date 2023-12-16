import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Map from '../Map';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [coordinates, setCoordinates] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    // Fetch all schools when component mounts (no province selected)
    fetch(`http://localhost:8080/eis/schoolCoordinates`)
      .then((res) => res.json())
      .then((data) => {
        setCoordinates(data.map((xy) => xy));
      });
  }, []); // Empty dependency array to run only once on mount

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

  return (
    <>
      <FormControl fullWidth style={{ width: '143px', marginTop: '1px' }}>
        <InputLabel id="dropdown-label">Province</InputLabel>
        <Select labelId="dropdown-label" id="dropdown" value={selectedValue} onChange={handleChange}>
          <MenuItem value="">All Schools</MenuItem>
          <MenuItem value="Harare">Harare</MenuItem>
          <MenuItem value="Bulawayo">Bulawayo</MenuItem>
          <MenuItem value="Mashonaland Central">Mash Central</MenuItem>
          <MenuItem value="Mashonaland East">Mash East</MenuItem>
          <MenuItem value="Mashonaland West">Mash West</MenuItem>
          <MenuItem value="Manicaland">Manicaland</MenuItem>
          <MenuItem value="Masvingo">Masvingo</MenuItem>
          <MenuItem value="Matabeleland North">Matabeleland North</MenuItem>
          <MenuItem value="Matabeleland South">Matabeleland South</MenuItem>
          <MenuItem value="Midlands">Midlands</MenuItem>
        </Select>
      </FormControl>
      {coordinates && <Map xy={coordinates}></Map>}
    </>
  );
};

export default Dropdown;

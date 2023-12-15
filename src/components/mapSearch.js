import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const MapSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      }}
      style={{justifyContent:'flex-end',width:'150px',marginLeft:'652px'}}
    />
  );
};

export default MapSearch;
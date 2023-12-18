import React, { useState } from 'react';

const MapSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder='Search'
      value={searchTerm}
      onChange={handleSearchChange}
      className='map-search'
    />
  );
};

export default MapSearch;
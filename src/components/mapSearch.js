import React, { useState } from 'react';

const MapSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
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
import React from 'react';

function Input({ city, setCity }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };
  return (
    <input 
      type="search"
      placeholder="Search City..."
      onChange={handleChange}
      value={city}
    />
  );
}

export default Input 
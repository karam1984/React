  
import React from 'react';
import Button from './Button';
import Input from './Input';


export default function Form({ city, setCity, onSubmit }) {
  return (
    <form>
      <Input city={city} setCity={setCity} />
      <Button onSubmit={onSubmit} />
    </form>
  );
} 
import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';
function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [Error, setError] = useState(false);

  async function getDog() {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      // console.log(data)
      setDogPhotos([...dogPhotos, data.message]);
      
    } catch (err) {
      setError(true);
    }
  }
  return (
    <>
      <Button onClick={getDog} text='Get a dog!' />
       {Error && <p>Error</p>}
       {!Error && dogPhotos.map((dogImag) => <DogPhoto Src={dogImag} />)} 
       { dogPhotos.length==0  && <p>Get your first dog by clicking the button!</p>}
    </>
  );
}
export default DogGallery;
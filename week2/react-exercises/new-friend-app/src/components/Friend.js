import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

function Friend() {
    
  const [friend, setFriend] = useState({
   
    name: '',
    picture:'',
    location: { street: '', postcode: '', country: '' },
    email: '',
  });

  const [Error, setError] = useState(false);
  
  async function friendData() {
    try {
      const res = await fetch('https://www.randomuser.me/api?results=1');
      const data = await res.json();
      const [item] = data.results;
      console.log(item)
      setFriend(item);
    } catch (err) {
      setError(true); 
    }
  }
  return (
    <div>
      <Button
        onClick={() => {
            friendData();
        }}
        clickText='Get Frind!'
      />
      { Error && <p>Error</p>}
      { !Error && <FriendProfile {...friend} />}  
    </div>
  );
}
export default Friend
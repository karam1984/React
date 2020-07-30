import React from 'react';

export default function FriendProfile({ name,picture,location,email,phone }) {
  return (
    <ul>
      <li> First name : <em>{name.first}</em></li>
      <li> Last Name : <em>{name.last}</em></li>
      <img src={picture.large} />        
      <li>
        Address : <em>{location.street.name}, {location.postcode}, {location.city}</em>
      </li>
      <li> Email : <em>{email}</em></li>
    </ul>
  );
}
import React from 'react';

function Button({ onClick, clickText }) {
  return <button onClick={onClick}> {clickText} </button>;
}

export default Button;
import React from 'react';

function Button({ onSubmit }) {
  return (
    <button className="btn" onClick={onSubmit} type="submit">
      Search
    </button>
  );
}

export default Button 
import React from 'react';

import './style.css';

const Add = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='buttonAdd'>
      {children}
    </button>
  );
};

export default Add;

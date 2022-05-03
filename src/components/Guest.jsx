import React from 'react';
import { CgClose } from "react-icons/cg";
import './Guest.css';

const Guest = ({ guest, handleguestDeletion }) => {
  return (
    <div
      className='guest-container'
    >
      <div className='content-item'>
        <strong className='guest-title'>
          {guest.title}
        </strong>
        <hr />
        <div className='guest-title'>
          {guest.description}
        </div>
      </div>
      
      <div className='buttons-container'>
        <button
          className='remove-guest-button'
          onClick={() => handleguestDeletion(guest.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Guest;

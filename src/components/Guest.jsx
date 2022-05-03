import React from 'react';
import { CgClose } from "react-icons/cg";
import './Guest.css';

const Guest = ({ guest, handleguestClick, handleguestDeletion }) => {
  return (
    <div
      className='guest-container'
      style={guest.confirmed ? { borderLeft: '12px solid #71aacf' } : {}}
    >
      <div className='guest-title' onClick={() => handleguestClick(guest.id)}>
        {guest.title}
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

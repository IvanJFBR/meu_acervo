import React, { useState } from 'react';
import Button from './Button';
import './AddGuest.css';

const AddGuest = ({ handleguestAddition, changeScreen }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddguestClick = () => {
    handleguestAddition(inputData);
    changeScreen();
    setInputData("");
  };

  return (
    <div className='add-guest-container'>
      <input
        onChange={handleInputChange}
        value={inputData}
        className='add-guest-input'
        type='text'
      />
      <div className='add-guest-button-container'>
        <Button onClick={handleAddguestClick}>Confirmar</Button>
      </div>
    </div>
  );
};

export default AddGuest;

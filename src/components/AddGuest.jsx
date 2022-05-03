import React, { useState } from 'react';
import Button from './Button';
import './AddGuest.css';

const AddGuest = ({ handleAddMovie, changeScreen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateMovie = (e) => {
    e.preventDefault()
    handleAddMovie({
      title, 
      description
    });
    changeScreen();

    setTitle("");
    setDescription("");
  };

  return (
    <div className='add-guest-container'>
      <form onSubmit={handleCreateMovie}>
        <div className='field-wrapper'>
          <label>Title</label>
          <input
            onChange={handleTitle}
            value={title}
            className='add-guest-input'
            type='text'
            required
          />
        </div>
        <div className='field-wrapper'>
          <label>Description</label>
          <input
            onChange={handleDescription}
            value={description}
            className='add-guest-input'
            type='text'
          />
        </div>
        <div className='add-guest-button-container'>
          <Button type="submit">Confirmar</Button>
        </div>
      </form>
    </div>
  );
};

export default AddGuest;

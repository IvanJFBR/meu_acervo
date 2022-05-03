import React, { useState } from 'react';
import Button from '../Button';
import './style.css';

const CreateMovie = ({ handleAddMovie, onChangeScreen }) => {
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
    onChangeScreen("list");

    setTitle("");
    setDescription("");
  };

  const handleCancel = () => {
    onChangeScreen("list");

    setTitle("");
    setDescription("");
  }

  return (
    <div className='add-movie-container'>
      <form onSubmit={handleCreateMovie}>
        <div className='field-wrapper'>
          <label>Título</label>
          <input
            onChange={handleTitle}
            value={title}
            className='add-movie-input'
            type='text'
            required
          />
        </div>
        <div className='field-wrapper'>
          <label>Descrição</label>
          <input
            onChange={handleDescription}
            value={description}
            className='add-movie-input'
            type='text'
          />
        </div>
        <div className='add-movie-button-container'>
          <Button type="button" onClick={handleCancel}>Cancelar</Button>
          <Button type="submit">Confirmar</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateMovie;

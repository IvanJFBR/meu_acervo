import React from 'react';
import { CgTrash } from "react-icons/cg";
import './style.css';

const Movie = ({ movie, onDelete }) => {
  return (
    <div
      className='movie-container'
    >
      <div className='content-item'>
        <strong className='movie-title'>
          {movie.title}
        </strong>
        {movie.description && (
          <>
            <hr />
            <div className='movie-title'>
              {movie.description}
            </div>
          </>
        )}
      </div>
      
      <div className='buttons-container'>
        <button
          className='remove-movie-button'
          onClick={() => onDelete(movie.id)}
        >
          <CgTrash />
        </button>
      </div>
    </div>
  );
};

export default Movie;

import React from 'react';

import Movie from '../Movie';

const MovieList = ({ movies, onDelete }) => {
  return (
    <>
      {movies?.map((movie) => (
        <Movie
          key={movie?.id}
          movie={movie}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default MovieList;

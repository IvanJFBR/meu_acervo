import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import MovieList from './components/MovieList';
import CreateMovie from './components/CreateMovie';
import Add from './components/Add';

import './App.css';

const App = () => {
	const [movies, setMovies] = useState(
		JSON.parse(localStorage.getItem('movies')) ||
			localStorage.setItem('movies', JSON.stringify([]))
	);


	const [screenAdd, setScreenAdd] = useState(false);

	function changeScreen() {
		setScreenAdd(!screenAdd);
	}

	const handleAddMovie = movie => {
		const newMovies = [
			...movies,
			{
				...movie,
				id: uuidv4()
			}
		];
		setMovies(newMovies);
		saveMovies(newMovies);
	};

	const handleDelete = movieId => {
		const newMovies = movies?.filter(movie => movie.id !== movieId);

		setMovies(newMovies);
		saveMovies(newMovies);
	};

	const saveMovies = newMovies => {
		localStorage.setItem('movies', JSON.stringify(newMovies));
	};

	return (
		<>
			<Header/>
			<div className="container">

				
				{screenAdd && (
					<CreateMovie
						handleAddMovie={handleAddMovie}
						changeScreen={changeScreen}
					/>
				)}

				{!screenAdd && (
					<>
						<Add onClick={changeScreen}>Adicionar</Add>
						<MovieList
							movies={movies}
							onDelete={handleDelete}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default App;

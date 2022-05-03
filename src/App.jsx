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


	const [currentScreen, setCurrentScreen] = useState("list");

	function handleChangeScreen(screenName) {
		setCurrentScreen(screenName);
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
				{currentScreen === "create-movie" && (
					<CreateMovie
						handleAddMovie={handleAddMovie}
						onChangeScreen={handleChangeScreen}
					/>
				)}
				{currentScreen === "list" && (
					<>
						<MovieList
							movies={movies}
							onDelete={handleDelete}
						/>
						<Add onClick={() => handleChangeScreen("create-movie")}>Adicionar</Add>
					</>
				)}
			</div>
		</>
	);
};

export default App;

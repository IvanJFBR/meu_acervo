import React, { useState } from 'react';
import Teste from './components/Teste';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Guests from './components/Guests';
import AddGuest from './components/AddGuest';
import Add from './components/Add';

import './App.css';

const App = () => {
	const [guests, setGuests] = useState(
		JSON.parse(localStorage.getItem('guests')) ||
			localStorage.setItem('guests', JSON.stringify([]))
	);


	const [screenAdd, setScreenAdd] = useState(false);

	function changeScreen() {
		setScreenAdd(!screenAdd);
	}

	const handleAddMovie = movie => {
		const newGuests = [
			...guests,
			{
				...movie,
				id: uuidv4()
			}
		];
		setGuests(newGuests);
		SaveGuests(newGuests);
	};

	const handleguestDeletion = guestId => {
		const newGuests = guests?.filter(guest => guest.id !== guestId);

		setGuests(newGuests);
		SaveGuests(newGuests);
	};

	//filtro para o contador de presentes
	function guestsFiltered() {
		let filter = guests?.filter(guest => guest.confirmed === true);
		return filter?.length;
	}

	const SaveGuests = newguests => {
		localStorage.setItem('guests', JSON.stringify(newguests));
	};

	return (
		<div className="container">
			<Header
				numberConfirmed={guestsFiltered()}
				numberGuests={guests?.length}
			/>

			<Add onClick={changeScreen}>{screenAdd ? 'Cancelar' : 'Adicionar'}</Add>
			{screenAdd && (
				<AddGuest
					handleAddMovie={handleAddMovie}
					changeScreen={changeScreen}
				/>
			)}

			{!screenAdd && (
				<Guests
					guests={guests}
					handleguestDeletion={handleguestDeletion}
				/>
			)}
		</div>
	);
};

export default App;

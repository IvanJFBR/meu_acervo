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

	const handleguestClick = guestId => {
		const newGuests = guests.map(guest => {
			if (guest.id === guestId)
				return { ...guest, confirmed: !guest.confirmed };

			return guest;
		});

		setGuests(newGuests);
		SaveGuests(newGuests);
	};

	const [screenAdd, setScreenAdd] = useState(false);

	function changeScreen() {
		setScreenAdd(!screenAdd);
	}

	const handleguestAddition = guestTitle => {
		const newGuests = [
			...guests,
			{
				title: guestTitle,
				id: uuidv4(),
				confirmed: false
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
					handleguestAddition={handleguestAddition}
					changeScreen={changeScreen}
				/>
			)}

			{!screenAdd && (
				<Guests
					guests={guests}
					handleguestClick={handleguestClick}
					handleguestDeletion={handleguestDeletion}
				/>
			)}
		</div>
	);
};

export default App;

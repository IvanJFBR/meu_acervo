import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header className='header'>
      <h2>Lista de Convidados</h2>
      <div className='guests'>{props.numberGuests}</div>
      <div className='confirmeds'>{props.numberConfirmed}</div>
    </header>
  );
};

export default Header;

import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav id='nav'>
        <div id='nav-itens'>
          <h1 id='nav-title'>TO DO LIST</h1>
          <Link to='/' id='nav-link'>
            <p id='nav-text'>Home</p>
          </Link>
          <Link to='/add' id='nav-link'>
            <p id='nav-text'>Adicionar notas</p>
          </Link>
          <p id='nav-footer'>Projeto desenvolvido por Ana Carolina</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
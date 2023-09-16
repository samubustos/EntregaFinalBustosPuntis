import React from 'react';
import imagen from './Assets/logotipo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className='header flex justify-between items-center py-2 px-2 text-white bg-green-800 top-0 left-0 w-full z-50'>
      <Link to={`/`}>
        <img className='imagen' src={imagen} alt='' style={{ width: '30px' }} />
      </Link>
      <nav className='flex items-center space-x'>
        <Link to={`/`} className='nav-link hover:text-green-300 cursor-pointer'>Inicio</Link>
        <Link to={`/category/mates`} className='nav-link hover:text-green-300 cursor-pointer'>Mates</Link>
        <Link to={`/category/termos`} className='nav-link hover:text-green-300 cursor-pointer'>Termos</Link>
        <Link to={`/category/materas`} className='nav-link hover:text-green-300 cursor-pointer'>Materas</Link>
        <CartWidget />
      </nav>
      
    </header>
  );
}

export default NavBar;

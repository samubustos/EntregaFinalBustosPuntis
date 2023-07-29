import React from 'react';
import imagen from './logotipo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header className='header flex justify-between py-4 px-2 text-white bg-green-800'>
      <img className='imagen' src={imagen} alt='' style={{ width: '30px' }} />
      <nav className='flex items-center '>
        <a href="#" className='nav-link hover:text-green-300 cursor-pointer' >Inicio</a>
        <a href="#" className='nav-link hover:text-green-300 cursor-pointer'>Productos</a>
        <a href="#" className='nav-link hover:text-green-300 cursor-pointer'>Contacto</a>
        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;

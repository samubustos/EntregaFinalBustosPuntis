import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import imagen from './components/Assets/brand.jpg';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='mt-12'>
        <img src={imagen} alt="" className="w-200" />
      </main>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Estamos a un mate de distancia!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

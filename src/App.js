import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import './firebase'
import Checkout from './components/Checkout';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Estamos a un mate de distancia!"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;

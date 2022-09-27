import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from "./Components/NavBar";
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './Components/Cart';

function App() {

  const dash = 'Bienvenido a E-Commerce.com';

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' element={<ItemListContainer greeting={dash}/>}/>
        <Route path = '/categoria/:nombreCategoria' element={<ItemListContainer greeting={dash}/>}/>
        <Route path = '/producto/:idProducto' element={<ItemDetailContainer />}/>
        <Route path = '/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

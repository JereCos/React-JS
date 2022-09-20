import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from "./Components/NavBar";
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {

  const dash = 'Bienvenido a E-Commerce.com';

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={dash}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;

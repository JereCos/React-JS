import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from "./Components/NavBar";

function App() {

  const dash = 'Bienvenido a E-Commerce.com';

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={dash}/>
    </>
  );
}

export default App;

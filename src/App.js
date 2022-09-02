import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Greetings Stranger. Bienvenido a E-Commerce.com'/>
    </>
  );
}

export default App;

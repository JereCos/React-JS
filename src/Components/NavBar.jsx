import React from 'react'
import logo from '../logo.svg';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { lightBlue } from '@mui/material/colors';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';

const NavBar = () => {

  const cantElementos = 0;

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
        setCategorias(data);
      })
      .catch(()=>{
      console.log('Nada cargado');
    })
  }, [])
  
  return (
    <header className = 'appHeader' style = {styles.appHeader}>
      <img src={logo} style = {styles.appLogo} alt = "logo" />
      <h1 style = {styles.h1}>E-Commerce</h1>
      <nav>
        {
          categorias.map ((categoria, i) => {
              return <a  key = {i} style = {styles.links} className = 'button-categoria' href='#'>{categoria.toUpperCase()}</a>
          })
        }
        <MenuOpenOutlinedIcon style = {styles.navDesplegable} className ='nav-desplegable' fontSize="large"/>
      </nav>
      <CartWidget cantElementos = {cantElementos}/>
    </header>
  )
}

const styles = {
/*     appHeader : {
        margin : 0,
        boxSizing : 'border-box',
        fontFamily : 'sans-seriff',
        backgroundColor : '#500050',
        display : 'flex',
        position : 'relative',
        width : '100%',
        height : 80,
        top : 0,
        left : 0,
        justifyContent : 'space-between',
        alignItems : 'center',
    }, */
    h1 : {
        color : 'white',
    },
    appLogo : {
        width : '8%',
    },
    links : {
        color : 'white',
        textDecoration : 'none',
        width : 'max-content',
        padding: 10,
    },
/*     navDesplegable : {
        display : 'none',
    }, */
}

export default NavBar
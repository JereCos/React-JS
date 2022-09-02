import React from 'react'
import logo from '../logo.svg';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { lightBlue } from '@mui/material/colors';
import '../App.css';
import CartWidget from './CartWidget';

const NavBar = () => {

  const categorias = [
    {id : 0, nombre : 'Categoría 1'},
    {id : 1, nombre : 'Categoría 2'},
    {id : 2, nombre : 'Categoría 3'},
    {id : 3, nombre : 'Categoría 4'}
  ]

  return (
    <header style = {styles.appHeader}>
      <img src={logo} style = {styles.appLogo} alt = "logo" />
      <h1 style = {styles.h1}>E-Commerce</h1>
      <nav>
        {
          categorias.map ((categoria) => {
              return <a  key = {categoria.id} style = {styles.links} className = 'button-categoria' href='#'>{categoria.nombre}</a>
          })
        }
        <MenuOpenOutlinedIcon style = {styles.navDesplegable} className ='nav-desplegable' sx={{ color: lightBlue[300] }} fontSize="large"/>
      </nav>
      <CartWidget />
    </header>
  )
}

const styles = {
    appHeader : {
        margin : 0,
        boxSizing : 'border-box',
        fontFamily : 'sans-seriff',
        backgroundColor : '#500050',
        display : 'flex',
        position : 'fixed',
        width : '100%',
        height : 80,
        top : 0,
        left : 0,
        justifyContent : 'space-between',
        alignItems : 'center',
    },
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
    navDesplegable : {
        display : 'none',
    },
}

export default NavBar
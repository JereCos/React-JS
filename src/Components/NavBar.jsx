import React from 'react'
import logo from '../logo.svg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { lightBlue } from '@mui/material/colors';
import '../App.css';

const NavBar = () => {
  return (
    <header style = {styles.appHeader}>
      <img src={logo} style = {styles.appLogo} alt = "logo" />
      <h1 style = {styles.h1}>E-Commerce</h1>
      <nav>
         <a style = {styles.links} className = 'button-categoria' href='#'>Categoría 1</a>
         <a style = {styles.links} className = 'button-categoria' href='#'>Categoría 2</a>
         <a style = {styles.links} className = 'button-categoria' href='#'>Categoría 3</a>
      </nav>
      <ShoppingCartOutlinedIcon sx={{ color: lightBlue[300] }} fontSize="large"/>
      <MenuOpenOutlinedIcon className = 'nav-desplegable' sx={{ color: lightBlue[300] }} fontSize="large"/>
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
        width : '10%',
    },
    links : {
        color : 'white',
        textDecoration : 'none',
        width : 'max-content',
        padding: 10,
    },
}

export default NavBar
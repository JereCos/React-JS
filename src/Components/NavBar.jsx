import React, { useContext } from 'react'
import logo from '../logo.svg';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { lightBlue } from '@mui/material/colors';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from './CartContext';

const NavBar = () => {

  const { quantity } = useContext(Context)

  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategorias(data);
      }
      catch (err) {
        console.error(err);
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getCategorias();
  }, [])

  return (
    <header className='appHeader' style={styles.appHeader}>
      <Link to='/'>
        <img src={logo} style={styles.appLogo} alt="logo" />
      </Link>
      <h1 style={styles.h1}>E-Commerce</h1>
      <nav>
        {
          categorias.map((categoria, i) => {
            return <NavLink key={i} style={styles.links} className='button-categoria' to={`/categoria/${categoria}`}>{categoria.toUpperCase()}</NavLink>
          })
        }
        <MenuOpenOutlinedIcon sx={{ color: lightBlue[300] }} style={styles.navDesplegable} className='nav-desplegable' fontSize="large" />
      </nav>
      <Link to='/cart'>
        <CartWidget cantElementos={quantity} />
      </Link>
    </header>
  )
}

const styles = {
  appHeader: {
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'sans-seriff',
    backgroundColor: '#500050',
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: 80,
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  h1: {
    color: 'white',
  },
  appLogo: {
    width: '20%',
  },
  links: {
    color: 'white',
    textDecoration: 'none',
    width: 'max-content',
    padding: 10,
  },
  navDesplegable: {
    display: window.innerWidth > 500 ? 'none' : 'block',
  },
}

export default NavBar
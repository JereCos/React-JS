import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { lightBlue } from '@mui/material/colors';

const CartWidget = () => {
  return (
    <ShoppingCartOutlinedIcon sx={{ color: lightBlue[300] }} fontSize="large"/>
  )
}

export default CartWidget
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { lightBlue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

const CartWidget = ({cantElementos}) => {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={cantElementos} /* showZero */ anchorOrigin={{vertical: 'top',horizontal:'left',}}>
        <ShoppingCartOutlinedIcon sx={{ color: lightBlue[300] }} fontSize="large"/>
      </Badge>
    </Stack>
  )
}

export default CartWidget
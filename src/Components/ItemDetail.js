import React from 'react'
import { Typography } from '@mui/material';

const ItemDetail = ({produc}) => {

  console.log(produc);
  return (
    <>
      <div style = {styles.container}>
        <img style = {styles.img} src={produc.image} alt={produc.title} />
        <div style = {styles.infoContainer}>
          <h1>{produc.title}</h1>
          <p>{produc.description}</p>
          <Typography gutterBottom variant='h4' component='div'>
            ${produc.price}
          </Typography>
        </div>
      </div>
    </>
  )
}

const styles = {
  container:{
    display: 'flex',
    flexDirection: window.innerWidth > 500 ? 'row' : 'column',
    alignItems: 'center'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  img:{
    maxWidth: '30%',
    backgroundColor: '#dbadc4',
    padding: '10px 10px'
  }
}

export default ItemDetail
import React, {useState, useEffect} from 'react'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Button from '@mui/material/Button';

const ItemDetail = ({produc}) => {

  const [finaliza, setFinaliza] = useState(false);
  
 
  const onAdd = (finalizar) => {
    setFinaliza(finalizar);
  }
   
  
  console.log("Finaliza compra? ",finaliza);
  
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
          {finaliza ?
            <Link to='/cart'>
              <Button variant="contained" aria-label="outlined button group">Finalizar Compra</Button>
            </Link>
            :
            <ItemCount stock={produc.stock} initial = {1} funcion={onAdd}/>
          }
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
    maxWidth: '35%',
    backgroundColor: '#dbadc4',
    padding: '10px 10px'
  },
}

export default ItemDetail
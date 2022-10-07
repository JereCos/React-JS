import React, { useContext } from 'react'
import { Context } from './CartContext'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Cart = () => {

  const { removeItem, clearAll, cart, total } = useContext(Context);

  return (
    <>
      {cart.length !== 0 ? (
        <>
          {cart.map((item) => (
            <>
              <div key={item.item.id} style={styles.container}>
                <img src={item.item.image} style={styles.img} />
                <span>
                  <h2>{item.item.title}</h2>
                  <h3>Precio unitario: ${item.item.price}</h3>
                  <h3>Cantidad: {item.qty}</h3>
                </span>
                <Button
                  onClick={() => { removeItem(item.item.id) }}
                  variant="contained" aria-label="outlined button group"
                >
                  Eliminar producto
                </Button>
              </div>
            </>
          ))
          }
          <h3>Total: ${total}</h3>
          <Button
            onClick={() => { clearAll() }}
            variant="contained" aria-label="outlined button group"
          >
            Vaciar Carrito
          </Button>
        </>) : (

        <h1>
          No hay elementos en el carro. Haz click <Link to='/'>acá</Link>
        </h1>

      )
      }
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  img: {
    maxWidth: '10%'
  }
}
import React, { useContext } from 'react'
import { Context } from './CartContext'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { db } from '../Firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import Swal from 'sweetalert2';
import Form from './Form';

export const Cart = () => {

  const { removeItem, clearAll, cart, total } = useContext(Context);

  const buyer = {
    name: '',
    phone: '',
    mail: ''
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'CartVentas');

    const venta = async () => {
      const ventaDone = await addDoc(ventasCollection, {
        buyer,
        items: cart,
        date: serverTimestamp(),
        total,
      });
      try {
        console.log(ventaDone.id);
        Swal.fire({
          title: 'Compra Finalizada!',
          text: `Su id de venta es ${ventaDone.id}`,
          icon: 'success',
          confirmButtonText: 'OK'
        })
        cart.forEach(producto => {
          actualizarStock(producto);
        })
        clearAll()
      }
      catch (err) {
        console.log('Hubo un error en la compra');
      }
      finally {
        console.log('Compra finalizada');
      }
    }
    venta();
  }

  const actualizarStock = (producto) => {
    const updateStock = doc(db, 'ProductsList', producto.item.id);
    updateDoc(updateStock, { stock: (producto.item.stock - producto.qty) });
  }

  return (
    <>
      {cart.length !== 0 ? (
        <>
          {cart.map((item) => (
            <>
              <div key={item.id} style={styles.container}>
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
          <Form />
          <Button
            onClick={() => {
              finalizarCompra(
                buyer.name = document.getElementById('filled-nombre').value,
                buyer.mail = document.getElementById('filled-mail').value,
                buyer.phone = document.getElementById('filled-number').value,
              )
            }}
            variant="contained" aria-label="outlined button group"
          >
            Finalizar Compra
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
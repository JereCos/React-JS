import React, { createContext, useState } from 'react'

export const Context = createContext()

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(cart.map((producto) => {
        if (producto.item.id === item.id) {
          return {
            item: producto.item,
            qty: producto.qty + qty,
          }
        }
        return producto;
      }))
    } else {
      setCart([...cart, { item, qty }])
    }
    setQuantity(quantity + qty);
    console.log('Este método agrega ítems al carro');
  }

  const removeItem = (id) => {
    const productoBorrado = cart.filter((producto) => {
      return producto.item.id !== id;
    })

    setCart(productoBorrado);
    console.log('Este método elimina ítems del carro');
  }

  const clearAll = () => {
    setCart([]);
    setQuantity(0);
  }

  const isInCart = (id) => cart.some((producto) => producto.item.id === id);

  return (
    <Context.Provider
      value={{
        cart,
        quantity,
        addItem,
        removeItem,
        clearAll,
      }}>
      {children}
    </Context.Provider>
  )
}

export default CartContext
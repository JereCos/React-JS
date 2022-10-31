import React, { createContext, useState } from 'react'

export const Context = createContext()

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(cart.map((producto) => {
        if (producto.item.id === item.id) {
          return {
            item: producto.item,
            qty: producto.qty + qty,
            total: producto.qty * producto.price
          }
        }
        return producto;
      }))
    } else {
      setCart([...cart, { item, qty }])
    }
    setQuantity(quantity + qty);
    setTotal(total + (qty * item.price))
  }

  const removeItem = (id) => {
    const productoBorrado = cart.filter((producto) => {
      return producto.item.id !== id;
    })

    setCart(productoBorrado);
  }

  const clearAll = () => {
    setCart([]);
    setQuantity(0);
    setTotal(0);
  }

  const isInCart = (id) => cart.some((producto) => producto.item.id === id);

  return (
    <Context.Provider
      value={{
        cart,
        quantity,
        total,
        addItem,
        removeItem,
        clearAll,
      }}>
      {children}
    </Context.Provider>
  )
}

export default CartContext
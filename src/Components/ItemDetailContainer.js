import React from 'react';
import {ItemDetail} from './ItemDetail';
import { useState, useEffect } from 'react';
import Progress from './Progress';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ([])

    useEffect(() => {
      fetch('https://fakestoreapi.com/products/4')
      .then(response => response.json())
      .then(data => {
        setProducto(data);
/*         console.log(data); */
      })
      .catch(()=>{
        console.log('Nada trajo');
      })
    }, [])

  return (
    <>
      {producto.length === 0 ? <Progress /> : <ItemDetail produc = {producto}/>}
    </>
  )
}

export default ItemDetailContainer
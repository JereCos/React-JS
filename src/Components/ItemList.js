import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {

  return (
  <>
    {productos.map(producto => <Item key={`${producto.name}_${producto.id}`} prod = {producto}/>)}
  </>  

);
}

export default ItemList
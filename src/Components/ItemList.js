import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {

  return (
  <>
    <div className='row'>
    {productos.map(producto => <Item key={`${producto.name}_${producto.id}`} prod = {producto}/>)}
    </div>
  </>  

);
}

export default ItemList
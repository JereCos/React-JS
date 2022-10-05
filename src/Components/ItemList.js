import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {

  return (
    <>
      <div className='row' style={styles.row}>
        {productos.map(producto => <Item key={`${producto.name}_${producto.id}`} prod={producto} />)}
      </div>
    </>

  );
}

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'

  }
}

export default ItemList
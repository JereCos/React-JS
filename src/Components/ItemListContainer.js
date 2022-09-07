import React from 'react'
import ItemCount from './ItemCount';


const ItemListContainer = ({greeting}) => {

  const onAdd = (count) => {
    console.log("Hola Manolas x " + count);
  }

  onAdd();

  return (
    <>
      <h4 style = {styles.h4}>{greeting}</h4>
      <ItemCount stock = {10} initial = {1} funcion = {onAdd} />
    </>
  )
}

const styles = {
    h4 : {
        color : 'black',
        padding : 100,
        fontSize : 40,
    }
}

export default ItemListContainer
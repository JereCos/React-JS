import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <h4 style = {styles.h4}>{greeting}</h4>
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
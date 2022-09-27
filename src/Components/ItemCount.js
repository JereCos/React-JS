import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemCount = ({stock, initial, funcion}) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => {
        contador < stock ? setContador (contador + 1) : setContador (stock);
    }

    const restar = () => {
        contador < 1 ? setContador (0) : setContador (contador - 1);
    }

    const resetear = () => {
        setContador (initial);
    }

  return (
    <>
        <div style = {styles.buttonGroup}>
            <ButtonGroup variant="contained" aria-label="outlined button group">
                <Button onClick = {restar}>Restar</Button>
                <Button variant = "text">{contador}</Button>
                <Button onClick = {sumar}>Sumar</Button>
            </ButtonGroup>
        </div>
        <div style = {styles.button}>
                <Button onClick = {resetear} variant="contained">Resetear</Button>
        </div>
        <div style = {styles.button}>
            <Button onClick = {()=>funcion(true)} variant="contained">Agregar al carrito</Button>
        </div>
    </>
  )
}

export default ItemCount

const styles = {
    buttonGroup:{
        display: 'flex',
        position: 'relative',
    },
    button:{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 216,
        width: '100%'
    }
}
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SimpleSnackbar from './SnackBar';

const ItemCount = ({stock, initial, funcion, addCarrito}) => {

    const [contador, setContador] = useState(initial);

    console.log(initial);

    const sumar = () => {
        contador < stock ? setContador (contador + 1) : setContador (stock);
    }

    const restar = () => {
        contador < 1 ? setContador (0) : setContador (contador - 1);
    }

    const resetear = () => {
        setContador (initial);
    }

    const onAdd = () => {

        funcion(contador);
        
    }

  return (
    <>
        <div>ItemCount</div>
        <h1>{contador}</h1>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick = {sumar}>Sumar</Button>
            <Button onClick = {restar}>Restar</Button>
            <Button onClick = {onAdd}>On Add</Button>
            <Button onClick = {resetear}>Resetear</Button>
        </ButtonGroup>
    </>
  )
}

export default ItemCount
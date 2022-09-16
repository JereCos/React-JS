import {React,useState,useEffect} from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Progress from './Progress';


const ItemListContainer = ({greeting}) => {

  const initialProducts = [
    {id:0, name: 'Manzanas', stock: 2, price: 100},
    {id:1, name: 'Naranja', stock: 2, price: 50},
    {id:2, name: 'Banana', stock: 2, price: 120},
    {id:3, name: 'Durazno', stock: 2, price: 150}
  ]

const promesa = new Promise ((res,rej) => {
    setTimeout(() => {
      res (initialProducts);
    }, 2000);
  })

const [products, setProducts] = useState([])

useEffect(() => {
promesa

  .then((data) => {
    setProducts(data);    
  }).catch(() => {
    console.log('No se cargó nada.');
  })
}, [])

  const onAdd = (count) => {
    console.log(`Se agregaron ${count} productos`);
  }

 /*  onAdd(); */

  return (
    <>
      <h4 style = {styles.h4}>{greeting}</h4>
{/*       <ItemCount stock = {10} initial = {1} funcion = {onAdd} /> */}
      {products.length === 0 ? <Progress /> : <ItemList productos = {products}/>}
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
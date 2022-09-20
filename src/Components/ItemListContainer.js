import {React,useState,useEffect} from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Progress from './Progress';


const ItemListContainer = ({greeting}) => {

/* const promesa = new Promise ((res,rej) => {
    setTimeout(() => {
      res (initialProducts);
    }, 2000);
  })
 */
const [products, setProducts] = useState([])

useEffect(() => {

fetch("https://fakestoreapi.com/products?limit=8")
.then(response => response.json())
  .then((data) => {
    console.log(data);
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
        textAlign: 'center',
    }
}

export default ItemListContainer
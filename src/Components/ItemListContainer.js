import { React, useState, useEffect } from 'react'
import ItemList from './ItemList';
import Progress from './Progress';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  let { nombreCategoria } = useParams();

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CATEGORIA = 'https://fakestoreapi.com/products/category/';


  useEffect(() => {

    const getProductos = async () => {
      const home = nombreCategoria ? `${URL_CATEGORIA}${nombreCategoria}` : (URL_BASE)

      try {
        const response = await fetch(home);
        const data = await response.json();
        setProducts(data);
      }
      catch (err) {
        console.log('No se cargó nada.');
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getProductos();
  }, [nombreCategoria])

  return (
    <>
      <h1 style={styles.h1}>{greeting}</h1>
      {loading ? <Progress /> : <ItemList productos={products} />}
    </>
  )
}

const styles = {
  h1: {
    color: 'black',
    padding: 100,
    fontSize: 40,
    textAlign: 'center',
  }
}

export default ItemListContainer
import { React, useState, useEffect } from 'react'
import ItemList from './ItemList';
import Progress from './Progress';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {

  let { nombreCategoria } = useParams();

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    const productsCollection = collection(db, 'ProductsList');
    const q = query(productsCollection, where('category', '==', `${nombreCategoria}`))

    const getProductos = async () => {

      try {
        const data = await getDocs(productsCollection)
        const mostrarProductos = nombreCategoria ? (
          await getDocs(q)
        ) : data;

        console.log(mostrarProductos);
        const list = mostrarProductos.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id
          }
        })
        setProducts(list);
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
      {loading ? (
        <Progress />
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <ItemList productos={products} />
      )
      }
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
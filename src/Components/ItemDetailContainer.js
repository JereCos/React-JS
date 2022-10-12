import { React, useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Progress from './Progress';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';


const ItemDetailContainer = () => {

  let { idProducto } = useParams();

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    const productsCollection = collection(db, 'ProductsList');

    const getProducto = async () => {
      try {
        const refDoc = doc(productsCollection, idProducto);
        const data = await getDoc(refDoc)
        setProducto({
          ...data.data(),
          id: data.idProducto
        });
      }
      catch (err) {
        console.error(`error: ${err}`);
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getProducto();
  }, [idProducto])

  return (
    <>
      {loading ? (
        <Progress />
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <ItemDetail produc={producto} />
      )
      }
    </>
  )
}

export default ItemDetailContainer
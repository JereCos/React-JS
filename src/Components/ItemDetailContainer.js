import { React, useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Progress from './Progress';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  let { idProducto } = useParams();

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const URL_PRODUCTO = 'https://fakestoreapi.com/products/';

  useEffect(() => {

    const getProducto = async () => {

      const urlProd = idProducto ? `${URL_PRODUCTO}${idProducto}` : <h1>Error al cargar producto</h1>;
      console.log(urlProd);

      try {
        const response = await fetch(urlProd);
        const data = await response.json();
        setProducto({ ...data, stock: Math.floor(Math.random() * 10) });
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
      {loading ? <Progress /> : <ItemDetail produc={producto} />}
    </>
  )
}

export default ItemDetailContainer
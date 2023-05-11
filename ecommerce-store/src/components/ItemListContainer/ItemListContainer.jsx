import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import getProducts from '../GetProducts/getProducts'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (category) {
          setProductos( res.filter((prod) => prod.category === category) )
        } else {
          setProductos(res);
        }
      })
  }, [category]);

  return (
    <>
      <Banner greetings="Bienvenido a Deepest Symphaty"/>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer
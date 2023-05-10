import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import getProducts from '../GetProducts/getProducts'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductos(response)
      })
      .catch(error => {
        console.error(error)
      })

  }, []);

  return (
    <>
      <Banner greetings="Bienvenido a Deepest Symphaty"/>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer
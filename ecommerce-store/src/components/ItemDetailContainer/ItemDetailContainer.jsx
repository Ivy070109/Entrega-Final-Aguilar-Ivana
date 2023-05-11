import React, { useEffect, useState } from 'react'
import getProductsById from '../GetProducts/getProductsById'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null); 
  const id = useParams().id

  useEffect(() => {
    getProductsById(Number(id))
      .then((response) => {
        setItem(response)
      })
  }, [id])
  

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
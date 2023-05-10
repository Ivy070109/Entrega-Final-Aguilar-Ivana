import React, { useEffect, useState } from 'react'
import getProductsById from '../GetProducts/getProductsById'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ( {itemId} ) => {

  const [item, setItem] = useState(null); 

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setItem(response)
      })
  }, [itemId])
  

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
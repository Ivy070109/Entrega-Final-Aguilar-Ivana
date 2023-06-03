import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
//import { getProductsById } from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null); 

  const id = useParams().id

  useEffect(() => {
    const docRef = doc(db, "products", id)

    getDoc(docRef)
      .then(res => {
        const data = res.data()
        const productoAdaptado = { id: res.id, ...data }
        setItem(productoAdaptado)
      })
  }, [id])


  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
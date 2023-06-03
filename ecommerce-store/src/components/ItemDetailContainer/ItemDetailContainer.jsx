import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
//import { getProductsById } from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [data, setData] = useState({}); 
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", id);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [id])

  // const {id} = useParams().id

  // useEffect(() => {
  //   const docRef = doc(db, "products", id)

  //   getDoc(docRef)
  //     .then(res => {
  //       const data = res.data()
  //       const productoAdaptado = { id: res.id, ...data }
  //       setItem(productoAdaptado)
  //     })
  // }, [id])


  return (
    <div>
      {/* { item &&  */}
      <ItemDetail data={data} />
      {/* } */}
    </div>
  )
}

export default ItemDetailContainer
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    if(category) {
      const queryFilter = query(queryCollection, where("category", "==" , category))
    getDocs(queryFilter)
      .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [category]);

  const ShowProducts = () => {
return (
      <>
        <div className="buttons-muestra me-2">
          <Link className="nav-link btn btn-outline-dark me-2" to="/productos/abrigos" type="button" >Abrigos</Link>
          <Link type="button" class="nav-link btn btn-outline-dark me-2" to="/productos/tops">Partes de Arriba</Link>
          <Link type="button" class="nav-link btn btn-outline-dark me-2" to="/productos/bottoms">Partes de Abajo</Link>
          <Link type="button" class="nav-link btn btn-outline-dark me-2" to="/productos/vestidos">Vestidos</Link>
          <Link type="button" class="nav-link btn btn-outline-dark me-2" to="/productos/sweaters">Sweaters y Buzos</Link>
        </div>
      </>
    )
  }

  return (
    <>
        <h2 className="title-products" id="title">Nuestros Productos</h2>
        <ShowProducts />
        <ItemList productos={data} />
    </>
  )
}
export default ItemListContainer

//setLoading(true)
// //    if(loading) {
//   return <h1>Se está generando su orden...</h1>
// }

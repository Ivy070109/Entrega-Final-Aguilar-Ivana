import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
// import { getProducts } from '../../Helpers/getProducts';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const category = useParams().category;

  useEffect(() => {

    const collectionRef = category
      ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products")

    getDocs(collectionRef)
      .then(response => {
        const productosAdaptados = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(productosAdaptados)
      })
  }, [category]);

  const ShowProducts = () => {
    return (
        <>
          <div className="buttons">
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/abrigos">Abrigos</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/tops">Partes de Arriba</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/bottoms">Partes de Abajo</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/vestidos">Vestidos</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/sweaters">Sweaters y Buzos</Link>
          </div>
        </>
    )
  }

  return (
    <>
      <h2 className="second-title">Nuestros Productos</h2>
      <ShowProducts />
      <ItemList productos={productos} />
    </>
  )
}
export default ItemListContainer
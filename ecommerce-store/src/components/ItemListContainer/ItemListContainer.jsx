import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (category) {
          setProductos( res.filter((prod) => prod.category === category) )
          setTitle(category);
        } else {
          setProductos(res);
          setTitle("Productos");
        }
      })
  }, [category]);

  const ShowProducts = () => {
    return (
        <>
          <div className="buttons">
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/abrigos">Abrigos</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/tops">Tops</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/bottoms">Bottoms</Link>
            <Link className="nav-link btn btn-outline-dark me-2" to="/productos/vestidos">Vestidos</Link>
          </div>
        </>
    )
  }

  return (
    <>
      <h2 className="second-title">Nuestros Productos</h2>
      <ShowProducts />
      <hr />
      <ItemList productos={productos} title={title}/>
    </>
  )
}

export default ItemListContainer
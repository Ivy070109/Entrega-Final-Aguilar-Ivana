import React from 'react'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ( {productos} ) => {
  return (
    <>
      <div className="container my-5 py-5 justify-content-center"> 
        <h2 className="main-title">{productos.category}</h2>      
        <div className="producto">
            { productos.map((prod) => {
              return (
                <div className="card h-80 text-center p-4" key={prod.id}>
                <img src={prod.img} className="card-img-top" alt={prod.name} height="400" width="200" />
                <div className="card-body">
                  <h5 className="card-title">{prod.name}...</h5>
                  <p className="card-text lead fw-bold">${prod.price}</p>
                  <Link to={`/item/${prod.id}`} className="btn btn-outline-dark">Más Detalles</Link>
                </div>
              </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default ItemList
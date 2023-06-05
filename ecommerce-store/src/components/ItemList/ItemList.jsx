import React from 'react'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ( {productos} ) => {
  return (
    <>
      <div className="container1"> 
        <div className="productos">
          { productos.map((prod) => {
            return (
              <div className="producto">
                <div className="card h-80 text-center p-4" key={prod.id}>
                  <img src={prod.img} className="card-img-top" alt={prod.name} />
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}...</h5>
                    <p className="card-text lead fw-bold">${prod.price}</p>
                    <Link to={`/item/${prod.id}`} className="btn btn-outline-dark">Más Detalles</Link>
                  </div>
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
import React from 'react'
import './Item.css'

const Item = ( {producto} ) => {
  return (
          <>
          <div className="producto">
            <div className="card h-80 text-center p-4" key={producto.id}>
              <img src={producto.image} className="card-img-top" alt={producto.title} height="400" width="200" />
              <div className="card-body">
                <h5 className="card-title">{producto.title.substring(0, 12)}...</h5>
                <p className="card-text lead fw-bold">${producto.price}</p>
                <a href={`/item/${producto.id}`} className="btn btn-outline-dark">Más Detalles</a>
              </div>
            </div>
          </div>
          </>  
        )
}

export default Item


//{`/productos/${producto.id}`}
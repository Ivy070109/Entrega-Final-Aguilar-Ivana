import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos} ) => {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="display-6">Últimos Ingresos</h2>
            <hr />
          </div>
        </div>
        <div className='contenedor row justify-content-center'>
          {
            productos.length > 0 && 
            productos.map((producto) => {
              return(
                <Item key={producto.id} producto={producto} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ItemList
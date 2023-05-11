import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos} ) => {
  return (
    <>
      <div className="container my-5 py-5 justify-content-center">
        <div className="productos">
            { productos.map((producto) => {
                return(
                  <Item key={producto.id} producto={producto} />
                )})
            }
        </div>
      </div>
    </>
  )
}

export default ItemList
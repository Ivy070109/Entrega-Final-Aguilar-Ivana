import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { toCapital } from '../../Helpers/toCapital'

const ItemList = ( {productos, title} ) => {
  return (
    <>
      <div className="container my-5 py-5 justify-content-center">
        <h2 className="main-title">{toCapital(title)}</h2> 
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
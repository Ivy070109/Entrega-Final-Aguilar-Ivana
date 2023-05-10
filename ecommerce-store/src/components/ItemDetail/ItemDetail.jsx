import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {item} ) => {
  return (
    <div className="container py-5">
        <div className="row py-4">
            <img className="detalle" src={item.image} alt={item.title} />
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase">{item.category}</h4>
            <h1 className="display-5">{item.title}</h1>
            <h3 className="display-6 my-4">$ {item.price}</h3>
            <p className="lead1">{item.description}</p>
            <div className="controls">
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} /> 
                <a href={"/cart"} className="btn btn-dark px-4 py-2">Ir al carrito</a>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
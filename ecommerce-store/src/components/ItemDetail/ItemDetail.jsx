import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ( {item} ) => {
  return (
    <div className="containerPrincipal">
        <div className="productoDetalle">
            <img className="detalle" src={item.image} alt={item.title} />
        </div>
        <div className="datos">
            <h4 className="text-uppercase">{item.category}</h4>
            <h1 className="title display-5">{item.title}</h1>
            <div className="lead">
              <h3 className="display-6 my-4">$ {item.price}</h3>
              <p className="lead1">{item.description}</p>
                <ItemCount className="contador" initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} /> 
                <Link to={"/cart"} className="carro btn btn-dark">Ir al carrito</Link>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
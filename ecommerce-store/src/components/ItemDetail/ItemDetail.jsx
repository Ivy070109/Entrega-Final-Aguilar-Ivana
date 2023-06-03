import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
//import { toCapital } from '../../Helpers/toCapital';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'; 
import { Link } from 'react-router-dom';

const ItemDetail = ( {item} ) => {

  const { carrito, setCarrito } = useContext(CartContext);
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const addOnCart = (item, cantidad) => {
    const itemAdd = {...item, cantidad}
    const newCart = [...carrito];
    const onCart = newCart.find((producto) => producto.id === itemAdd.id);

    setQuantityAdded(cantidad);

    if (onCart) {
      onCart.cantidad += onCart.cantidad + cantidad;
      setCarrito(newCart)
    } else {
      newCart.push(itemAdd);
    }
    setCarrito(newCart);
}

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  }


  return (
    <div className="containerPrincipal">
        <div className="productoDetalle">
            <img className="detalle" src={item.img} alt={item.name} />
        </div>
        <div className="datos">
            <h4 className="text-uppercase">Categoria: {item.category}</h4>
            <h1 className="title display-5">{item.name}</h1>
            <div className="lead">
              <h3 className="display-6 my-4">$ {item.price}</h3>
              <p className="lead1">{item.description}</p>
              <div className="contadorFinal">
                { 
                  quantityAdded > 0 ? (
                    <>
                      <Link to="/cart" className="option btn">Terminar Compra</Link>
                      <Link to="/productos" className="option btn">Seguir Comprando</Link>
                    </>
                  ) : ( 
                    <ItemCount className="contador" cantidad={cantidad} stock={item.stock} handleSumar={handleSumar} handleRestar={handleRestar} handleOnAdd={() => { addOnCart(item, cantidad) }} /> 
                  )
                } 
              </div>
            </div>
        </div> 
    </div>
  )
}


export default ItemDetail
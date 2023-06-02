import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {

  const { carrito, vaciarCarrito } = useContext(CartContext);

  const total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id} className="container-elements">
              <h2 className="elements">{prod.title}</h2>
              <p>{prod.price}</p>
              <p>Precio unit: ${prod.price}</p>
              <p>Precio total: ${prod.price * prod.cantidad}</p> 
              <p>Cantidad: {prod.cantidad}</p>
              <br />             
          </div>
        ))
      }

      {
        carrito.length > 0 ? 
        <>
          <h2 className="total">Precio Total: ${total}</h2> 
          <button onClick={handleVaciar}>Vaciar</button>
          <button>Checkout</button>
        </> :
        <h2>El carrito está vacio</h2>
      }
    </div>
  )
}

export default Cart
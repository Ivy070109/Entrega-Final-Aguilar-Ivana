import React, { useContext } from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {

  const { carrito, setCarrito, vaciarCarrito, total } = useContext(CartContext)  
  
  const deleteProduct = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    const newCart = carrito.filter((element) => {
      return element !== foundId;
    })

    setCarrito(newCart)
  }

  return (
    <div className="container1">
      <h1 className="main-title">Carrito</h1>
      {
        carrito.map((prod) => (
          <div key={prod.id} className="container-elements">
            <h2 className="elements">{prod.name}</h2>
            <div className="cartContent">
              <img src={prod.img} alt={prod.name} />
              <p>Precio unit: ${prod.price}</p>
              <p>Precio total: ${prod.price * prod.cantidad}</p> 
              <p>Cantidad: {prod.cantidad}</p>
              <p className="cart-delete-button" onClick={() => deleteProduct(prod.id)}>❌</p>

            </div>
          </div>
        ))
      }

      {
        carrito.length > 0 ? 
        <>
          <h2 className="total">Total: ${total}</h2> 
          <br />
          <div className="detalles">
            <button id="vaciar" className="btn btn-outline-dark me-2" onClick={() => vaciarCarrito()}>Vaciar</button>
            <Link id="check" to="/checkout" className="btn btn-outline-dark me-2">Checkout</Link>
          </div>
        </> :
        <>
          <div className="container" id="especial">
            <h2 className="total">El carrito está vacio</h2>
          </div>
        </>
      }
    </div>
  )
}

export default Cart
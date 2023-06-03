import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../../Context/CartContext'

const Cart = () => {

  const { carrito, setCarrito, vaciarCarrito } = useContext(CartContext);

  const total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  const deleteProduct = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    const newCart = carrito.filter((element) => {
      return element !== foundId;
    })

    setCarrito(newCart)
  }

  return (
    <div className="container">
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
              <h3 className="cart-delete-button" onClick={() => deleteProduct(prod.id)}>❌</h3>

            </div>
          </div>
        ))
      }

      {
        carrito.length > 0 ? 
        <>
          <h2 className="total">Precio Total: ${total}</h2> 
          <button className="btn" onClick={handleVaciar}>Vaciar</button>
          <button className="btn">Checkout</button>
        </> :
        <h2>El carrito está vacio</h2>
      }
    </div>
  )
}

export default Cart
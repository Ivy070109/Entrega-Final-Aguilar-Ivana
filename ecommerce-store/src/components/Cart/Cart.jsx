import React, { useContext } from 'react'
import "./Cart.css"
import { getFirestore, addDoc, collection } from 'firebase/firestore'
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

  const order = {
    comprador: {
      name: "Ivana",
      email: "ivy@gmail.com",
      phone: 44560403,
      addres: "Av. Siempre Viva 123"
    }, 
    items: carrito.map(product => ({ id: product.id, title: product.name, price: product.price, quantity: product.cantidad })),
    total: total(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))
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
          <h2 className="total">Total: ${total}</h2> 
          <button className="btn" onClick={() => vaciarCarrito()}>Vaciar</button>
          <button onClick={handleClick}>Checkout</button>
        </> :
        <h2>El carrito está vacio</h2>
      }
    </div>
  )
}

export default Cart
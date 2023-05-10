import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <>
        <div className="contenedorCarrito">
            <button href="#f" className="btn btn-outline-dark"><i class="bi bi-person-heart"></i>Registrate</button>
            <button href="cart" className="btn btn-outline-dark"><i class="bi bi-bag-heart-fill"><span className="numerito" style={{width:"20px", height:"25px", borderRadius:"50%", backgroundColor:"red"}}>(4)</span></i></button>
        </div>
    </> 	
  )
}

export default CartWidget
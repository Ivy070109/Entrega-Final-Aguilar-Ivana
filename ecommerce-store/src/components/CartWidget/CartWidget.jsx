import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
        <div className="contenedorCarrito">
            <Link href="#f" className="btn btn-outline-dark"><i class="bi bi-person-heart"></i>Registrate</Link>
            <Link href="cart" className="btn btn-outline-dark"><i class="bi bi-bag-heart-fill"><span className="numerito" style={{width:"20px", height:"25px", borderRadius:"50%", backgroundColor:"red"}}>(4)</span></i></Link>
        </div>
    </> 	
  )
}

export default CartWidget
import React, { useContext } from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

  const { quantityOnCart } = useContext(CartContext);

  return (
    <>
        <div className="contenedorCarrito">
            <Link to="/cart" className="btn btn-outline-dark" id="bolsita"><i class="bi bi-bag-heart-fill"><span className="numerito" style={{width:"20px", height:"25px", borderRadius:"50%", backgroundColor:"red"}}>{quantityOnCart()}</span></i></Link>
        </div>
    </> 	
  )
}

export default CartWidget
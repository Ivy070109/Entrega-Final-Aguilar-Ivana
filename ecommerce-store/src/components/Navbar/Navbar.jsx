import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">
          <img src="./assets/iconoPrincipal.png" className="logo" alt="Bootstrap" />
          Deepest Symphaty
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">Productos</Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">Nosotros</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>

  )
}

export default Navbar
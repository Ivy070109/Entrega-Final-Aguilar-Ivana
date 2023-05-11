import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./assets/iconoPrincipal.png" className="logo" alt="Bootstrap" width="50" height="50" />
          Deepest Symphaty</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/tops">Partes de arriba</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/bottoms">Partes de Abajo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/vestidos">Vestidos</Link>  
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/abrigos">Abrigos</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>

  )
}

export default Navbar
import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="./assets/iconoPrincipal.png" className="logo" alt="Bootstrap" width="50" height="50" />
          Deepest Symphaty</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#h">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#f">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#c">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>

  )
}

export default Navbar
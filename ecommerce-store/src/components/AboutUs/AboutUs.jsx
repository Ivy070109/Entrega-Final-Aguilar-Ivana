import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="container1">
      <h1 className="main-title">Somos Deepest Symphaty</h1>
      <div className="descriptivo">
        <p>Nuestro local a la calle es la tienda de indumentaria más grande del país, ubicada en Sarmiento 778, en el microcentro de la ciudad de Rosario, Argentina.</p>
        <div className="map">
          <img src="https://i.ibb.co/54mSQGM/Noche-Disquer-as3-1.webp" alt="disqueria" className="disqueria"/>
        </div>
        <p>Fundada en 1990, ocupamos durante 28 años diferentes locales siempre en la misma cuadra, actualmente ofrecemos más de 10,000 artículos en stock en nuestro local de 2 niveles con un total de 200 metros cuadrados.</p>
        <p>El salón principal para la ropa informal, ejercicio, y teens (nacionales e importados), y nuestro subsuelo para los nuevos lanzamientos y ropa de gala</p>
      </div>
  </div>
  )
}

export default AboutUs
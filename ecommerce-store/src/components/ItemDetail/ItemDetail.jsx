import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, title, image, category, descriptions, price, stock }) => {
  return (
    <article className="cardItem">
        <header className="header">
            <h2 className="ItemHeader">
                {title}
            </h2>
        </header>
        <picture>
            <img src={image} alt={title} className="ItemImage" />
        </picture>
        <section>
            <p className="info">Categoria: {category}</p>
            <p className="info">Description: {descriptions}</p>
            <p className="info">
                Precio: ${price}
            </p>
        </section>
        <footer className="ItemFooter">
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada, quantity")} />
        </footer>
    </article>
  )
}

export default ItemDetail
import React from 'react'
import './ItemCount.css'

const ItemCount = ( {cantidad, handleOnAdd, handleRestar, handleSumar} ) => {

    return (
        <>
            <div className="counter">
                <div className="controls">
                    <button className="btn btn btn-outline-dark me-2" onClick={handleRestar}>-</button>
                    <h4 className="number">{cantidad}</h4>
                    <button className="btn btn btn-outline-dark me-2" onClick={handleSumar}>+</button>
                </div>
                <div>
                    <button className="btn btn btn-outline-dark me-2" onClick={handleOnAdd}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const cartInitial = JSON.parse(localStorage.getItem("carrito")) || [];
export const CartProvider =  ({ children }) => {

    const [carrito, setCarrito] = useState(cartInitial);

      
    const quantityOnCart = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    

    return (
        <CartContext.Provider value={ {carrito, setCarrito, quantityOnCart, vaciarCarrito, total} }>
            {children}
        </CartContext.Provider>
    )

}
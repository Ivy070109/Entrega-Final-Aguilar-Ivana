import { createContext, useEffect, useState } from 'react'


export const CartContext = createContext();

const cartInitial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider =  ({ children }) => {

    const [carrito, setCarrito] = useState(cartInitial);

    // const addOnCart = (item, cantidad) => {

    //     const itemAdd = {...item, cantidad};

    //     const newCart = [...carrito];
    //     const onCart = newCart.find((producto) => producto.id === itemAdd);

    //     if (onCart) {
    //         onCart.cantidad += onCart.cantidad + cantidad;
    //         setCarrito(newCart)
    //     } else {
    //     newCart.push(itemAdd);
    //     }
    //     setCarrito(newCart);
    // }

    const quantityOnCart = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    

    return (
        <CartContext.Provider value={ {carrito, setCarrito, quantityOnCart, vaciarCarrito} }>
            {children}
        </CartContext.Provider>
    )

}
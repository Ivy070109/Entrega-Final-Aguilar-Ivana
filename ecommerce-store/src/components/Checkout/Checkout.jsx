import React, { useContext, useState } from 'react'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import Register from '../Register/Register'


const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { carrito, vaciarCarrito, total } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                comprador: {
                    nombre, telefono, email
                },
                items: carrito.map(product => ({ id: product.id, title: product.name, price: product.price, quantity: product.cantidad })),
                total: {total},
                dia: Timestamp.fromDate(new Date())
            }

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, objOrder)
                .then(({ id }) => setOrderId(id))
            
            
            vaciarCarrito()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

        if(loading) {
            return <h1 className="main-title">Se está generando su orden...</h1>
        }

        if(orderId) {
            return (
                <div className="container" id="especial">
                    <h1 className="main-title">El ID de su orden es: {orderId}</h1>
                    < br />

                    <h1 className="main-title">¡Gracias por su compra!</h1>
                </div>
            )
        }

    return (
        <div>
            <Register onConfirm={createOrder} onHandle/>
        </div>
    )
}



export default Checkout
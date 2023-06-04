import React, { useContext, useState } from 'react'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import Register from '../Register/Register'


const Checkout = () => {

    const [loading, setLoading] = useState(false)
    //const [orderId, setOrderId] = useState("")

    const { carrito, vaciarCarrito, total } = useContext(CartContext)

    const createOrder = async ({ items }) => {
        setLoading(true)

        const order = {
            comprador: {
                nombre: "luis", telefono: "568", email: "hol@455.com" },
                item : [{ name: items.name, price: items.price }],
                total: items.total,
            }
        //     items: carrito.map(product => ({ id: product.id, title: product.name, price: product.price, quantity: product.cantidad })),
        //     total: {total},
        //     dia: Timestamp.fromDate(new Date())
        // }


        // try{
            
            // const handleClick = () => {
                const db = getFirestore();
                const ordersCollection = collection(db, "orders");
                addDoc(ordersCollection, order)
                    .then(({ id }) => {
                        return id;
                    })
            //}
    


            //setOrderId(orderAdded.id)
            //vaciarCarrito()
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

        if(loading) {
            return <h1>Se está generando su orden...</h1>
        }

        // if(orderId) {
        //     return <h1>El ID de su orden es: {orderId}</h1>
        // }
    }

    return (
        <div>
            <h1>Checkout</h1>
            {/* <Register onConfirm={createOrder} onClick={(e) => handleClick(e)}/> */}
        </div>
    )
}

export default Checkout
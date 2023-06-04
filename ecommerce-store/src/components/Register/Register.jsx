import React, { useState } from 'react'
import "./Register.css"
//import { Link } from 'react-router-dom'
//import { getFirestore, addDoc, collection } from 'firebase/firestore'
//import { CartContext } from '../../Context/CartContext'


const Register = ({ onConfirm, onClick }) => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            nombre, email,telefono
    }

        onConfirm(userData);
    }
    
    return (
        <div className="container">
            <h1 className="main-title">Registro de Compra</h1>
                <form className="formulario" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={({ target }) => setNombre(target.value)} />
                    <input type="email" placeholder="Ingresa tu e-mail" value={email} onChange={({ target }) => setEmail(target.value)} name="email" />
                    <input type="text" placeholder="Ingresa tu teléfono" value={telefono} onChange={({ target }) => setTelefono(target.value)} name="telefono" />
                <button className="btn" type="submit">Checkout</button>  
                </form>
        </div>
    )
}


export default Register
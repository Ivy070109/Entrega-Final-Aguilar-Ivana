import React, { useState } from 'react'

const Register = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado", {valores});
    }

    const handleValores = (e) => {
        setValores({...valores, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <h1 className="main-title">Registrarme</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input className="form-place" type="text" placeholder="Ingresá tu nombre" value={valores.nombre} onChange={handleValores} name="nombre"/>
                <input className="form-place" type="email" placeholder="Ingresá tu email" value={valores.email} onChange={handleValores} name="email"/>
                <input className="form-place" type="password" placeholder="Ingresá tu contraseña" value={valores.password} onChange={handleValores} name="password"/>
                <button className="boton" type="submit">Registrarme</button> 
            </form>
        </div>
    )
}

export default Register
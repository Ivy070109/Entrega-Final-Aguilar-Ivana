import React from 'react'
import './Banner.css'

const Banner = (props) => {
    const { greetings } = props;

    return (
        <div className="hero">
            <div className="card">
                <img src='./assets/BORA.JPG' className="card-img" alt="Background"/>
                <div className="card-img-overlay">
                    <div className="container-text">
                    <h5 className="card-title1">{greetings}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
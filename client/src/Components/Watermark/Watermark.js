import React from 'react'
import kalyanlogo from '../../Icons/kalyan-logo.svg'
import './Watermark.css'
import secret from '../../Icons/secret.svg'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={secret} alt="kalyan Logo"/>
            <span className="logoText">Crypto Meet</span>
        </div>
    )
}

export default Watermark
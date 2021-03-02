import React from 'react'
import kalyanlogo from '../../Icons/kalyan-logo.svg'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={kalyanlogo} alt="kalyan Logo"/>
            <span className="logoText">kalyan</span>
        </div>
    )
}

export default Watermark
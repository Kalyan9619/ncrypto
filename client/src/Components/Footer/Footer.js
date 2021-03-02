import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                <div className="disclaimer" style={{color: "white"}}>
                    <br/>
                    Ncrypto is fully Private and does not store any data on its servers.
                </div>
                <div className="self" style={{color: "white"}}>
                    Made for  Privacy by <a href="" target="_blank" rel="noopener noreferrer" style={{color: "indianred"}}>kalyan Somalaraju</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer
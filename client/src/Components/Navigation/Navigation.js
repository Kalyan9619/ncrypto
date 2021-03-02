import React from 'react'
import kalyanlogo from '../../Icons/kalyan-logo.svg'
import GitHubButton from 'react-github-btn'
import '../Navigation/Navigation.css'
import secret from '../../Icons/secret.svg'
import techcrypt from '../../Icons/techcrypt.jpg'
import logo from '../../Icons/logomain.png'
const Navigation = () => {
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={logo} alt="kalyan Logo"/>
                                    
                                </div>
                                
                            </div>
                        </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </header>
    )
}
export default Navigation
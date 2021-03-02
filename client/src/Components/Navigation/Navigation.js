import React from 'react'
import kalyanlogo from '../../Icons/kalyan-logo.svg'
import GitHubButton from 'react-github-btn'
import '../Navigation/Navigation.css'

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
                                    <img src={kalyanlogo} alt="kalyan Logo"/>
                                </div>
                                <div className="logoText">
                                    kalyan
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="githubStar">
                    <GitHubButton href="https://github.com/somikdatta/kalyan" 
                            data-color-scheme="no-preference: light; light: light; dark: dark;" 
                            data-icon="octicon-star" data-size="large" data-show-count="true" 
                            aria-label="Star somikdatta/kalyan on GitHub"
                    >
                    Star
                    </GitHubButton>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation
import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <div className="nav">
        <div className="l-full-width">
            <div className="grid">
                <div className="grid__item">
                    
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <Link className="nav-list__link">{'>_'}</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link className="nav-list__link nav-list__link--is-active" to="/">Home</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link className="nav-list__link" to="/about-me/">About</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link className="nav-list__link" to="/my-work/">Projects</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link className="nav-list__link" to="/contact-me/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Header

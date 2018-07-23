import React from 'react';
import Link from 'gatsby-link';

const activeStyle = {
    textDecoration: 'underline'
};

const menuItems = [
    { name: 'Home', url: '/'},
    { name: 'About', url: '/about-me/'},
    { name: 'Projects', url: '/my-work/'},
    { name: 'Contact', url: '/contact-me/'}
];

const Header = () => (
    <div className="nav">
        <div className="l-full-width">
            <div className="grid">
                <div className="grid__item">
                    
                    <ul className="nav-list">
                    <li className="nav-list__item">
                        <Link className="nav-logo nav-list__link">{'>_'}</Link>
                    </li>
                        {menuItems.map(item => (
                            <li className="nav-list__item">
                                <Link className="nav-list__link"
                                exact to={item.url} 
                                activeStyle={activeStyle}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Header

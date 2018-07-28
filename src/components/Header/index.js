import React from 'react';
import Link from 'gatsby-link';

// TODO: move to scss file, use activeClass
const activeStyle = {
    textDecoration: 'underline'
};

const menuItems = [
    { name: 'Home', url: '/'},
    { name: 'About', url: '/about-me/'},
    //{ name: 'Projects', url: '/my-work/'},
    //{ name: 'Blog', url: '/blog/'},
    { name: 'Contact', url: '/contact-me/'}
];

const Header = () => {
    const isContactPage = location.pathname === '/contact-me/';
    const navClass = isContactPage ? 'nav--dark' : '';
    return (
    <div className={`nav ${navClass}`}>
        <div className="l-full-width">
            <div className="grid">
                <div className="grid__item">
                    
                    <ul className="nav-list">
                    <li className="nav-list__item">
                        <Link className="nav-logo nav-list__link">{'$>'}</Link>
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
};

export default Header

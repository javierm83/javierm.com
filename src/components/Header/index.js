import React from 'react';
import Link from 'gatsby-link';

// TODO: move to scss file, use activeClass
const activeStyle = {
    textDecoration: 'underline'
};

const menuItems = [
    { name: 'Home', url: '/', id: '0'},
    { name: 'About', url: '/about-me/', id: '1'},
    //{ name: 'Projects', url: '/my-work/', id: '2'},
    //{ name: 'Blog', url: '/blog/', id: '3'},
    { name: 'Contact', url: '/contact-me/', id: '4'}
];

const Header = () => {
    const isContactPage = typeof window !== 'undefined' && window.location.pathname === '/contact-me/';
    const navClass = isContactPage ? 'nav--dark' : '';
    return (
    <div className={`nav ${navClass}`}>
        <div className="l-full-width">
            <div className="grid">
                <div className="grid__item">
                    
                    <ul className="nav-list">
                        {menuItems.map(item => (
                            <li key={item.id} className="nav-list__item">
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

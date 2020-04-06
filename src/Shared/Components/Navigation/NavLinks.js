import React from 'react';

import NavSingleLink from './NavSingleLink';
import './NavLinks.css';

const NavLinks = props => {

    const menuList = [
        { name: 'home', path: '/about', exact: true },
        { name: 'oferta kursów', path: '/offer' },
        { name: 'dla partnerów', path: '/partners' },
        { name: 'koszyk', path: '/orders' },
        { name: 'załóż konto/zaloguj', path: '/orders' }
    ];

    const navLinks = menuList.map(link => (
        <NavSingleLink
            key={link.name}
            path={link.path}
            name={link.name}
            exact={link.exact}
        />
    ))

    return (
        <ul className='navigation__list'>
            {navLinks}
        </ul>
    );
}

export default NavLinks;
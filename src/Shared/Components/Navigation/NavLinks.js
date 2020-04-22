import React, { useContext } from 'react';

import NavSingleLink from './NavSingleLink';
import Button from '../../Elements/Button/Button';
import { AuthContex } from '../../Contex/auth-contex';
import { ModalContex } from '../../Contex/modal-contex';
import './NavLinks.css';


const NavLinks = props => {

    const auth = useContext(AuthContex);
    const modalActivator = useContext(ModalContex);

    const menuList = [
        { name: 'home', path: '/about', exact: true },
        { name: 'oferta kursów', path: '/offer' },
        { name: 'dla partnerów', path: '/partners' },
        // auth.isLoggedIn ? { name: 'wyloguj', path: '/about', click: auth.logout } : { name: 'zaloguj/załóż konto', path: '/auth' }
    ];


    const navLinks = menuList.map(link => (
        <NavSingleLink
            key={link.name}
            path={link.path}
            name={link.name}
            exact={link.exact}
            click={link.click}
        />
    ));

    const loginButton = (
        !modalActivator.authModalActive && (
            <Button
                btnText={!auth.isLoggedIn ? 'zaloguj' : 'wyloguj'}
                btn={`navigation__list-button ${auth.isLoggedIn && 'navigation__list-button--logout'}`}
                arrowClassName='btn-arrow-right--active'
                click={auth.isLoggedIn ? auth.logout :
                    () => modalActivator.modalToggle('loginModalButton')} />)
    );

    return (
        <ul className='navigation__list'>
            {navLinks}
            {loginButton}
        </ul>
    );
};

export default NavLinks;
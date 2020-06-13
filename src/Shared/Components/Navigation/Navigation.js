import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import Logo from '../Logo/Logo';
import SideDrawer from '../Navigation/Side-Drawer';
import Backdrop from '../../Components/Backdrop/Backdrop';
import { ModalContex } from '../../Contex/modal-contex';
import './Navigation.css';

const Navigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const modalActivator = useContext(ModalContex);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };


    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop click={closeDrawerHandler} />}
            <SideDrawer classActive={drawerIsOpen && true} click={closeDrawerHandler}>
                <nav className='navigation__sideDrawer'>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <>
                <button className='nav__hamburger' onClick={drawerIsOpen ? closeDrawerHandler : openDrawerHandler}>
                    <Link className='nav__hamburger-logo' to='/about'><Logo /></Link>
                    <div className='nav__hamburger-wrapper'>
                        <div className={!modalActivator.authModalActive ? 'nav__hamburger-span' : 'nav__hamburger-span--form-active'}>
                            <span className='nav__haburger-snail'></span>
                        </div>
                        <div className={!modalActivator.authModalActive ? 'nav__hamburger-span' : 'nav__hamburger-span--form-active'}>
                            <span className='nav__haburger-snail'></span>
                        </div>
                        <div className={!modalActivator.authModalActive ? 'nav__hamburger-span' : 'nav__hamburger-span--form-active'}>
                            <span className='nav__haburger-snail'></span>
                        </div>
                    </div>
                </button>

                <nav className={`navigation ${props.navClassName}`}>
                    <Link className='header__logo' to='/'><Logo /></Link>
                    <NavLinks />
                </nav>
            </>
        </React.Fragment>
    );
};

export default Navigation;
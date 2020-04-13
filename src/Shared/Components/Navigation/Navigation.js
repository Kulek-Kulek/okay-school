import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import Logo from '../Logo/Logo';
import SideDrawer from '../Navigation/Side-Drawer';
import Backdrop from '../../../UIElements/Backdrop/Backdrop';
import './Navigation.css';

const Navigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

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
                        <div className='nav__hamburger-span'>
                            <span className='nav__haburger-snail'></span>
                        </div>
                        <div className='nav__hamburger-span'>
                            <span className='nav__haburger-snail'></span>
                        </div>
                        <div className='nav__hamburger-span'>
                            <span className='nav__haburger-snail'></span>
                        </div>
                    </div>
                </button>

                <nav className={`navigation ${props.navClassName}`}>
                    <Link className='header__logo' to='/about'><Logo /></Link>
                    <NavLinks />
                </nav>
            </>
        </React.Fragment>
    );
}

export default Navigation;
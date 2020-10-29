import React from 'react';
// import { useDispatch,useSelector } from 'react-redux';

import NavSingleLink from './NavSingleLink';
// import Button from '../../Elements/Button/Button';
// import { AuthContex } from '../../Contex/auth-contex';
// import * as actions from '../../../store/actions/index';
import './NavLinks.css';



const NavLinks = props => {

    // const authModal = useSelector(state => state.authModal);

    // const dispatch = useDispatch();

    // const auth = useContext(AuthContex);
    // const modalActivator = useContext(ModalContex);

    const menuList = [
        { name: 'home', path: '/about', exact: true },
        { name: 'oferta kursów', path: '/offer' },
        // { name: 'e-dziennik', path: '/register' }
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

    // const loginButton = (
    //     !authModal && (
    //         <Button
    //             btnText={!auth.isLoggedIn ? 'zaloguj' : 'wyloguj'}
    //             btn={`navigation__list-button ${auth.isLoggedIn && 'navigation__list-button--logout'}`}
    //             arrowClassName='btn-arrow-right--active'
    //             click={auth.isLoggedIn ? auth.logout :
    //                 () => dispatch(actions.toggleAuthtModal('authModal'))} />)
    // );

    return (
        <ul className='navigation__list'>
            {navLinks}
            {/* {loginButton} */}
            <li className='navigation__li'>
                <a href='https://i-okay-maria.web.app' className='navigation__link'>e-sekretariat</a>
            </li>
        </ul>
    );
};


export default NavLinks;
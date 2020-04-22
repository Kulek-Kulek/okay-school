import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavSingleLink.css';

const NavSingleLink = props => {

    return (
        <li className='navigation__li'>
            <NavLink className='navigation__link' to={props.path}
                exact={props.exact ? props.exact : false} onClick={props.click}
            >
                {props.name}
            </NavLink>
        </li>
    );
};

export default NavSingleLink;
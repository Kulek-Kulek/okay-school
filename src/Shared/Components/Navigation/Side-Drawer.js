import React from 'react';
import ReactDOM from 'react-dom';


import './Side-Drawer.css';

const SideDrawer = props => {

    const classes = ['side__drawer--active'];

    const portalContent = (
        <aside
            className={`side__drawer ${props.classActive && classes.join(' ')}`} onClick={props.click}>
            {props.children}
        </aside>);




    return ReactDOM.createPortal(portalContent, document.getElementById('drawer-hook'));
};

export default SideDrawer;
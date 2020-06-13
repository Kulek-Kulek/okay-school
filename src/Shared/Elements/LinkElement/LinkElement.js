import React from 'react';
import { Link } from 'react-router-dom';


import Button from '../Button/Button';

const LinkElement = props => {
    return (
        <Link
            to={props.to}
            className={props.className}>
            <Button
                btn={props.btn}
                btnText={props.btnText}
                arrowClassName={props.arrowClassName} />
        </Link>
    );
}

export default LinkElement;
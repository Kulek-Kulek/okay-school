import React from 'react';
import './Logo.css';

const Logo = props => (
    <span className={`logo ${props.logo}`}>
        <span className={`logo__pink ${props.pink}`}>O</span>
        <span className={`logo__orange ${props.orange}`}>k</span>
        <span className={`logo__green ${props.green}`}>a</span>
        <span className={`logo__blue ${props.blue}`}>y</span>
    </span>
)

export default Logo;
import React from 'react';

import Navigation from '../Navigation/Navigation';
import Carousel from '../Carousel/Carousel';
import './MainHeader.css';

const MainHeader = props => {
    return (
        <header className='header'>
            <Navigation />
            <Carousel />
        </header>
    );
}

export default MainHeader;
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import './WelcomePage.css';
import '../../../Shared/Components/Logo/Logo.css';
import typing from './typing';


const WelcomePage = props => {

    const [welcomePageLoaded, setWelcomePageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(typing, 300);
        setTimeout(() => {
            setWelcomePageLoaded(true);
        }, 4000);
    }, []);

    return (
        <React.Fragment>
            <div className='welcomePageWrapper'>
                <div className='welcomePageSloganWrapper'>
                    <div className='welcomePageSloganWrapper__helloDiv'></div>
                    <div className='welcomePageSloganWrapper__morningDiv'></div>
                </div>
            </div>
            {welcomePageLoaded && <Redirect to='/about' />}
        </React.Fragment>
    );
}

export default WelcomePage;
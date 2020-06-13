import React from 'react';

// import AuthModal from '../Modal/AuthModal';

import './UserNotLoggedin.css';


const UserNotLoggedin = props => {
    return (
        <React.Fragment>
            <div className='partners'>
                <p className='partners__warning'>zaloguj się, żeby korzystać z tej części serwisu</p>
                {/* <video className={`video ${props.videoClass}`}
                    src={props.videoSrc}
                    playsInline
                    autoPlay
                    muted
                    loop
                    poster={props.videoPosterSrc}>
                </video> */}
            </div>
        </React.Fragment>
    );
};

export default UserNotLoggedin;
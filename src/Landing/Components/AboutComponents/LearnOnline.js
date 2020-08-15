import React, { useEffect } from 'react';

import imgMac from '../../../images/learn-online/mac.png';
import { onlineLearningTypingEffect } from './learnOnlineScripts';
import { macShakeOnScroll } from './learnOnlineScripts';

import './LearnOnline.css';


const LearnOnline = props => {

    useEffect(() => {
        onlineLearningTypingEffect();
        macShakeOnScroll();
    });

    return (
        <section className='learn-online'>
            <div className='learn-online__mac-wrppper'>
                <img src={imgMac} alt='mac' className='learn-online__img' />
            </div>
            <div className='learn-online__backgorund'>
                <div className='learn-online__slogans'></div>
            </div>
        </section>
    );
};

export default LearnOnline;
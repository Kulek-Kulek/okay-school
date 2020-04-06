import React, { useEffect } from 'react';

import './LearnOnline.css';
import imgMac from '../../../images/learn-online/mac.png';
import onlineLearningTypingEffect from './LearnOnlineScript'


const LearnOnline = props => {

    useEffect(() => {
        onlineLearningTypingEffect();
    });

    return (
        <section className='learn-online'>
            <div className='learn-online__mac-wrppper'>
                <img src={imgMac} alt='mac' className='learn-online__img' />
            </div>
            <div className='learn-online__backgorund'>
                <div className='learn-online__slogans'>
                    {/* <p className='learn-online__single-slogan'>hjgfjhdsgfhgafhgashghcdsagfhgahghadfghdsghfgdshkdshkfg</p> */}
                </div>
            </div>
        </section>
    );
}

export default LearnOnline;
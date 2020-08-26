import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import imgMac from '../../../images/learn-online/mac.png';
import Button from '../../../Shared/Elements/Button/Button';
import { onlineLearningTypingEffect } from './learnOnlineScripts';
import { macShakeOnScroll } from './learnOnlineScripts';
import * as actions from '../../../store/actions/index';

import './LearnOnline.css';


const LearnOnline = props => {

    const dispatch = useDispatch();
    const contactModal = useSelector(state => state.modal.contactModal);

    useEffect(() => {
        onlineLearningTypingEffect();
        macShakeOnScroll();
    }, [contactModal]);

    return (
        <section className='learn-online'>
            <div className='learn-online__mac-wrppper'>
                <img src={imgMac} alt='mac' className='learn-online__img' />
            </div>
            <div className='learn-online__backgorund'>
                <div className='learn-online__slogans'></div>
            </div>
            <div className='learn-online__button-div'>
                <Button btnText='Wyślij wiadomość' btn='learn-online__button' arrowClassName='btn-arrow-right--active' click={() => dispatch(actions.toggleContactModal('contactModal'))} />
            </div>

        </section>
    );
};

export default LearnOnline;
import React from 'react';
import { useDispatch } from 'react-redux';


import './Footer.css';
import Logo from '../Logo/Logo';
import Button from '../../Elements/Button/Button';
import ContactModal from '../Modal/ContactModal';
import videoSrc from '../../../videos/video.mp4';
import * as actionTypes from '../../../store/actions/actionTypes';


const Footer = props => {

    const dispatch = useDispatch();

    const sendMessageButtonHandler = () => {

        dispatch({ type: actionTypes.TOGGLE_CONTACT_MODAL, modalName: 'contactModal' })
    }

    return (
        <React.Fragment>
            <ContactModal infoType='contact' />
            <footer className='footer'>
                <video className='footer__video'
                    src={videoSrc}
                    playsInline
                    autoPlay
                    muted
                    loop
                    poster={props.videoPosterSrc}>
                </video>
                <div className='footer__logo'>
                    <Logo
                        logo='footer__logo-span'
                        pink='footer__pink'
                        orange='footer__orange'
                        green='footer__green'
                        blue='footer__blue'
                    />
                </div>
                <div className='footer__contact-details'>
                    <div className='footer__info-div'>
                        <i className="fas fa-phone footer__i"></i>
                        <span className='footer__info-span'>500 097 398</span>
                    </div>
                    <div className='footer__info-div'>
                        <i className="fas fa-hourglass-end footer__i"></i>
                        <span className='footer__info-span'>Pn-So: 08.00 - 21.00</span>
                    </div>
                    <div className='footer__info-div'>
                        <i className="fas fa-envelope footer__i"></i>
                        <span className='footer__info-span'>okay@okay.edu.pl</span>
                    </div>
                    <div className='footer__info-div'>
                        <i className="far fa-lightbulb footer__i"></i>
                        <span className='footer__info-span'>Sprawy pilne: 24/7</span>
                    </div>
                    <div className='footer__info-div footer__info-div-button'>
                        <Button
                            btnText='wyślij wiadomość'
                            btn={`footer__button pulse`}
                            arrowClassName='footer__arrow btn-arrow-right--active'
                            click={sendMessageButtonHandler}
                        />
                    </div>
                    <div className='footer__info-div'>
                        Przyjemność uczenia się
                        <div className='footer__info-underline'></div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};


export default Footer;
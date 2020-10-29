import React from 'react';
import { useDispatch } from 'react-redux';


import './Footer.css';
import Logo from '../Logo/Logo';
import Button from '../../Elements/Button/Button';
import ContactModal from '../Modal/ContactModal';
import videoSrc from '../../../videos/video.mp4';
import * as actions from '../../../store/actions/index';
import { Link } from 'react-router-dom';


const Footer = props => {

    const dispatch = useDispatch();

    const sendMessageButtonHandler = () => {
        dispatch(actions.toggleContactModal('contactModal'));
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
                        <span className='footer__info-span'>Pn-So: 07.00 - 21.00</span>
                    </div>
                    <div className='footer__info-div'>
                        <i className="fas fa-envelope footer__i"></i>
                        <span className='footer__info-span'>lugowski.k@gmail.com</span>
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
                        <div className='footer__rules'>
                            <Link to='regulations/school-rules' className='footer__school-rules'>Regulamin Szkoły</Link>
                            {/* <Link to='regulations/moneytransfer-rules' className='footer__moneytransfer-rules'>Regulamin Przelewy24</Link> */}
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};


export default Footer;
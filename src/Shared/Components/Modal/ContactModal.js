import React, { useContext } from 'react';
import ReactDOM from 'react-dom';


import './Modal.css';
import Input from '../../Elements/Input/Input';
import { useForm } from '../../Hooks/form-hook';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../../Utility/form-validators';
import Button from '../../Elements/Button/Button';
import { ModalContex } from '../../Contex/modal-contex';
import Logo from '../Logo/Logo';


const ContactModal = props => {

    const [formState, inputHandler] = useForm({
        name: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        tel: {
            value: '',
            isValid: false
        },
        textarea: {
            value: '',
            isValid: true
        }
    },
        false
    );

    const modalActivator = useContext(ModalContex);

    const modalDataSubmitHandler = (e) => {
        e.preventDefault();
        formState.isValid && modalActivator.modalToggle('cancelContactModalButton');
        console.log(formState.inputs);
    };

    const portalContent = (
        <div className={`pop-up-modal ${modalActivator.contactModalActive && 'pop-up-modal--active'}`}>
            <div className='pop-up-modal__top'>
                <div className='pop-up-modal__logo'>
                    <Logo logo='pop-up-modal__logo-div' pink='pop-up-modal__logo-pink' />
                </div>
                <div className='pop-up-modal__contact-data'>
                    <div className='footer__contact-details pop-up-modal__contact-details'>
                        <div className='footer__info-div pop-up-modal__info-div'>
                            <i className="fas fa-phone footer__i"></i>
                            <span className='footer__info-span pop-up-modal__info-span'>500 097 398</span>
                        </div>
                        <div className='footer__info-div pop-up-modal__info-div'>
                            <i className="fas fa-hourglass-end footer__i"></i>
                            <span className='footer__info-span pop-up-modal__info-span'>Pn-So: 08.00 - 21.00</span>
                        </div>
                        <div className='footer__info-div pop-up-modal__info-div'>
                            <i className="fas fa-envelope footer__i"></i>
                            <span className='footer__info-span pop-up-modal__info-span'>okay@okay.edu.pl</span>
                        </div>
                        <div className='footer__info-div pop-up-modal__info-div'>
                            <i className="far fa-lightbulb footer__i"></i>
                            <span className='footer__info-span pop-up-modal__info-span'>Sprawy pilne: 24/7</span>
                        </div>
                        <div className='footer__info-div pop-up-modal__info-div'>Przyjemność z uczenia się</div>
                    </div>
                </div>

            </div>
            <div className='pop-up-modal__inputs'>
                <Input
                    input='input'
                    type='text'
                    placeholder='Twoje imię i nazwisko'
                    id='name'
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
                    onInput={inputHandler}
                    classInput='pop-up-modal__input'
                    inputWrapperClass='pop-up-modal__input-wrapper' />
                <Input
                    input='input'
                    type='email'
                    placeholder='Twój adres email'
                    id='email'
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                    classInput='pop-up-modal__input'
                    inputWrapperClass='pop-up-modal__input-wrapper' />
                <Input
                    input='input'
                    type='tel'
                    placeholder='Podaj telefon kontaktowy.'
                    id='tel'
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                    onInput={inputHandler}
                    classInput='pop-up-modal__input'
                    inputWrapperClass='pop-up-modal__input-wrapper' />
                <Input
                    placeholder='Tutaj możesz wpisać woje uwagi.'
                    id='textarea'
                    validators={[VALIDATOR_MINLENGTH(0)]}
                    onInput={inputHandler}
                    rows={20}
                    classInput='pop-up-modal__input'
                    inputWrapperClass='pop-up-modal__input-wrapper' />
            </div>
            <div className='pop-up-modal__buttons'>
                <Button
                    btnText='Anuluj'
                    btn='pop-up-modal__button'
                    arrowClassName='btn-arrow-right--active'
                    click={() => modalActivator.modalToggle('cancelContactModalButton')} />
                <Button
                    btnText='Wyślij'
                    type='submit'
                    btn='pop-up-modal__button'
                    arrowClassName='btn-arrow-right--active'
                    click={modalDataSubmitHandler} />
            </div>
        </div>
    );


    return ReactDOM.createPortal(portalContent, document.getElementById('contact-modal-hook'));
};

export default ContactModal;
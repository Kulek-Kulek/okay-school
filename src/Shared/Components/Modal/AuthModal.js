import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';


import Input from '../../../Shared/Elements/Input/Input';
import Spinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../Modal/ErrorModal';
import { useForm } from '../../../Shared/Hooks/form-hook';
import { useHttpClient } from '../../Hooks/http-hook';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../../Utility/form-validators';
import Button from '../../../Shared/Elements/Button/Button';
import './AuthModal.css';
import { AuthContex } from '../../../Shared/Contex/auth-contex';
import * as actionTypes from '../../../store/actions/actionTypes';


const Auth = props => {

    const authModal = useSelector(state => state.modal.authModal);

    const dispatch = useDispatch();

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [errorModalActive, setErrorModalActive] = useState(false);
    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            },
        },
        false
    );

    const auth = useContext(AuthContex);


    const authSubmitHandler = async e => {
        e.preventDefault();
        if (isLoginMode) {
            try {
                await sendRequest(process.env.REACT_APP_BACKEND_URL + '/students/login',
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login();

            } catch (err) {
                setErrorModalActive(true);
            }
        } else {
            try {
                await sendRequest(process.env.REACT_APP_BACKEND_URL + '/students/signup',
                    'POST',
                    JSON.stringify({
                        name: formState.inputs.name.value,
                        surname: formState.inputs.surname.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                        mobile: formState.inputs.tel.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login();

            } catch (err) {
                setErrorModalActive(true);
            }
        }
    };

    const switchButtonModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                surname: undefined,
                tel: undefined,
                name: undefined,
            },
                formState.inputs.email.isLoginMode && formState.inputs.password.isValid)

        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                },
                surname: {
                    value: '',
                    isValid: false
                },
                tel: {
                    value: '',
                    isValid: false
                }
            },
                false)
        };
        setIsLoginMode(prevState => !prevState);
    };

    const errorModalCancelHandler = () => {
        setErrorModalActive(false);
        clearError();
    }

    const signupInputs = (
        <React.Fragment>
            <Input
                input='input'
                type='text'
                placeholder='Jak masz na imię?'
                id='name'
                errorText='Podaj swoje imię.'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
                onInput={inputHandler}
                inputWrapperClass='auth-modal__input-wrapper'
                classInput='auth-modal__input' />
            <Input
                input='input'
                type='text'
                placeholder='Jak się nazywasz?'
                id='surname'
                errorText='Podaj swoje nazwisko.'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
                onInput={inputHandler}
                inputWrapperClass='auth-modal__input-wrapper'
                classInput='auth-modal__input' />
            <Input
                input='input'
                type='tel'
                placeholder='Podaj telefon kontaktowy.'
                id='tel'
                errorText='Wprowadź poprawny numer telefonu.'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                onInput={inputHandler}
                inputWrapperClass='auth-modal__input-wrapper'
                classInput='auth-modal__input' />
        </React.Fragment>
    );

    const authModalClasses = ['auth-modal', 'auth-modal--active'];

    const portalContent = (
        <React.Fragment>
            <div className={authModal ? authModalClasses.join(' ') : 'auth-modal'} >
                <ErrorModal
                    class={errorModalActive && ['error-modal--active', 'error-modal-auth'].join(' ')}
                    errorMessage={error}
                    errorHeaderMessage='Błąd logowania.'
                    btnText='Zamknij'
                    click={errorModalCancelHandler} />
                {loading ? < Spinner /> : (
                    <div className={errorModalActive ? 'auth-modal-invisible' : ''}>
                        <span className='auth-modal__info-span'>Zaloguj się do serwisu, lub załóż konto.</span>
                        <i className="fa fa-times-circle auth-modal__cancel-icon" aria-hidden="true" onClick={() => dispatch({ type: actionTypes.TOGGLE_AUTH_MODAL, modalName: 'authModal' })}></i>
                        <form onSubmit={authSubmitHandler} className='auth-modal__form'>
                            {!isLoginMode && signupInputs}
                            <Input
                                input='input'
                                type='email'
                                placeholder='Twój email'
                                id='email'
                                errorText='Wprowadź poprawny adres email.'
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                inputWrapperClass='auth-modal__input-wrapper'
                                classInput='auth-modal__input' />
                            <Input
                                input='input'
                                type='password'
                                placeholder='Twoje hasło'
                                id='password'
                                errorText='Wprowadź poprawne hasło.'
                                validators={[VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(5)]}
                                onInput={inputHandler}
                                inputWrapperClass='auth-modal__input-wrapper'
                                classInput='auth-modal__input' />
                            <Button
                                type='submit'
                                btnText={isLoginMode ? 'Zaloguj' : 'Załóż konto'}
                                disabled={!formState.isValid}
                                btn={isLoginMode ? 'auth-modal__login-button' : 'auth-modal__signup-button'}
                                arrowClassName='btn-arrow-right--active'
                            />
                        </form>
                        <div className='auth-modal__helper'>
                            <span className='auth-modal__or'>lub</span>
                            <Button
                                type='text'
                                btnText={isLoginMode ? 'Załóż konto' : 'Zaloguj'}
                                click={switchButtonModeHandler}
                                btn={isLoginMode ? 'auth-modal__signup-button' : 'auth-modal__login-button'}
                                arrowClassName='btn-arrow-right--active' />
                            <a href='/' className='auth-modal__a'>Nie pamiętam hasła</a>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );

    return ReactDOM.createPortal(portalContent, document.getElementById('auth-modal-hook'));
};


export default Auth;
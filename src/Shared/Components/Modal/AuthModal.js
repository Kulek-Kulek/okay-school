import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';


import Input from '../../../Shared/Elements/Input/Input';
import { useForm } from '../../../Shared/Hooks/form-hook';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../../Utility/form-validators';
import Button from '../../../Shared/Elements/Button/Button';
import './AuthModal.css';
import { AuthContex } from '../../../Shared/Contex/auth-contex';


const Auth = props => {

    const [isLoginMode, setIsLoginMode] = useState(true);

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

    const authSubmitHandler = e => {
        e.preventDefault();
        // console.log(formState.inputs);
        auth.login();
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

    const signupInputs = (
        <React.Fragment>
            <Input
                input='input'
                type='text'
                placeholder='Jak masz na imię?'
                id='name'
                label='Twoje imię'
                errorText='Podaj swoje imię.'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
                onInput={inputHandler}
                classInput='auth-modal__input' />
            <Input
                input='input'
                type='text'
                placeholder='Jak się nazywasz?'
                id='surname'
                label='Twóje nazwisko.'
                errorText='Podaj swoje nazwisko.'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
                onInput={inputHandler}
                classInput='auth-modal__input' />
            <Input
                input='input'
                type='tel'
                placeholder='Podaj telefon kontaktowy.'
                id='tel'
                label='Telefon do kontaktu.'
                errorText='Wprowadź poprawny numer telefonu.'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                onInput={inputHandler}
                classInput='auth-modal__input' />
        </React.Fragment>
    );

    const portalContent = (
        <React.Fragment>
            <div className='auth-modal'>
                <form onSubmit={authSubmitHandler} className='auth-modal__form'>
                    {!isLoginMode && signupInputs}
                    <Input
                        input='input'
                        type='email'
                        placeholder='Twój email'
                        id='email'
                        label='Twój email'
                        errorText='Wprowadź poprawny adres email.'
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                        classInput='auth-modal__input' />
                    <Input
                        input='input'
                        type='password'
                        placeholder='Twoje hasło'
                        id='password'
                        label='Twóje hasło'
                        errorText='Wprowadź poprawne hasło.'
                        validators={[VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(5)]}
                        onInput={inputHandler}
                        classInput='auth-modal__input' />
                    <Button
                        type='submit'
                        btnText={isLoginMode ? 'Zaloguj' : 'Załóż konto'}
                        disabled={!formState.isValid}
                        btn='auth-modal__button' />
                </form>
                <Button
                    type='text'
                    btnText={isLoginMode ? 'Załóż konto' : 'Zaloguj'}
                    click={switchButtonModeHandler}
                    btn='auth-modal__button' />
                <a href='/' className='auth-modal__a'>Nie pamiętam hasła</a>
            </div>
        </React.Fragment>
    );

    return ReactDOM.createPortal(portalContent, document.getElementById('auth-modal-hook'));
};

export default Auth;
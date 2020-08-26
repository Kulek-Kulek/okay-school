import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../../Shared/Components/Logo/Logo';
import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import WeekdaysCheckbox from '../../../Shared/Components/WeekdaysCheckbox/WeekdaysCheckbox';
import { dataType } from '../../../Utility/dataModalData';
import Input from '../../../Shared/Elements/Input/Input';
import Button from '../../../Shared/Elements/Button/Button';
import ErrorModal from '../../../Shared/Components/Modal/ErrorModal';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import Footer from '../../../Shared/Components/Footer/Footer';
import { useForm } from '../../../Shared/Hooks/form-hook';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import * as actions from '../../../store/actions/index';
import './Basket.css';

const Basket = props => {

    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    const [weekDays, setWeekDays] = useState();

    const { loading, error, status, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const history = useHistory();

    const [formState, inputHandler] = useForm({
        orderName: {
            value: '',
            isValid: false
        },
        orderSurname: {
            value: '',
            isValid: false
        },
        orderEmail: {
            value: '',
            isValid: false
        },
        orderBirthday: {
            value: '',
            isValid: false
        },
        orderMobile: {
            value: '',
            isValid: false
        },
        orderComments: {
            value: '',
            isValid: false
        },
        orderCourseType: {
            value: '',
            isValid: false
        },
        orderCourseRules: {
            value: '',
            isValid: false
        },
        orderMarketingRules: {
            value: true,
            isValid: true
        },
    },
        false
    );


    useEffect(() => {
        const dateButton = document.querySelector('.basket__input-order-date');
        dateButton.addEventListener('focus', function () {
            this.setAttribute('type', 'date');
        });
        dateButton.addEventListener('blur', function () {
            this.setAttribute('type', 'text');
        });
    }, []);

    const checkedDays = useCallback((days) => {
        setWeekDays(days);
    }, []);


    const cancelOrderButtonHandler = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const errorModalCancelHandler = () => {
        setErrorModalActive(false);
        clearError();
        dispatch(actions.errorModalActivator(false, error));
        history.goBack();
    }

    const submitOrderFormHandler = async e => {
        e.preventDefault();

        try {
            await sendRequest(process.env.REACT_APP_BACKEND_URL + '/orders',
                'POST',
                JSON.stringify({
                    name: formState.inputs.orderName.value,
                    surname: formState.inputs.orderSurname.value,
                    mobile: formState.inputs.orderMobile.value,
                    email: formState.inputs.orderEmail.value,
                    comments: formState.inputs.orderComments.value,
                    birthday: formState.inputs.orderBirthday.value,
                    marketingRules: formState.inputs.orderMarketingRules.value,
                    courseRules: formState.inputs.orderCourseRules.value,
                    lessonType: formState.inputs.orderCourseType.value,
                    courseName: basket.courseName,
                    coursePrice: basket.price,
                    unavailable: weekDays,
                    submissionDate: new Date().toLocaleDateString(),
                    submissionTime: new Date().toLocaleTimeString(),
                }),
                {
                    'Content-Type': 'application/json'
                })
            setErrorModalActive(true);
            dispatch(actions.errorModalActivator(true, error));
        } catch (err) {
            console.log(err);
            setErrorModalActive(true);
            dispatch(actions.errorModalActivator(true, error));
        }
    }

    const data = (
        Object.keys(dataType.order).map((item, index) =>
            < React.Fragment key={index}>
                <Input
                    input={dataType.order[item].input}
                    id={dataType.order[item].id}
                    name={dataType.order[item].name}
                    type={dataType.order[item].type}
                    placeholder={dataType.order[item].placeholder}
                    label={dataType.order[item].label}
                    classLabel={dataType.order[item].classLabel}
                    onInput={inputHandler}
                    validators={dataType.order[item].validators}
                    errorText={dataType.order[item].errorText}
                    classError={dataType.order[item].classError}
                    classInput={dataType.order[item].class}
                    options={[{ name: 'Stacjonarnie' }, { name: 'Online' }, { name: 'Blended - online i stacjonarnie' }]}
                    selectDefaultValue={dataType.order[item].selectDefaultValue}
                    classOption={dataType.order[item].classOption}
                    classSelect={dataType.order[item].class}
                    inputWrapperClass={dataType.order[item].inputWrapperClass}
                    initialIsValid={dataType.order[item].initialIsValid}
                    initialIsChecked={dataType.order[item].initialIsChecked}
                    initialValue={dataType.order[item].initialValue}
                />
            </ React.Fragment>
        )
    )


    return (
        <React.Fragment>
            <MainHeader>
                <Navigation />
            </MainHeader>
            <Main mainClassName='main-basket'>
                <div className='basket'>
                    <div className='basket__heading'>
                        <div className='basket__logo'>
                            <Logo logo='basket__logo-div' pink='basket__logo-pink' />
                        </div>
                        <div className='basket__course'>
                            <div className='basket__course-type-chosen'>
                                <div className='basket__course-name'>
                                    <span>Wybierasz kurs: </span>
                                    <span>{basket.courseName}</span>
                                </div>
                                <div className='basket__course-price'>
                                    <span>{`Forma zajęć: ${formState.inputs.orderCourseType.value}`}</span>
                                    <span>{`Cena całego kursu: ${basket.price} PLN`}</span>
                                    <span>Możesz zrezygnować w ciągu dwóch tygodni</span>
                                </div>
                            </div>
                            <span className='basket__slogan'>Przyjemność z uczenia się</span>
                            <div className='basket__underline'></div>
                        </div>
                    </div>
                    <div className='basket__form-wrapper'>
                        {loading ? <Spinner /> : (
                            errorModalActive ? <ErrorModal
                                class={errorModalActive && 'error-modal--active basket__error-modal'}
                                errorMessage={status ? 'Dziękujemy za złożenie zamówienia. Skontaktujemy się z Tobą w ciągu jednego dnia.' : error}
                                errorHeaderMessage={status ? 'Zamówienie zostało przyjęte.' : 'Nie udało mi się stworzyć zamówienia.'}
                                btnText='Zamknij'
                                click={errorModalCancelHandler}
                                status={status}
                            /> : (
                                    <form className='basket__form' onSubmit={submitOrderFormHandler}>
                                        <div className='basket__input-orders-wrapper'>
                                            {data}
                                        </div>
                                        <WeekdaysCheckbox
                                            checkedDays={checkedDays}
                                            weekdaysHeading='Wybierz TYLKO te dni, w które NIE możesz mieć zajęć'
                                            classWeekdaysHeading='basket__weekdaysHeading' />
                                        <div className='basket__button-wrapper'>
                                            <Button
                                                btn='basket__button'
                                                btnText='Anuluj'
                                                click={cancelOrderButtonHandler} />
                                            <Button
                                                btn='basket__button'
                                                btnText='Wyślij zamówienie'
                                                arrowClassName='footer__arrow btn-arrow-right--active'
                                                disabled={!formState.isValid}
                                                type='submit' />
                                        </div>
                                    </form>
                                )
                        )
                        }
                    </div>
                </div>
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default Basket;
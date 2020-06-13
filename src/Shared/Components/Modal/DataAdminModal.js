import React, { useState, useEffect } from 'react';

import Logo from '../Logo/Logo';
import Input from '../../Elements/Input/Input';
import Spinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../Modal/ErrorModal';
import { useForm } from '../../Hooks/form-hook';
import { dataType } from '../../../Utility/dataModalData';
import { useHttpClient } from '../../Hooks/http-hook';
import './DataAdminModal.css';
import Button from '../../Elements/Button/Button';


const DataAdminModal = props => {

    const [errorModalActive, setErrorModalActive] = useState(false);

    const [select, setSelect] = useState('Brak danych');

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm({
        name: {
            value: '',
            isValid: false
        },
        surname: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
        mobile: {
            value: '',
            isValid: false
        }
    },
        false
    );


    useEffect(() => {
        if (props.infoType === 'groups') {
            setFormData({ name: '' }, false);
        }
        if (props.infoType === 'updateGroups') {
            setFormData({ name: '' }, false);
        }

    }, [props.infoType, setFormData]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/groups');
                setSelect(responseData);
            } catch (err) {
                setErrorModalActive(true);
            }
        }
        fetchData();

    }, [sendRequest]);

    const formSubmitHandler = async e => {
        e.preventDefault();
        let path;
        let body;
        let method;
        switch (props.infoType) {
            case 'students':
                path = props.infoType + '/signup';
                body = JSON.stringify({
                    name: formState.inputs.name.value,
                    surname: formState.inputs.surname.value,
                    mobile: formState.inputs.mobile.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                });
                method = 'POST';
                break;
            case 'teachers':
                path = props.infoType + '/create-teacher';
                body = JSON.stringify({
                    name: formState.inputs.name.value,
                    surname: formState.inputs.surname.value,
                    mobile: formState.inputs.mobile.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                });
                method = 'POST';
                break;
            case 'partners':
                path = props.infoType + '/create-partner';
                method = 'POST';
                break;
            case 'groups':
                path = props.infoType + '/create-group';
                body = JSON.stringify({
                    name: formState.inputs.name.value
                });
                method = 'POST';
                break;
            case 'updateGroups':
                path = 'groups/' + formState.inputs.group.value;
                body = JSON.stringify({
                    studentId: props.studentId,
                });
                method = 'PATCH';
                break;
            default: path = 'signup';
                body = JSON.stringify({
                    name: formState.inputs.name.value,
                    surname: formState.inputs.surname.value,
                    mobile: formState.inputs.mobile.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                });
                method = 'POST';
        }

        try {
            await sendRequest(`http://localhost:5000/api/${path}`,
                method,
                body,
                {
                    'Content-Type': 'application/json'
                }
            );
            props.dataLoaded(formState.inputs);
        } catch (err) {
            setErrorModalActive(true);
        }
    }

    const hideFormHandler = (e) => {
        e.preventDefault();
        const form = [...document.querySelectorAll('.add-data-modal')];
        form.forEach(item => item.classList.remove('add-data-modal--active'));

    }
    const errorModalCancelHandler = () => {
        setErrorModalActive(false);
        clearError();

    }
    let data;
    if (props.infoType) {
        data = (
            Object.keys(dataType[props.infoType]).map((item, index) =>
                < React.Fragment key={index}>
                    <Input
                        input={dataType[props.infoType][item].input}
                        id={dataType[props.infoType][item].id}
                        type={dataType[props.infoType][item].type}
                        placeholder={dataType[props.infoType][item].placeholder}
                        onInput={inputHandler}
                        validators={dataType[props.infoType][item].validators}
                        errorText={dataType[props.infoType][item].errorText}
                        classInput='add-data-modal__input'
                        options={select.groups}
                        classOption='add-data-modal__option'
                        classSelect='add-data-modal__select'
                    />
                </React.Fragment >
            )
        )
    };

    return (
        <React.Fragment>
            {loading ? <Spinner /> : (
                errorModalActive ? <ErrorModal
                    class={errorModalActive && 'error-modal--active'}
                    errorMessage={error}
                    errorHeaderMessage='Błędne dane ucznia.'
                    btnText='Zamknij'
                    click={errorModalCancelHandler}
                /> :
                    (
                        <form onSubmit={formSubmitHandler} className={`add-data-modal ${props.class}`}>
                            <Logo logo='add-data-modal__logo' />
                            {data}
                            <div className='add-data-modal__buttons'>
                                <Button
                                    type='submit'
                                    btnText={`Dodaj ${props.btnTextContent}`}
                                    disabled={!formState.isValid}
                                    btn={`${!formState.isValid ? 'add-data-modal__button--disabled' : 'add-data-modal__button'}`}
                                />
                                <Button
                                    type='text'
                                    btnText='Anuluj'
                                    click={hideFormHandler}
                                    btn='add-data-modal__button'
                                />
                            </div>
                        </form>
                    )
            )
            }
        </React.Fragment>
    );
}

export default DataAdminModal;
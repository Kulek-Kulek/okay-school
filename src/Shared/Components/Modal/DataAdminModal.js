import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import Input from '../../Elements/Input/Input';
import Spinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../Modal/ErrorModal';
import WeekdaysCheckbox from '../../Components/WeekdaysCheckbox/WeekdaysCheckbox'
import { useForm } from '../../Hooks/form-hook';
import { dataType } from '../../../Utility/dataModalData';
import { useHttpClient } from '../../Hooks/http-hook';
import Button from '../../Elements/Button/Button';
import * as actions from '../../../store/actions/index';
import './DataAdminModal.css';


const DataAdminModal = props => {

    const dispatch = useDispatch();

    const addAdminModal = useSelector(state => state.modal.addAdminModal);
    const adminData = useSelector(state => state.adminData);
    const selectGroups = useSelector(state => state.groups)

    const [errorModalActive, setErrorModalActive] = useState(false);

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [weekDays, setWeekDays] = useState();

    const [newDataAdded, setNewDataAdded] = useState();


    const [formState, inputHandler, setFormData] = useForm({
        studentName: {
            value: '',
            isValid: false
        },
        studentSurname: {
            value: '',
            isValid: false
        },
        studentEmail: {
            value: '',
            isValid: false
        },
        studentPassword: {
            value: '',
            isValid: false
        },
        studentMobile: {
            value: '',
            isValid: false
        }
    },
        false
    );

    useEffect(() => {
        switch (adminData.infoType) {
            case 'groups':
                setFormData({
                    groupName: {
                        value: '',
                        isValid: false
                    },
                    lessonLength: {
                        value: '',
                        isValid: false
                    },
                    courseLength: {
                        value: '',
                        isValid: false
                    }
                }, false);
                break;
            case 'teachers':
                setFormData({
                    teacherName: {
                        value: '',
                        isValid: false
                    },
                    teacherSurname: {
                        value: '',
                        isValid: false
                    },
                    teacherEmail: {
                        value: '',
                        isValid: false
                    },
                    teacherMobile: {
                        value: '',
                        isValid: false
                    },
                    teacherPassword: {
                        value: '',
                        isValid: false
                    }
                }, false);
                break;
            case 'updateGroups':
                setFormData({
                    updatedGroupName: {
                        value: '',
                        isValid: false
                    }
                }, false);
                break;
            default: setFormData({
                studentName: {
                    value: '',
                    isValid: false
                },
                studentSurname: {
                    value: '',
                    isValid: false
                },
                studentEmail: {
                    value: '',
                    isValid: false
                },
                studentPassword: {
                    value: '',
                    isValid: false
                },
                studentMobile: {
                    value: '',
                    isValid: false
                }
            },
                false
            );
        }
    }, [adminData.infoType, setFormData]);

    useEffect(() => {
        dispatch(actions.fetchGroups('Wybierz grupę'));
    }, [dispatch]);

    useEffect(() => {
        error && dispatch(actions.errorModalActivator(true, error));
    }, [dispatch, errorModalActive, error, adminData.loadedData]);

    const formSubmitHandler = async e => {
        e.preventDefault();
        if (addAdminModal) {
            dispatch(actions.toggleAddAdminModal('addAdminModal'));
        } else {
            dispatch(actions.toggleDataAdminModal('dataAdminModal'));
        }
        let path;
        let body;
        let method;
        let addedData = (adminData.infoType.slice(0, -1));
        switch (adminData.infoType) {
            case 'students':
                path = adminData.infoType + '/signup';
                body = JSON.stringify({
                    name: formState.inputs.studentName.value,
                    surname: formState.inputs.studentSurname.value,
                    mobile: formState.inputs.studentMobile.value,
                    email: formState.inputs.studentEmail.value,
                    password: formState.inputs.studentPassword.value
                });
                method = 'POST';
                break;
            case 'teachers':
                path = adminData.infoType + '/create-teacher';
                body = JSON.stringify({
                    name: formState.inputs.teacherName.value,
                    surname: formState.inputs.teacherSurname.value,
                    mobile: formState.inputs.teacherMobile.value,
                    email: formState.inputs.teacherEmail.value,
                    password: formState.inputs.teacherPassword.value
                });
                method = 'POST';
                break;
            case 'partners':
                path = adminData.infoType + '/create-partner';
                method = 'POST';
                break;
            case 'groups':
                path = adminData.infoType + '/create-group';
                body = JSON.stringify({
                    name: formState.inputs.groupName.value,
                    lessonLength: formState.inputs.lessonLength.value,
                    courseLength: formState.inputs.courseLength.value,
                    lessonDayTime: weekDays
                });
                method = 'POST';
                break;
            case 'updateGroups':
                path = 'groups/' + formState.inputs.updatedGroupName.value;
                body = JSON.stringify({
                    studentId: adminData.studentId,
                    teacherId: adminData.teacherId
                });
                method = 'PATCH';
                break;
            default: path = 'signup';
                body = JSON.stringify({
                    name: formState.inputs.studentName.value,
                    surname: formState.inputs.studentSurname.value,
                    mobile: formState.inputs.studentMobile.value,
                    email: formState.inputs.studentEmail.value,
                    password: formState.inputs.studentPassword.value
                });
                method = 'POST';
        }

        try {
            const response = await sendRequest(`http://localhost:5000/api/${path}`,
                method,
                body,
                {
                    'Content-Type': 'application/json'
                }
            );
            setNewDataAdded(response[addedData]);
        } catch (err) {
            console.log(err);
            setErrorModalActive(true);
        }
    }

    useEffect(() => {
        if (newDataAdded) {
            dispatch(actions.addNewData(newDataAdded));
        }
    }, [newDataAdded, dispatch]);

    const hideFormHandler = (e) => {
        e.preventDefault();
        dispatch(actions.toggleDataAdminModal('dataAdminModal'));
    }

    const errorModalCancelHandler = () => {
        dispatch(actions.errorModalActivator(false, error));
    }

    const checkedDays = useCallback((days) => {
        setWeekDays(days);
    }, []);

    let data;
    if (adminData.infoType) {
        data = (
            Object.keys(dataType[adminData.infoType]).map((item, index) =>
                < React.Fragment key={index}>
                    <Input
                        input={dataType[adminData.infoType][item].input}
                        id={dataType[adminData.infoType][item].id}
                        name={dataType[adminData.infoType][item].name}
                        type={dataType[adminData.infoType][item].type}
                        placeholder={dataType[adminData.infoType][item].placeholder}
                        label={dataType[adminData.infoType][item].label}
                        classLabel={dataType[adminData.infoType][item].classLabel}
                        onInput={inputHandler}
                        validators={dataType[adminData.infoType][item].validators}
                        errorText={dataType[adminData.infoType][item].errorText}
                        classInput={dataType[adminData.infoType][item].class}
                        options={props.selectGroups ? props.selectGroups : selectGroups.groups}
                        classOption='add-data-modal__option'
                        classSelect='add-data-modal__select'
                        inputWrapperClass={dataType[adminData.infoType][item].inputWrapperClass}
                        initialIsValid={dataType[adminData.infoType][item].initialIsValid}
                    />
                </ React.Fragment>
            )
        )
    };

    return (
        <React.Fragment>
            {loading ? <Spinner /> : (
                adminData.errorModalActivator ? <ErrorModal
                    class='error-modal--active'
                    errorMessage={adminData.error}
                    errorHeaderMessage='Błędne dane ucznia.'
                    btnText='Zamknij'
                    click={errorModalCancelHandler}
                /> :
                    (
                        <form onSubmit={formSubmitHandler} className={`add-data-modal ${props.classDataAdminModal}`}>
                            <div className='add-data-modal__heading'>
                                <Logo logo='add-data-modal__logo' pink='add-data-modal__logo-pink' />
                            </div>
                            <div>{props.chosenCourseTitle}</div>
                            <div className='add-data-modal__group-info'>
                                {data}
                            </div>
                            {adminData.infoType === 'groups' && <WeekdaysCheckbox
                                checkboxWrapperClass={'add-data-modal__checkbox-wrapper'}
                                checkedDays={checkedDays}
                                weekdaysHeading={props.weekdaysHeading}
                                classWeekdaysHeading='add-data-modal__schedlue' />}
                            <div className='add-data-modal__buttons'>
                                <Button
                                    type='submit'
                                    btnText={props.btnTextContent || 'Dodaj'}
                                    disabled={!formState.isValid}
                                    btn='add-data-modal__button'
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